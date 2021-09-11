import React from "react";
import on from '../images/enter_on.svg'
import off from '../images/enter_off.svg'

function InfoTooltip(props) {
  return (
    <div className="popup popup_open">
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
        ></button>
        <img className="popup__img" src={on} alt="Тут должно быть описание" />
        <p className="popup__subtitle">{props.title}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;
