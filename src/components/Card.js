import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({name, img, likes, id, onCardClick, isOwn, onCardLike, onCardDelete}) {
  const currenUser = React.useContext(CurrentUserContext);

  function createAltImg(specialWord) {
    return 'Изображение места: "' + specialWord + '"';
  }

  function handleClick() {
    onCardClick({name, img});
  }

  function handleLikeClick() {
    onCardLike({likes, id});
  }

  function handleDeleteClick() {
    onCardDelete({id})
  }

  const isOwnID = isOwn._id === currenUser._id;
  const cardDeleteButtonClassName = `${isOwnID ? "place__del" : "nothing"}`;
  const isLiked = likes.some((i) => i._id === currenUser._id);
  const cardLikeButtonClassName = `${
    isLiked ? "place__like place-like" : "place__like"
  }`;

  return (
    <article className="place">
      <img
        className="place__img"
        src={img}
        onClick={handleClick}
        alt={createAltImg(name)}
      />
      <button
        onClick={handleDeleteClick}
        className={cardDeleteButtonClassName}
        type="button"
      ></button>
      <div className="place__option">
        <h2 className="place__title">{name}</h2>
        <div className="place__like-container">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          ></button>
          <p className="place__num">{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
