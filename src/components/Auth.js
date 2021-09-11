export const BASE_URL = 'https://auth.nomoreparties.co'

function resp(answer) { // пытался сделать такую функцию, но она не работает
  return answer.json();
}

export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'password':data.password,'email':data.identifier}) // почему из всех вариантов сработал именно этот? Я не понимаю
    /*
    body: {
      password: data.password,
      email: data.identifier,
    }
    */
    //body: JSON.stringify({password, identifier})
  })
  .then((response) => {
    return response.json();
    //resp(response)
  })
}

export const regg = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'password':data.password,'email':data.identifier})
  })
  .then((response) => {
    return response.json();
    //resp(response)
  })
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
  .then((response) => {
    return response.json();
    //resp(response)
  })
}
