// === IMPORTS ===
// Modules
const { exec } = require('child_process')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Client Library
const RESTClient = require('../src/RESTClient')
const Authenticator = require('../src/Authenticator')
const Token = require('../src/Token')
const AccountManager = require('../src/AccountManager')

// === SCRIPT ===
// Instantiation
const restClient = new RESTClient({
  baseUrl: 'https://api.dev.altairsc.com/'
})

const auth = new Authenticator({
  clientId: 'altair::studio', // default for SmartwWorks Studio - currently hardcoded for IDP
  redirectUri: 'http://localhost:1557/send-params', // default for SmartwWorks Studio - currently hardcoded for IDP
  scope: 'openid offline offline_access account app cluster data invitation label mqtt policy role thing user',
  restClient
})

// Individual Processes
function authenticationProcess() {
  return new Promise((resolve, reject) => {
    const authUrl = auth.getAuthenticateUrl()
    
    console.log(``)
    console.log(`Opening the auth URL. If this doesn't work, paste the following link in your browser:`)
    console.log(authUrl)
    exec(`open -n -a "Google Chrome" --args --incognito "${authUrl}"`, (error, stdout, stderr) => {
      if (error) {
          console.log(`ERROR: ${error.message}`);
          reject()
          return
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`)
          return
      }
    })

    rl.question('After logging in, paste the code from the url in your browser here: ', (code) => {
      auth.getToken({ code })
        .then(token => {
          if (token.token_type && token.token_type === 'bearer') {
            console.log("🚀 ~ file: example.js ~ line 44 ~ returnnewPromise ~ token", token)
            restClient.token = new Token(token)
            resolve(true)
          } else {
            console.warn(`Bad token: `, token)
            reject()
          }
        })
    })
  })
}

async function createAccount(acct, id, name) {
  let x = await acct.createAccount({
    'id': `${id}`,
    'name': `${name}`
    }).then((response) => { return response })
    console.log("createAccount: ", x)
}

async function getAccount(acct, id) {
  let x = await acct.getAccount(id).then((response) => { return response })
  console.log("getAccount(): ",  x)
}

async function getUsers(acct, account_id, user_id) {
  let x = await acct.getUser(id).then((response) => { return response })
  console.log("getAccount(): ",  x)
}

async function getUser(acct, account_id, user_id) {
  let x = await acct.getUser(id).then((response) => { return response })
  console.log("getAccount(): ",  x)
}

async function getAllAccounts(acct) {
let x = await acct.getAllAccounts().then((response) => { return response })
console.log("getAllAccounts(): ",  x)
}

async function deleteAccount(acct,id) {
  let x = await acct.deleteAccount(id).then((response)  => { return response })
  console.log("deleteAccount(): ",  x)
}

async function createInvitation(acct, accountId, email, roles) {
  let x = await acct.createInvitation(accountId, email, roles).then((response) => { return response })
    console.log("createInvitation(): ", x)
}

const success = (resp) => { 
  console.log(`${JSON.stringify(resp)}`)
  return resp 
}

const error = (error) => { console.log(`Error handler! ${JSON.stringify(error)}` )}

// Execution
authenticationProcess().then((result) => {
  console.log("🚀 ~ file: example.js ~ line 52 ~ authenticationProcess ~ result", result)
  console.log(`success!`)
  console.log(`client token:`, restClient.token)
  console.log(`auth client token: `, auth._restClient.token)
}).then(() => {
  let accountManager = new AccountManager(
    restClient,
    {
      onSuccess: success, 
      onFailure: error
    }
  )
  // createAccount(accountManager, 'changemyname', 'changemyname')
  getAllAccounts(accountManager)
  // createInvitation(accountManager, 'changethisaccount', 'changeme@mailinator.com', 'developer')
  getAccount(accountManager, 'pirouz')
})



