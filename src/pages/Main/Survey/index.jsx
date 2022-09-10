import { useState, useEffect, useRef } from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import styles from 'Styles/survey/survey.module.scss';

function Survey({ survey, modal }) {
  const [checked, setChecked] = useState(0);
  const radioRef = useRef(null);
  const detailRef = useRef(null);
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(radioRef.current.id);
    if (detailRef.current) console.log(detailRef.current.value);
    setIsSurveyOpen(false);
  }

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
