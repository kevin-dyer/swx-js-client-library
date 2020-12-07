// === IMPORTS ===
const _ = require('lodash');
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
     * @param {Object} data - All desired and required account properties.
     */
    createAccount = (data) => {
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
     * @return {Array} - An array of objects with account properties.
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
     * @return {Object} - An object with account properties.
     */
    getAccount = (id) => {
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
     * @summary Update a single account.
     * @param {String} id - The ID of the account to be deleted.
     * @param {Object} data - body of PUT request
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..

     */
    updateAccount = (data) => {
        // this._validateStructure(data)
        const { account_id='' } = data 

        const endPoint = `/accounts/${account_id}`
        return this._restClient.request(
            {
                method: 'PUT',
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
     * @summary Delete a single Account.
     * @param {String} id - The ID of the account to be deleted.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    deleteAccount = (id) => {
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: `/accounts/${id}`,
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
     * @getAllUsersOfAccount
     * @summary Get an array of users from a specific account.
     * @param {String} accountId - The ID of the account.
     * @return {Array} - An array of objects with user properties.
     */
    getAllUsersOfAccount = (accountId) => {
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
     * @param {String} accountId - The ID of the account the user belongs to.  
     * @param {String} userId - The ID of the user.
     * @return {Object} - An object with user properties.
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
                    user = _.cloneDeep(value)
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
     * @param {String} accountId - The ID of the account the user belongs to.  
     * @param {String} userId - The ID of the user.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
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
        .then(resp => { return resp })
    }

    /**
     * Creates an account
     * @createInvitation
     * @param {Object} data - All required invitation data
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    createInvitation = (data) => {
        const {
            account_id='',
            to_email=''
        } = data

        if (!this._emailIsValid(to_email)) {
            throw new Error(`Error in creatInvitation, invalid email address: ${to_email}`)
        }
        return this._restClient.request(
            {
                method: 'POST',
                endpoint: `accounts/${account_id}/invitations`,
                body: data,
                contentType: 'application/json'
            },
            this._onSuccess,
            this._onError
        )
        .then(resp => {
            // console.log(`createInvitation: ${JSON.stringify(resp)}`) //for testing
            return resp
        })      
    }

    /**
     * @method
     * @public
     * @getInvitationsSentFromAccount
     * @summary Get an array of all invitions from a specific account.
     * @param {String} accountId - The ID of the pertaining account.
     * @return {Array} - An array of objects with properties of each received invitation.
     */
    getInvitationsSentFromAccount = (accountId) => {
        let invitations = []
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `/accounts/${accountId}/invitations`,
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
     * @getSingleInvitationSentFromAccount
     * @param {String} accountId - The ID of the pertaining account.
     * @param {String} invitationId - The ID of the account to be deleted.
     * @summary Delete a single invitation sent from an Account by its unique id.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    getSingleInvitationSentFromAccount = (accountId, invitationId)  => {
        return this._restClient.request({
            method: 'GET',
            endpoint: accountId !=='' ? `/accounts/${accountId}/invitations/${invitationId}` : `/invitations/${invitationId}`,
            contentType: 'application/x-www-form-urlencoded'
        },
        this._onSuccess,
        this._onError
        )
        .then(resp => { 
            // console.log(`updateInvitation: ${JSON.stringify(resp)}`) //for testing
            return resp 
        })
    }

    /**
     * @method
     * @public
     * @getInvitationByInvitationId
     * @summary Get a single invitation by invitation ID.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    getInvitationByInvitationId = (invitationId) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `invitations/${invitationId}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            // console.log(`getInvitationById: ${JSON.stringify(resp)}`) //for testing
            return resp 
        })
    }

    /**
     * @method
     * @public
     * @getInvitationsFromAllAccounts
     * @summary Get an array of all invitations from all existing accounts.
     * @return {Array} - An array of objects with properties of each received invitation.
     */
    getInvitationsFromAllAccounts = () => {
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
     * @updateInvitation
     * @summary Update a single account.
     * @param {String} accountId - The ID of the pertaining account.
     * @param {String} invitationId - The ID of the invitation to be updated.
     * @param {Object} data - body of PUT request
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    updateInvitation = (data) => {
        const {
            account_id='', 
            invitation_id='' 
        } = data 

        return this._restClient.request({
            method: 'PUT',
            endpoint: `/accounts/${account_id}/invitations/${invitation_id}`,
            body: data,
            contentType: 'application/json'
        },
        this._onSuccess,
        this._onError
        )
        .then(resp => { 
            // console.log(`updateInvitation: ${JSON.stringify(resp)}`) //for testing
            return resp 
        })
    }

    /**
     * @method
     * @public
     * @processInvitation
     * @summary Accept or reject an invitation
     * @param {String} invitationId - The ID of the invitation to be updated.
     * @param {Boolean} accepted - The response to invitation. True for accepted, false for rejected.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    processInvitation = (invitationId, accepted) => {
        return this._restClient.request(
            {
                method: 'PATCH',
                endpoint: `invitations/${invitationId}`,
                body: {
                    'status:' : accepted ? 'ACCEPTED' : 'REJECTED'
                },
                contentType: 'application/x-www-form-urlencoded', 
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(resp => { 
            // console.log(`processInvitation: ${JSON.stringify(resp)}`) //for testing
            return resp
        })
    }

    /**
     * @method
     * @public
     * @deleteInvitation
     * @param {String} accountId - The ID of the pertaining account.
     * @param {String} invitationId - The ID of the account to be deleted.
     * @summary Delete a single invitation sent from an Account by its unique id.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    deleteInvitation = (accountId, invitationId) => {
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: `/accounts/${accountId}/invitations/${invitationId}`,
                contentType: 'application/x-www-form-urlencoded'
            },
            this._onSuccess,
            this._onError
        )
        .then(resp => { 
            // console.log(`deleteInvitation: ${JSON.stringify(resp)}`) //for testing
            return resp
        })
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