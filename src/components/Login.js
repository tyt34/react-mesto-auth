import React from 'react'

function Login(props) {
  const [data, setData] = React.useState({
    identifier: '',
    password: '',
  });

  function handleLoginClick(e) {
    e.preventDefault()
    let log = document.getElementById('enter__login').value // наврное надо было делать красивее....
    let pas = document.getElementById('enter__pass').value
    setData({
      identifier: log,
      password: pas,
    })
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
