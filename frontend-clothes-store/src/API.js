const BASEURL = 'http://localhost:3000'
const loginUrl = BASEURL + '/login'
const validateUrl = BASEURL + '/validate'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.token
    }
  }).then(resp => resp.json())

const post = (url, data) => 
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())


const login = (username, password) => post(loginUrl, 
    {customer: 
        { username:username,
            password:password
        }
    }
    )

const validate = () => get(validateUrl)

export default { login, validate }
