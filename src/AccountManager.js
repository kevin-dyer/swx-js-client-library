// === IMPORTS ===
const Token = require('./Token')
const RESTClient = require('./RESTClient')

/**@class
 * @classdesc Manage Users, Accounts, and Invitations. 
 * @author pmehmandoost
 * @property {Function} _onSuccess - callback to be invoked on API request success
 * @property {Function} _onError - callback to be invoked on API request error
 * @property {RESTClient} _restClient
 */

class AccountManager {

    // TODO: No references to callback args are not utilized. 
    /**
     * @constructor
     * @param {Function| Object} [onSuccess] - Callback to be fired when request returns successfully. 
     * @param {Function| Object} [onError] - Callback to be fired when an error is caught during request.
     * @param {RESTClient | Object} client
     */
    constructor(client, onSuccess, onError ) {
        this._restClient = !!client && client instanceof RESTClient ? client : new RESTClient(client)
        // this._onError = typeof onError === 'function'? onError : () => { throw new Error(`Default onError`) }
        // this._onSuccess = onSuccess
        this._onSuccess = (resp) => { return resp }
        this._onError = (error) => { throw new Error(error) }
    }

    /**
     * Creates an account
     * @createAccount
     * @param {Object} data
     */
    createAccount = (data) => {
        // this._validateStructure(data)
        return this._restClient.request(
            {
                method: 'POST',
                endpoint: 'accounts/',
                body: data,
                contentType: 'application/json'
            },
            this._onSuccess,
            this._onError
        )
        .then(resp => { return resp })      
    }
  
    /**
     * @method
     * @public
     * @getAllAccounts
     * @summary Get an array of all accounts.
     * @return {Array} - An array of objects with Account properties.
     */
    getAllAccounts = () => {
        let accounts = []
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            for (const [key, value] of Object.entries(resp?.collection)) {
                accounts.push(value)
            }
            return accounts
        }) 
    }

    /**
     * @method
     * @public
     * @getAccount
     * @summary Get a single account by ID.
     * @return {Object} - An object with Account properties.
     */
    getAccount = (ID) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/${ID}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            return resp
        })
    }

    /**
     * @method
     * @public
     * @updateAccount
     * @param {String} ID - the ID of the account to be deleted.
     * @param {Object} data - body of UPDATE request
     * @summary Update a single account.
     */
    updateAccount = (ID, data) => {
        // this._validateStructure(data)
        const endPoint = `/accounts/${ID}`
        return this._restClient.request(
            {
                method: 'UPDATE',
                endpoint: endPoint,
                body: data,
                contentType: 'application/json'
            },
            this._onSuccess,
            this._onError
        )
        .then(resp => { return resp })
    }
  
    /**
     * @method
     * @public
     * @deleteAccounts
     * @param {String} ID - the ID of the account to be deleted.
     * @summary Delete a single Account.
     */
    deleteAccount = (ID) => {
        const endPoint = `/accounts/${ID}`
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: endPoint,
                contentType: 'application/x-www-form-urlencoded'
            },
            this._onSuccess,
            this._onError
        )
        .then(resp => { 
        // console.log(`deleteAccount: ${JSON.stringify(resp)}`) //for testing
            return resp
        })
    }

    /**
     * @method
     * @public
     * @getAllUsers
     * @summary Get an array of users from a specific account.
     * @param {String} accountId - the ID of the account.
     * @return {Array} - An array of objects with user properties.
     */
    getAllUsers = (accountId) => {
        let users = []
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/${accountId}/users`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            for (const [key, value] of Object.entries(resp?.collection)) {
                users.push(value)
            }
            return users
        }) 
    }

    /**
     * @method
     * @public
     * @getUser
     * @summary Get user from an accountby user ID
     * @param {String} accountID - the ID of the account.  
     * @param {String} userID - the ID of the user.
     * @return {Object} - An array of objects with user properties.
     */
    getUser = (accountId, userId) => {
        let user = {}
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/${accountId}/users/${userId}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            for (const [key, value] of Object.entries(resp?.collection)) {
                if (JSON.stringify(value.id) === userId) {
                    user.push(value)
                }
            }
            return user
        }) 
    }

    /**
     * @method
     * @public
     * @getUser
     * @summary Delete a single user
     * @param {String} accountID - the ID of the account.  
     * @param {String} userID - the ID of the user.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem.
     */
    deleteUser = (accountId, userId) => {
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: `accounts/${accountId}/users/${userId}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => resp.json()) 
    }

    /**
     * Creates an account
     * @createInvitation
     * @param {String} accountID - the ID of the account to which a user will receive an invitation
     * @param {Object} data - All invitation data
     */
    createInvitation = (accountID, data) => {

        const { to_email='' } = data 

        if (!this._emailIsValid(to_email)) {
            throw new Error(`Error in creatInvitation, invalid email address: ${to_email}`)
        }

        return this._restClient.request(
            {
                method: 'POST',
                endpoint: `accounts/${accountID}/invitations`,
                body: data,
                contentType: 'application/json'
            },
            this._onSuccess,
            this._onError
        )
        .then(resp => { 
            return resp
        })      
    }
  
    /**
     * @method
     * @public
     * @getAllReceivedInvitations
     * @summary Get an array of all accounts.
     * @return {Array} - An array of objects with properties of each received invitation.
     */
    getAllReceivedInvitations = () => {
        let invitations = []
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `invitations/`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            for (const [key, value] of Object.entries(resp?.collection)) {
                invitations.push(value)
            }
            return invitations
        }) 
    }

    /**
     * @method
     * @public
     * @getInvitationByID
     * @summary Get a single invitation by invitation ID.
     */
    getInvitationByID = (invitationID) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `invitations/${invitationID}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            return resp
        })
    }

    /**
     * @method
     * @public
     * @updateInvitation
     * @param {String} ID - the ID of the account to be deleted.
     * @param {Object} data - body of UPDATE request
     * @summary Update a single account.
     */
    updateInvitation = (accountID, invitationID, data) => {
        const endPoint = `/accounts/${accountID}/invitations/${invitationID}`
        return this._restClient.request({
            method: 'PUT',
            endpoint: endPoint,
            body: data,
            contentType: 'application/json'
        },
        this._onSuccess,
        this._onError
        )
        // .then(resp => { return resp })
    }

    // === PRIVATE METHODS ===
  
    /**
     * @method
     * @private
     * @summary validates email address format
     * @param {String} email
     * @return {Boolean} Returns false if format is unacceptable
     */
    _emailIsValid = (email) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }

    /**
     * @method
     * @private
     * @summary validates structure of object to be utilized as body for request to Accounts Service and Invitations API
     * @param {Object} data
     * @throws Throws an error if data is not an object or structure is unacceptable 
     */
    _validateInvitationStructure = (data) => { console.log('Dont use yet. Work In Progress') }

    /**
     * @method
     * @private
     * @summary validates structure of object to be utilized as body for user related request to Accounts Service API
     * @param {Object} data
     * @throws Throws an error if data is not an object or structure is unacceptable 
     */
    _validateUserStructure = (data) => { console.log('Dont use yet. Work In Progress') }

    /**
     * @method
     * @private
     * @summary validates structure of object to be utilized as body for request to Accounts Service API
     * @param {Object} data
     * @throws Throws an error if data is not an object or structure is unacceptable 
     */
    _validateAccountStructure = (data) => { console.log('Dont use yet. Work In Progress') }

    /**
     * @method
     * @private
     * @summary Strictly for testing at the moment. Inefficiently compares two stringified properties for absolute equality. 
     * @param {Object} property to compare
     * @param {Object}
     * @return {Boolean} Whether two stringified arguments are identical 
     */
    _compare = (prop1, prop2) => {
        const stringifiedProp1 = JSON.stringify(prop1)
        const stringifiedProp2 = JSON.stringify(prop2)
        return stringifiedProp1.normalize() !== stringifiedProp2.normalize()
    }
}

module.exports = AccountManager