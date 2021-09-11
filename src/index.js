import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import Header from './components/Header'
//import App from './components/App'
//import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'
//import Enter from './components/Enter'
//import InfoTooltip from './components/InfoTooltip'
import MegaRouter from './components/MegaRouter'
//import { MemoryRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

// <Header title='Войти'/>
// <Enter title='Регистрация' subtitle='Уже зарегистрированы? Войти' buttonTitle='Зарегистрироваться' />

// <Header title='Регистрация'/>
// <Enter title='Вход' subtitle='' buttonTitle='Войти' />

/*
<Header />
<App />
<Footer />
*/

// <PopupEnter status='on' title='Вы успешно зарегистрировались!'/>
// <PopupEnter status='off' title='Что-то пошло не так! Попробуйте ещё раз.'/>

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <div className='page'>
        <MegaRouter />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
/*
<BrowserRouter >
  <App />
</BrowserRouter>
*/
reportWebVitals();
