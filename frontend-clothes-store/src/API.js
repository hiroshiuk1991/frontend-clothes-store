const BASEURL = 'http://localhost:3000'
const loginUrl = BASEURL + '/login'
const validateUrl = BASEURL + '/validate'
const custUrl = BASEURL + '/customers'
// const cartUrl = BASEURL + '/carts'

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
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
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

const createAccount = (username, password) => post(custUrl,
      {customer:
        {username: username,
          password: password
        }
      }
//       .then(customer => login({customer.username,
// customer.password}))    
        )

// const addToCart = (customer_id, item_id, item_name) => post(cartUrl,
//     {cart: 
//       {customer_id: , 
//         item_id: event.target.id,
//         item_name: event.target.name 
//       }

//     }
//   )

  
  
  

const validate = () => get(validateUrl)

export default { login, validate, createAccount, post }
      





      // const createAccount = (url, data) => 
      //   fetch(custUrl, {
      //     method: 'POST',
      //     headers: {
      //       'Content=Type': 'application/json',
      //       'Accepts': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   }).then(resp => resp.json())