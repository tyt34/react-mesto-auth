import React from 'react'
import { Route, Switch, Redirect, useHistory} from 'react-router-dom'
//import App from './App'
import Header from './Header'
import App from './App'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import ProtectedRoute from './ProtectedRoute'
import * as auth from './Auth';


function MegaRouter() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userData, setUserData] = React.useState({
    identifier: '',
    password: ''
  })
  const history = useHistory()

  function handleLoginClick(identifier, password) { /* функция при нажатие на кнопку */
    //e.preventDefault()
    console.log('st -_-_- > ', identifier, password)
    auth.authorize(identifier, password)
      .then(obj => {
        console.log('mr -_- > ', obj) //  тут получаем токен
        console.log('mr jwt > ', obj.token)
        if (obj.token) {
          localStorage.setItem('jwt', obj.token)
          /*
          setUserData({
            username: obj.user.username,
            email: obj.user.email
          })
          */
          setLoggedIn(true);
          history.push('/')
        }
      })
      .catch( err => console.log(' er er -> ', err))
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('')

    if (jwt){
      auth.getContent(jwt).then( (res) => {
        if (res.email) {
          setUserData({
            username: res.username,
            email: res.email
          });
          setLoggedIn(true);
          history.push('/')
        }
      })
    }
  }

  function handleRegClick(data) { /* функция при нажатие на кнопку */
    //e.preventDefault()
    console.log('reg -_-_- > ', data)
    auth.regg(data)
      .then(obj => {
        console.log('re -_- > ', obj)
      })
      .catch( err => console.log(' erer -> ', err))
  }
  /*
  const MainComponent = {
    render() {
      <>
      <Header />
      <App />
      <Footer />
      </>
    }
  }
  */
  const MainComponent = () => {
    return (
      <>
      <Header />
      <App />
      <Footer />
      </>
    )
  }

  return (
    <Switch>

    <Route path="/sign-in">
      <div className='page'>
        <Header title='Регистрация' link='/sign-up' />
        <Login onLoginClick={handleLoginClick}/>
      </div>
    </Route>
    <Route path="/sign-up">
      <div className='page'>
        <Header title='Войти' link='/sign-in' />
        <Register onRegClick={handleRegClick}/>
      </div>
    </Route>
    <ProtectedRoute
        path="/"
        loggedIn={loggedIn}
        component={MainComponent}
    />
    <Route>
        {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
    </Route>
    </Switch>
  )
}


/*
<Switch>

<Route path="/sign-in">
  <div className='page'>
    <Header title='Регистрация' link='/sign-up' />
    <Login onLoginClick={handleLoginClick}/>
  </div>
</Route>
<Route path="/sign-up">
  <div className='page'>
    <Header title='Войти' link='/sign-in' />
    <Register onRegClick={handleRegClick}/>
  </div>
</Route>
<ProtectedRoute
    path="/"
    loggedIn={loggedIn}
    component={MainComponent}
/>
<Route>
    {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
</Route>
</Switch>
*/

/*
<Route>
    {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
</Route>
*/


/*
<Switch>
  <Route path="/sign-in">
    <Header title='Регистрация'/>
    <Enter title='Вход' subtitle='' buttonTitle='Войти' />
  </Route>
  <Route path="/sign-up">
    <Header title='Войти'/>
    <Enter title='Регистрация' subtitle='Уже зарегистрированы? Войти' buttonTitle='Зарегистрироваться' />
  </Route>
</Switch>
*/
export default MegaRouter
