import { useState } from 'react';
import Modal from '../../components/Modal';
import Survey from './Survey';
import '../../styles/main.scss';

function Main() {
  const [openSurvey, setOpenSurvey] = useState(false);
  return (
    <div className="main-wrapper">
      {!openSurvey ? (
        <Modal openSurvey={openSurvey} setOpenSurvey={setOpenSurvey} />
      ) : (
        <Survey />
      )}
    </div>
  );
}

export default Main;
