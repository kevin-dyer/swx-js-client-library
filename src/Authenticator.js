// === IMPORTS ===
const Token = require('./Token')
const RESTClient = require('./RESTClient')

const crypto = require('crypto')

// === UTILITIES ===
function generateRandomString() {
  return Math.random().toString(36).slice(2)
}

function getVerifier() {
  const verKey = crypto.randomBytes(32)
  return base64URLEncode(verKey)
}

function base64URLEncode(str) {
  return str.toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '')
}

function getChallenge(buffer) {
  return base64URLEncode(crypto.createHash('sha256').update(buffer).digest('base64'))
}


// === CLASS ===
/**
 * @class
 * @classdesc Create an Authenticator.
 * @author hraschke
 */

class Authenticator {
  /**
   * @constructor
   * @param {Object} options
   * @param {String} options.clientId
   * @param {String} options.redirectUri
   * @param {String} options.scope
   * @param {RESTClient | Object} options.restClient
   */
  constructor({ clientId, redirectUri, scope, restClient }) {
    this._clientId = clientId
    this._redirectUri = redirectUri
    this._scope = scope
    this._restClient = restClient instanceof RESTClient ? restClient : new RESTClient(restClient)

    this._state = generateRandomString()
    this._nonce = generateRandomString()
    const verifier = getVerifier()
    this.pkceCodeVerifier = verifier
    this.codeChallenge = getChallenge(verifier)
  }

  getAuthenticateUrl = () => {
    return this._restClient.makeRequestUrl({
      endpoint: '/oauth2/auth',
      uriParams: this._getAuthParams()
    })
  }

  getToken = ({ code }) => {
    const response = this._restClient.request({
      method: 'POST',
      endpoint: '/oauth2/token',
      body: this._getTokenBody(code),
      contentType: 'application/x-www-form-urlencoded'
    })

    return response.then(token => {
      return token
    })
  }

  renewToken = ({ refreshToken }) => {
    const response = this._restClient.request({
      method: 'POST',
      endpoint: '/oauth2/token',
      body: this._getRefreshTokenBody({ refreshToken }),
      contentType: 'application/x-www-form-urlencoded'
    })

    return response.then(token => {
      return token
    })
  }

  /**
   * @method
   * @public
   * @async
   * @summary THIS METHOD IS DEPRECATED as per the use of the IDP to authenticate. You can no longer receive a token this way.
   * @param {String} clientId - The clientId
   * @param {String} clientSecret - The clientSecret
   * @return {Promise} - Returns a Promise that, when fulfilled, will return the value of the returned token.
   */
  DEPRECATED_getToken = ({ clientId, clientSecret }) => {
    const getTokenBody = {
      'grant_type': 'client_credentials',
      'client_id': clientId,
      'client_secret': clientSecret,
    }
    return fetch('/oauth2/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(getTokenBody)
    }).then(token => {
      return new Token(token)
    })
  }
  
  // === PRIVATE METHODS ===
  _getAuthParams = () => {
    return {
      client_id: this._clientId,
      redirect_uri: this._redirectUri,
      scope: this._scope,
      response_type: "code",
      response_mode: "form_post",
      code_challenge_method: "S256",
      code_challenge: this.codeChallenge,
      state: this._state,
      nonce: this._nonce
    }
  }

  _getTokenBody = (code) => {
    return {
      grant_type: 'authorization_code',
      client_id: this._clientId,
      code,
      redirect_uri: this._redirectUri,
      code_verifier: this.pkceCodeVerifier
    }
  }

  _getRefreshTokenBody = ({ refreshToken }) => {
    return {
      grant_type: 'refresh_token',
      client_id: this._clientId,
      refresh_token: refreshToken
    }
  }
}

module.exports = Authenticator