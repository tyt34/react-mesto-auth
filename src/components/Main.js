import React from 'react'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Main(
  {
    cards, onEditAvatar, onEditProfile, onAddPlace,
    onCardClick, onCardLike, onCardDelete
  }
) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
      <main>
        <section className="profile">
          <div className="profile__container">
            <img className="profile__img" alt="Изображение профиля" src={currentUser.avatar} />
            <div
              onClick={onEditAvatar}
              className="profile__overlay"
            >
              <button
                className="profile__edit"
                type="button"
              >
              </button>
            </div>
          </div>
          <div className="profile-char">
            <div className="profile-char__discr">
              <div className="profile-char__info">
                <h1 id="text-up" className="profile-char__title">
                  {currentUser.name}
                </h1>
                <button
                  className="profile-char__edit"
                  type="button"
                  onClick={onEditProfile}>
                </button>
              </div>
              <p id="text-dw" className="profile-char__subtitle">
                {currentUser.about}
              </p>
            </div>
            <button
              className="profile-char__add"
              type="button"
              onClick={onAddPlace}>
            </button>
          </div>
        </section>

        <section className="places">
          {
            cards.map( (card) => (
              <Card
                name={card.name}
                img={card.link}
                likes={card.likes}
                key={card._id}
                id={card._id}
                onCardClick={onCardClick}
                isOwn={card.owner}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />)
            )
          }
        </section>
    </main>
  )
}

export default Main
