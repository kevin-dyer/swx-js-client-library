// === IMPORTS ===
const RESTClient = require('./RESTClient')

/**@class
 * @classdesc Manage Users, Accounts, and Invitations. 
 * @see - http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
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
     * @method
     * @public
     * @summary Create a new account
     * @see - for schema, refer to the Account Service API docs: http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
     * @param {Object} data - All desired and required account properties.
     * @see - for schema, refer to the Account Service API docs: http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
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
    }
  
    /**
     * @method
     * @public
     * @summary Get an array of all accounts.
     * @return {Array} - An array of objects with account properties.
     */
    getAllAccounts = () => {
        // let accounts = []
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(({ collection }) => {
            if (!collection || !(collection instanceof Object)) {
              // Error handling TBD
            }
            return Object.values(collection)
          })
    }

    /**
     * @method
     * @public
     * @summary Get a single account by ID.
     * @return {Object} - An object with account properties.
     */
    getAccount = (account_id) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/${account_id}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
    }

    /**
     * @method
     * @public
     * @summary Update a single account.
     * @see - for schema, refer to the Account Service API docs: http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
     * @param {String} id - The ID of the account to be deleted.
     * @param {Object} data - body of PUT request
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    updateAccount = (data) => {
        const { account_id='' } = data 

        return this._restClient.request(
            {
                method: 'PUT',
                endpoint: `/accounts/${account_id}`,
                body: data,
                contentType: 'application/json'
            },
            this._onSuccess,
            this._onError
        )
    }
  
    /**
     * @method
     * @public
     * @summary Delete a single Account.
     * @param {String} id - The ID of the account to be deleted.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    deleteAccount = (account_id) => {
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: `accounts/${account_id}`,
                contentType: 'application/x-www-form-urlencoded'
            },
            this._onSuccess,
            this._onError
        )
    }

    /**
     * @method
     * @public
     * @summary Get an array of users from a specific account.
     * @param {String} account_id - The ID of the account.
     * @return {Array} - An array of objects with user properties.
     */
    getUsersByAccountId = (account_id) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/${account_id}/users`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(({ collection }) => {
            if (!collection || !(collection instanceof Object)) {
              // Error handling TBD
            }
            return Object.values(collection)
          })
    }

    /**
     * @method
     * @public
     * @summary Get user from an accountby user ID
     * @param {String} account_id - The ID of the account the user belongs to.  
     * @param {String} user_id - The ID of the user.
     * @return {Object} - An object with user properties.
     */
    getUser = (account_id, user_id) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `accounts/${account_id}/users/${user_id}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
    }

    /**
     * @method
     * @public
     * @summary Delete a single user
     * @param {String} account_id - The ID of the account the user belongs to.  
     * @param {String} user_id - The ID of the user.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    deleteUser = (account_id, user_id) => {
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: `accounts/${account_id}/users/${user_id}`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
    }

    /**
     * @method
     * @public
     * @summary Create an invitation
     * @see - for schema, refer to the Account Service API docs: http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
     * @param {Object} data - All required invitation data
     * @param {String} account_id - The ID of the pertaining account.
     * @param {String} email - The email address of the pertaining account.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http response body and success code or an Error with the problem..
     */
    createInvitation = (account_id, email, roles) => {
        if (!roles){
            throw new Error(`Error in creatInvitation, no role(s) provided: ${roles}`)
        }
        if (!this._emailIsValid(email)){
            throw new Error(`Error in creatInvitation, invalid email address: ${to_email}`)
        }        
        return this._restClient.request(
            {
                method: 'POST',
                endpoint: `accounts/${account_id}/invitations`,
                body: {
                    'to_email': `${email}`,
                    'roles': "developer"
                },
                contentType: 'application/json'
            },
            this._onSuccess,
            this._onError
        )
    }

    /**
     * @method
     * @public
     * @summary Get an array of all invitions from a specific account.
     * @param {String} account_id - The ID of the pertaining account.
     * @return {Array} - An array of objects with properties of each received invitation.
     */
    getInvitationsSentFromAccount = (account_id) => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `/accounts/${account_id}/invitations`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(({ collection }) => {
            if (!collection || !(collection instanceof Object)) {
              // Error handling TBD
            }
            return Object.values(collection)
        })
    }

    /**
     * @method
     * @public
     * @param {String} [account_id] - Optional. The ID of the pertaining account.
     * @param {String} invitation_id - The ID of the account to be deleted.
     * @summary Get a single invitation sent from an Account by its unique id or the pertaining account id.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    getInvitation = (account_id, invitation_id)  => {
        return this._restClient.request({
            method: 'GET',
            endpoint: !account_id ? `/invitations/${invitation_id}` : `/accounts/${account_id}/invitations/${invitation_id}`,
            contentType: 'application/x-www-form-urlencoded'
        },
        this._onSuccess,
        this._onError
        )
    }

    /**
     * @method
     * @public
     * @summary Get an array of all invitations from all existing accounts.
     * @return {Array} - An array of objects with properties of each received invitation.
     */
    getInvitationsFromAllAccounts = () => {
        return this._restClient.request(
            {
                method: 'GET',
                endpoint: `invitations/`,
                contentType: 'application/x-www-form-urlencoded'
            }, 
            this._onSuccess, 
            this._onError
        )
        .then(({ collection }) => {
            if (!collection || !(collection instanceof Object)) {
              // Error handling TBD
            }
            return Object.values(collection)
        })
    }

    /**
     * @method
     * @public
     * @summary Update a single account.
     * @see - for schema, refer to the Account Service API docs: http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
     * @param {String} account_id - The ID of the pertaining account.
     * @param {String} invitation_id - The ID of the invitation to be updated.
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
    }

    /**
     * @method
     * @public
     * @summary Accept or reject an invitation
     * @see - for schema, refer to the Account Service API docs: http://smartworks.gitlab.pclm.altair.com/doc/user-manual/docs/8_account-management/account-service-api/
     * @param {String} invitation_id - The ID of the invitation to be updated.
     * @param {Boolean} accepted - The response to invitation. True for accepted, false for rejected.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    processInvitation = (invitation_id, accepted) => {
        return this._restClient.request(
            {
                method: 'PATCH',
                endpoint: `invitations/${invitation_id}`,
                body: {
                    'status:' : accepted ? 'ACCEPTED' : 'REJECTED'
                },
                contentType: 'application/x-www-form-urlencoded', 
            }, 
            this._onSuccess, 
            this._onError
        )
    }

    /**
     * @method
     * @public
     * @param {String} account_id - The ID of the pertaining account.
     * @param {String} invitation_id - The ID of the account to be deleted.
     * @summary Delete a single invitation sent from an Account by its unique id.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with an http success code or an Error with the problem
     */
    deleteInvitation = (account_id, invitation_id) => {
        return this._restClient.request(
            {
                method: 'DELETE',
                endpoint: `/accounts/${account_id}/invitations/${invitation_id}`,
                contentType: 'application/x-www-form-urlencoded'
            },
            this._onSuccess,
            this._onError
        )
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
}

module.exports = AccountManager