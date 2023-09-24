import React from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { selectUser } from 'redux/auth/selectors';
import { Backdrop, CloseBtn, Modal } from 'components/Admin/Modal/Modal.styled';
import { SubtitleText } from 'components/baseStyles/CommonStyle.styled';
import { closeModalForm } from 'hooks/modalWindow';

export const ModalInfo = () => {
  const userName = useSelector(selectUser);

  function closeModal(e) {
    e.preventDefault();
    closeModalForm(e);
  }

  return (
    <Backdrop
      onClick={e => {
        if (e.currentTarget === e.target) closeModal(e);
      }}
    >
      <Modal onClick={e => e.stopPropagation()}>
        <CloseBtn
          type="button"
          onClick={e => closeModal(e)}
          aria-label="Close modal"
        >
          <MdClose size={15} />
        </CloseBtn>
        <SubtitleText>
          Вітаємо, {userName}! Ви успішно зарєєстровані!
        </SubtitleText>
        <SubtitleText>
          Для подальшого доступу зверніться до адміністратора для зміни Вашої
          ролі
        </SubtitleText>
      </Modal>
    </Backdrop>
  );
};
