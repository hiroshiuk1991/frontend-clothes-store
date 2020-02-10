const BASEURL = 'http://localhost:3000'
const signInUrl = BASEURL + '/signin'

const post = (url, data) => 
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()) 

const signIn = (username, password) => post(signInUrl, {username, password})

export default {signIn}
