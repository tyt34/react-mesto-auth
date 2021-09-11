//import {options} from '../utils/constants.js';

const options = {
  token: '54e47a58-a3be-4854-bdb0-d150680efc4c',
  cohortId: 'cohort-24',
  myId: "34f519f4db31bcdefd2e9e7c",
  url: 'https://mesto.nomoreparties.co',
}

class Api {
  constructor(options) {
    this._token = options.token
    this._cohortId = options.cohortId

    this._url = options.url
    this._me = '/v1/'+this._cohortId+'/users/me'
    this._ava = this._me+'/avatar'
    this._cards = '/v1/'+this._cohortId+'/cards'
    this._likes = this._url+this._cards+'/likes/'
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    return res.json()
  }

  getUserInfo() {
    return fetch(this._url+this._me, {
      headers: {
        authorization: this._token
      }
    }).then(
      (res) => this._getResponseData(res)
    )
  }

  getCardsFromServer() {
    return fetch(this._url+this._cards, {
        headers: {
          authorization: this._token
        }
    }).then(
      (res) => this._getResponseData(res)
    )
  }

  changeAvatar(link) {
    return fetch(this._url+this._ava, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link.link
      })
    }).then(
      (res) => this._getResponseData(res)
    )
  }

  loadProfile(obj) {
    return fetch(this._url+this._me, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      })
    }).then(
      (res) => this._getResponseData(res)
    )
  }

  loadNewCard(obj) {
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
  }

  delCard(id) {
    return fetch(this._url+this._cards+'/'+id, {
      method: 'DELETE',
      headers: {
          authorization: this._token
        }
      }).then(
        (res) => this._getResponseData(res)
      )
  }

  changeLikeCardStatus(id, method) {
    return fetch(this._likes+id, {
      method: method,
      headers: {
        authorization: this._token
      }
    }).then(
      (res) => this._getResponseData(res)
    )
  }
  /*
  sendLike(id, method) {
    return fetch(this._likes+id, {
      method: method, // 'PUT'
      headers: {
        authorization: this._token
      }
    }).then(
      (res) => this._getResponseData(res)
    )
  }
  */
  /*
  sendDislike(id) {
    return fetch(this._likes+id, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    }).then(
      (res) => this._getResponseData(res)
    )
  }
  */
}

const api = new Api(options)
export default api
