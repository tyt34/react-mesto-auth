import React from 'react'

function Login(props) {
  //console.log(props)

  const [data, setData] = React.useState({
    identifier: '',
    password: '',
  });

  function handleLoginClick(e) {
    e.preventDefault()
    let log = document.getElementById('enter__login').value
    let pas = document.getElementById('enter__pass').value
    console.log(' click L ',log,' ',pas)
    //const { username, password } = data
    setData({
      identifier: log,
      password: pas,
    })
    console.log('now data L -> ', data)
    props.onLoginClick(data)
  }

  return (
    <div className="enter__container">
      <h1 className="enter__title">Вход</h1>
      <form
        className="enter__form"
        action="index.html"
        method="post"
        name="login"
      >
        <input
          id="enter__login"
          className="enter__input"
          name="name"
          type="text"
          placeholder="Email"
          required
        />
        <input
          id="enter__pass"
          className="enter__input"
          name="about"
          type="password"
          placeholder="Пароль"
          required
        />
        <button
          className="enter__save"
          type="submit"
          onClick={handleLoginClick}
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export default Login;
