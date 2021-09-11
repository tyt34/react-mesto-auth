import logo from '../images/logo.svg'

function Header(props) {
  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <a className="header__title" href={props.link}>{props.title}</a>
      </header>
  )
}

export default Header;
