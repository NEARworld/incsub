import { useState } from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import styles from 'Styles/survey/survey.module.scss';

function Survey({ survey, modal }) {
  const [checked, setChecked] = useState(0);
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    setIsSurveyOpen(false);
  }

  return (
    <form className={styles.container} method="POST" onSubmit={handleSubmit}>
      <Header
        setIsModalOpen={setIsModalOpen}
        setIsSurveyOpen={setIsSurveyOpen}
      />
      <div className={styles.wrapper}>
        <Body checked={checked} setChecked={setChecked} />
        <Footer checked={checked} />
      </div>
    </form>
  );
}

export default Survey;
