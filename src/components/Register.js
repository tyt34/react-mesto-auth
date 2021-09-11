import React from 'react'

function Register(props) {
  //console.log(props)

  const [data, setData] = React.useState({
    identifier: '',
    password: '',
  })

  function handleRegClick(e) {
    e.preventDefault()
    let log = document.getElementById('enter__logi').value
    let pas = document.getElementById('enter__pas').value
    console.log(' click R ',log,' ',pas)
    //const { username, password } = data
    setData({
      identifier: log,
      password: pas,
    })
    console.log('now data R -> ', data)
    props.onRegClick(data)
  }


  return (
    <div className="enter__container">

      <h1 className="enter__title">Регистрация</h1>
      <form
        className="enter__form"
        action="index.html"
        method="post"
        name="reg"
      >
        <input
          id="enter__logi"
          className="enter__input"
          name="name"
          type="text"
          placeholder="Email"
          required
        />
        <input
          id="enter__pas"
          className="enter__input"
          name="about"
          type="password"
          placeholder="Пароль"
          required
        />
        <button
          className="enter__save"
          type="submit"
          onClick={handleRegClick}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className='enter__field'>
        <h2 className="enter__subtitle">
          Уже зарегистрированы?
        </h2>
        <a className="enter__link" href='/sign-in'>
          Войти
        </a>
      </div>

    </div>
  )
}

export default Register;
