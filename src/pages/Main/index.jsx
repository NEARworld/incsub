import { useState } from 'react';
import Modal from 'Components/Modal';
import Survey from './Survey';
import styles from 'Styles/main.module.scss';

function Main() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className={styles.wrapper}>
      {!isSurveyOpen ? (
        <Modal
          modal={{ isModalOpen, setIsModalOpen }}
          survey={{ setIsSurveyOpen }}
        />
      ) : (
        <Survey survey={{ setIsSurveyOpen }} modal={{ setIsModalOpen }} />
      )}
    </div>
  );
}

export default Main;
