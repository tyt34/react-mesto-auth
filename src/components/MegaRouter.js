import React from 'react'
import { Route, Switch, Redirect, useHistory} from 'react-router-dom'
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

  function handleLoginClick(identifier, password) {
    auth.authorize(identifier, password)
      .then(obj => {
        if (obj.token) {
          localStorage.setItem('jwt', obj.token)
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

  function handleRegClick(data) {
    console.log('reg -_-_- > ', data)
    auth.regg(data)
      .then(obj => {
        console.log('re -_- > ', obj)
      })
      .catch( err => console.log(' erer -> ', err))
  }

  const MainComponent = () => { // не знаю как несколько компонентов отправить в ProtectedRoute, по этому объединил
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

export default MegaRouter
