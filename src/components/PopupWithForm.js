import React from "react";

function PopupWithForm(
  {
    children, onSubmit, name, isOpen, textTitle, textButton, onClose
  }
) {
  return (
    <div
      id={`popup-${name}`}
      className={isOpen ? "popup popup_open" : "popup"}
    >
      <div className={`popup-${name}__container popup__container`}>
        <button
          id={`popup-${name}__close`}
          onClick={onClose}
          className="popup__close"
          type="button"
        ></button>
        <p className={`popup-${name}__title`}>{`${textTitle}`}</p>
        <form
          onSubmit={onSubmit}
          name={`${name}`}
          className={`popup-${name}__form popup__form`}
        >
          {children}
          <button
            id={`popup-${name}__save`}
            className={`popup__save`}
            type="submit"
          >
            {`${textButton}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
/*

*/
