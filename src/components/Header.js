import logo from '../images/logo.svg'
import {useHistory} from 'react-router-dom'

function Header(props) {
  const history = useHistory()

  const handleBut = () => {
    history.push(props.link);
  }

  function ShowEm(prop) {
    if (prop.email) {
      return (
        <>
        <p className="header__email">{props.email}</p>
        <button className="header__btn" onClick={props.onSignOut}>Выйти</button>
        </>
      )
    } else {
      return <> </>
    }
  }

  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <div className="header__field">
          <button
            className="header__btn"
            onClick={handleBut}
          >
            {props.title}
          </button>
          <ShowEm email={props.email}/>
        </div>
      </header>
  )
}

export default Header;
