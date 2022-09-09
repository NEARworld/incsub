import { useState } from 'react';
import Modal from '../../components/Modal';
import Survey from './Survey';
import '../../styles/main.scss';

function Main() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className="main-wrapper">
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
