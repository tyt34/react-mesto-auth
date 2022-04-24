import logo from '../images/logo.svg'

function Header({title, link, email, onSignOut}) {
  function ShowEm(prop) {
    if (prop.email) {
      return (
        <>
        <p className="header__email">{email}</p>
        <button className="header__close" onClick={onSignOut}>Выйти</button>
        </>
      )
    } else {
      return <> </>
    }
  }

  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <a className="header__title" href={link}>{title}</a>
        <ShowEm
          email={email}
        />
      </header>
  )
}

export default Header;
