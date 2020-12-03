

  /**
  * @classdesc Represents the SmartWorks SDK. Allows Developers to interact with the API with a single object.
  * @class
  */

class SWX {

  /**
    * Create Bynder SDK.
    * @constructor
    * @param {Object} options - An object containing the consumer keys, access keys and the base URL.
    * @param {String} options.endpoint - The URL with the account domain and API extension.
    * @param {String} [options.token] - JSON web token, if already set.
    * @param {Array} [options.blacklist]
    * @param {Array} [options.whitelist]
    * @param
  */
  constructor(options) {
    this._options = options
    const {
      endpoint,
      token
    } = options
    this._endpoint = endpoint

    this.api = new RESTClient({
      endpoint,
      token
    })
  }

  createDevice({ parentId, parentNetwork}) {
    this.api.setUrl(URL_CREATE_DEVICE_ENDPOINT)
    const formattedBody = {}
    this.api.setBody(formattedBody)
  }


}

/**

 * @example
import SWX from 'swx-sdk'

// In some sort of sdk management util file
const sdkInstance = new SWX({
  ...configOptions
})

export default sdkInstance

// on login page, after user enter credentials and hits submit
const { success, error, user } = sdkInstance.authenticate({
  login,
  password
}) // this internally sets a token for the sdkInstance

if (success) {
  navigate({ to: APP_LANDING_PAGE })


}

// in reduxmodules/devices.js
export const addDeviceInCloud = () => {
  const { deviceCd } = SWX.createDevice({
    parentGroupId,
    parentNetwork
   })
}

*/