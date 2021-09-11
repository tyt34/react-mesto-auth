export const BASE_URL = 'https://auth.nomoreparties.co'

//const handleResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка №${response.status}`);

export const authorize = (data) => {
  console.log('auth:', data.identifier, data.password )
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'password':data.password,'email':data.identifier})
    /*
    body: {
      password: data.password,
      email: data.identifier,
    }
    */
  })
  .then((response) => {
    console.log(' =_=_=> ')
    return response.json();
  })
}

//export const regg = (data) => {
export const regg = (data) => {
  //console.log('regGg:', data)
  console.log('regGg:', data.password, data.identifier)

  //console.log('идет отправка:', JSON.stringify(data.password, data.identifier)
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'password':data.password,'email':data.identifier}) // почему из всех вариантов сработал именно этот я не понимаю
    /*
    body: {
      password: data.password,
      email: data.identifier,
    }
    */
    //body: JSON.stringify({password, identifier})
  })
  //.then(handleResponse)
  .then((response) => {
    console.log(' =====> ')
    return response.json();
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
    console.log(' =j=w=t> ')
    return response.json();
  })
}

//JSON.stringify({identifier, password})
/*
return fetch(this._url+this._cards, {
  method: 'POST',
  headers: {
    authorization: this._token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: obj.name,
    link: obj.link,
  })
}).then(
  (res) => this._getResponseData(res)
)
*/
