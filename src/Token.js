
/**
 * @class
 * @classdesc Create a Token
 * @property {String} accessToken - the "access_token" of the token.
 * @property {String} refreshToken - the "refresh_token" of the token.
 * @property {String} idToken - the "id_token" of the token.
 * @property {String} tokenType - the type of the token (should be "bearer")
 * @property {Array} scope - the scopes available to the token
 * @property {Boolean} expired - indicates whether the token is expired.
 * @author hraschke
 */
class Token {
  /**
   * @constructor
   * @param {Object} options
   * @param {String} options.access_token - The token's "access_token" value
   * @param {String} [options.refresh_token] - The token's "refresh_token" value
   * @param {String} [options.id_token] - The token's "id_token" value
   * @param {String} options.token_type - Type of token. It should be "bearer"
   * @param {String} [options.scope] - List of requested scopes, separated by spaces
   * @param {Number} [options.expires_in] - Lifetime of the token, in seconds
   */
  constructor({ access_token, token_type, expires_in, scope }) {
    this.accessToken = access_token
    this.tokenType = token_type
    this.scope = scope.split(' ')
    
    if (!!expires_in) {
      this.expired = false
      this._tokenExpiryTimeout = null
      this._setTokenExpiryTimeout(expires_in)
    }
  }

  /**
   * @method
   * @summary Retrieve the bearer token value
   * @return {String} - Returns the value of the token, if it is a Bearer Token
   * @throws Throws an error if this is not a Bearer Token
   */
  getBearerToken = () => {
    if (this.expired) throw new Error('Token is expired!')
    if (this.tokenType === 'bearer') return this.accessToken
    // Fall-Through
    throw new Error(`This token is not a bearer token. Type is: `, this.tokenType)
  }

  // === PRIVATE METHODS ===
  _setTokenExpiryTimeout = (expiresInSeconds) => {
    const expiresInMilliseconds = expiresInSeconds * 1000
    this._tokenExpiryTimeout = setTimeout(this._expireToken, expiresInMilliseconds)
  }

  _expireToken = () => {
    this.expired = true
  }
}

module.exports = Token