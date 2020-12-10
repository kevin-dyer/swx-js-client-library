// === IMPORTS ===
const Token = require('./Token')

const fetch = require('node-fetch')

// === CONSTANTS ===
const supportedMethods = [ 'GET', 'POST', 'PUT', 'DELETE', 'PATCH' ]
const validUrlRegex = /^[A-z0-9\/]+$/g

// === UTILS ===
function validUrl(url) {
  return validUrlRegex.test(url)
}

function formatUriParams(uriParams, leadingQuestionMark=true) {
  // Convert uriParams object in format { a: true, b: false } to request uri format: ?a=true&b=false
  let paramsArray = []
  for(let param in uriParams) {
    paramsArray.push(`${param}=${uriParams[param]}`)
  }

  if (paramsArray.length > 0) {
    const paramsString = `${paramsArray.join('&')}`
    if (leadingQuestionMark) return `?${paramsString}`
    return paramsString
  }
   return ''
}

// === CLASS ===
/**
 * @class
 * @classdesc Create a RESTClient.
 * @requires axios
 * @author hraschke
 */

class RESTClient {
  /**
   * @constructor
   * @param {Object} options
   * @param {String} options.baseUrl - A string with the base URL (web address + API exdpoint) for account.
   * @param {String} [options.contentType] - The default Content Type for the request headers. This can be overwritten on a per-request basis by passing a contentType into the request method.
   * @param {Token} [options.token] - The auth token, included here if already issued upon instantiation.
   */
  constructor({
    baseUrl,
    contentType,
    token
  }) {
    const baseUrlWithTrailingSlash = baseUrl.slice(-1) === '/' ? baseUrl : baseUrl + '/'
    this._baseUrl = baseUrlWithTrailingSlash
    this._contentType = contentType
    if (!!token) this._token = token
  }

  /**
   * @method
   * @public
   * @summary Set a Token.
   * @param {Token} token
   * @throws Throws an error if the token is undefined 
   */
    setToken = (token) => {
      if (!token) throw new Error((error) => {`Error: token is undefined. ${error}`}) 
      this._token = token
    }

  // TODO:  Add validation of endpoint
  // TODO:  Convert bad responses to errors (perhaps after axios integration)
  /**
   * @method
   * @public
   * @async
   * @summary Fetch the information from the API.
   * @param {Object} options
   * @param {String} options.method - The HTTP request method ('GET', 'POST', 'PUT', 'DELETE' are currently supported)
   * @param {String} options.endpoint - The url extension (not including baseURL - the internal baseURL will be used)
   * @param {String} [options.contentType] - The Content Type for the header. If ommitted, the contentType passed into the constructor will be used.
   * @param {Object} [options.data] - Body data for a POST or PUT request
   * @param {Object} [options.uriParams] - URL Paramaters to append to the end of the url
   * @return {Promise} - Returns a Promise that, when fulfilled, will either return an JSON Object with the requested data or an Error with the problem.
   * @throws Throws an error if the provided method is not supported
   * @throws Throws an error is the provided url is not a valid url extension
   * @throws Throws an error if contentType was not provided AND no contentType was provided on instantiation of the RESTClient
   * @throws Throws an error if the token has not been set ()
   */

  request = ({ method, endpoint, uriParams, body, contentType }) => {
    // <---> Error Handling
    if (!method || !supportedMethods.includes(method)) {
      throw new Error(`Method "${method}" not supported. Supported methods are: `, supportedMethods.join(", "))
    }
    // if (!endpoint || !validUrl(endpoint)) {
    //   throw new Error(`Invalid URL extension: "${endpoint}"`)
    // }
    if (!this._contentType && !contentType) {
      throw new Error('No contentType. Must either instantiate RESTClient with a contentType or pass contentType to request.')
    }
    // <--->

    const requestUrl = this.makeRequestUrl({ endpoint, uriParams })
    const headers = this._createHeaders( contentType )
    
    return fetch(requestUrl, {
      method,
      headers,
      body: this._formatBody(body, contentType)
    })
    .then(response => response.json())
  }

  /**
   * @method
   * @public
   * @summary Create the URL to which a request will be called. Used internally by the `request`method, but also available publicly for building URLs from endpoints and uriParams. 
   * @param {Object} options
   * @param {String} options.endpoint - The url extension (not including baseURL - the internal baseURL will be used)
   * @param {Object} [options.uriParams] - URL Paramaters to append to the end of the url
   * @returns {String} Full URL as built according to inputted parameters
   */
  makeRequestUrl = ({ endpoint, uriParams }) => {
    const urlWithoutLeadingSlash = endpoint[0] === '/' ? endpoint.substring(1) : endpoint
    let fullUrl = this._baseUrl + urlWithoutLeadingSlash

    if (uriParams) {
      fullUrl = fullUrl.slice(-1) === '/' ? fullUrl.slice(0, -1) + formatUriParams(uriParams) : fullUrl + formatUriParams(uriParams)
    }
    
    const encodedFullUrl = encodeURI(fullUrl)
    return encodedFullUrl
  }
  
  // === PRIVATE METHODS ===

  _createHeaders = (contentType) => {
    const contentTypeToUse = contentType || this._contentType
    const bearerTokenToUse = (!!this._token && this._token.getBearerToken())

    if (!bearerTokenToUse) {
      return {
        'Content-Type': contentTypeToUse,
        'credentials': 'omit'
      }
    }

    return {
      'Content-Type': contentTypeToUse,
      'credentials': 'omit',
      'Authorization': `Bearer ${bearerTokenToUse}`
    }
  }

  // TODO: accomodate for other content types

  _formatBody = (body, contentType) => {
    const contentTypeToUse = contentType || this._contentType
    if (!contentTypeToUse || contentTypeToUse === 'application/json') return JSON.stringify(body)
    if (contentTypeToUse.includes('urlencoded')) return formatUriParams(body, false)
    console.warn(`WARNING: No body formatting for content type: "${contentTypeToUse}"`)
    return body
  }
}

module.exports = RESTClient