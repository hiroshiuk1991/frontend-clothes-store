const BASEURL = "http://localhost:3000";
const loginUrl = BASEURL + "/login";
const validateUrl = BASEURL + "/validate";
const custUrl = BASEURL + "/customers";
const fetchusercartUrl = BASEURL + "/fetchusercart";
// const cartUrl = BASEURL + '/carts'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.token
    }
  }).then(resp => resp.json());

const post = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json());

const destroy = (url, id) =>
  fetch(`${url}/${id}`, {
    method: "DELETE"
  });

const login = (username, password) =>
  post(loginUrl, { customer: { username: username, password: password } });

const createAccount = (username, password) =>
  post(custUrl, { customer: { username: username, password: password } });

const fetchusercart = url => get(fetchusercartUrl);

const validate = () => get(validateUrl);

export default { login, validate, createAccount, post, fetchusercart, destroy };
