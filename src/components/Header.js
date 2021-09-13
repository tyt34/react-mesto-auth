import logo from '../images/logo.svg'

function Header(props) {
  console.log('h=> ', props)

  function ShowEm(prop) {
    console.log('sE -> ', prop)
    if (prop.email) {
      console.log('em start ')
      return (
        <>
        <p className="header__email">{props.email}</p>
        <button className="header__close" onClick={props.onSignOut}>Выйти</button>
        </>
      )
    } else {
      //console.log('em fal')
      return <> </>
    }
  }

  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <a className="header__title" href={props.link}>{props.title}</a>
        <ShowEm email={props.email}/>
      </header>
  )
}

export default Header;
//`<p className="header__email">{props.email}</p>`
