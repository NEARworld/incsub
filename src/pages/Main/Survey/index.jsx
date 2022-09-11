import { useState, useRef, useEffect, useContext } from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import styles from 'Styles/survey/survey.module.scss';
import { DetailContext } from 'Pages/Main';

function Survey({ setPayload, survey, modal }) {
  const [checked, setChecked] = useState(0);
  const [detailPayload, setDetailPayload] = useContext(DetailContext);
  const detailRef = useRef(null);
  const radioRef = useRef(null);
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;

  function handleSubmit(e) {
    e.preventDefault();
    const radioId = Number(radioRef.current.id); // radio id starts from 0
    if (radioId) {
      setPayload(() => ({ radioId }));
      if (detailRef.current) {
        if (radioId === 2)
          setPayload((prevState) => ({
            ...prevState,
            subData: detailRef.current.value,
          }));
        if (radioId === 4)
          setPayload((prevState) => ({
            ...prevState,
            subData: detailPayload,
          }));
      }
      setIsSurveyOpen(false);
    }
  }

  useEffect(() => {
    console.log('rendered survey');
  });

  return (
    <form className={styles.container} method="POST" onSubmit={handleSubmit}>
      <Header
        setIsModalOpen={setIsModalOpen}
        setIsSurveyOpen={setIsSurveyOpen}
      />
      <div className={styles.wrapper}>
        <Body
          checked={checked}
          setChecked={setChecked}
          radioRef={radioRef}
          detailRef={detailRef}
        />
        <Footer
          checked={checked}
          setIsModalOpen={setIsModalOpen}
          setIsSurveyOpen={setIsSurveyOpen}
        />
      </div>
    </form>
  );
}

export default Survey;
