import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({onUpdateAvarar, isOpen, onClose}) {
  const avatarRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvarar({
      link: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={'avatar'}
      isOpen={ isOpen }
      textTitle={`Обновить аватар`}
      textButton={`Сохранить`}
      onClose={ onClose }
    >
      <input
        ref={avatarRef}
        id="popup-avatar-link"
        className="popup__input"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="popup-avatar-link-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
