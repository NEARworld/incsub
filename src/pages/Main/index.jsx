import { createContext, useEffect, useState } from 'react';
import Modal from 'Components/Modal';
import Survey from './Survey';
import styles from 'Styles/main.module.scss';
import Payload from '../../components/Payload';

export const DetailContext = createContext();

function Main() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [detailPayload, setDetailPayload] = useState({});
  const [payload, setPayload] = useState({});

  useEffect(() => {
    console.log('payload:', payload);
    console.log('rendered data');
  });

  return (
    <DetailContext.Provider value={[detailPayload, setDetailPayload]}>
      <div className={styles.wrapper}>
        {!isSurveyOpen ? (
          <Modal
            modal={{ isModalOpen, setIsModalOpen }}
            survey={{ setIsSurveyOpen }}
          />
        ) : (
          <Survey
            payload={payload}
            setPayload={setPayload}
            survey={{ setIsSurveyOpen }}
            modal={{ setIsModalOpen }}
          />
        )}
        {payload.radioId ? <Payload payload={payload} /> : <></>}
      </div>
    </DetailContext.Provider>
  );
}

export default Main;
