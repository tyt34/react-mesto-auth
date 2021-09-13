export const BASE_URL = 'https://auth.nomoreparties.co'

function getResponseData(res) { /* точная копия из api.js */
  if (!res.ok) {
    return Promise.reject(`Auth-Ошибка: ${res.status}`)
  }
  return res.json()
}

export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: data.password,
      email: data.identifier,
    })
  })
  .then((res) => getResponseData(res))
  /*
  .then((res) => { // почему этот вариант не работает? И как вызвать функцию ссылкой без аргумента?
    console.log('1=> > ', res)
    //getResponseData(res)
    return res.json()
  })
  */
}

export const regg = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'password': data.password,
      'email': data.identifier
    })
  })
  .then((res) => getResponseData(res))
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => getResponseData(res))
}
