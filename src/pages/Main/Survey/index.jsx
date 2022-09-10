import styles from 'Styles/survey/survey.module.scss';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

function Survey({ survey, modal }) {
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;
  return (
    <div className={styles.container}>
      <Header
        setIsModalOpen={setIsModalOpen}
        setIsSurveyOpen={setIsSurveyOpen}
      />
      <div className={styles.wrapper}>
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Survey;
