import '../../../styles/survey.scss';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

function Survey({ survey, modal }) {
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;
  return (
    <div className="survey-container">
      <Header
        setIsModalOpen={setIsModalOpen}
        setIsSurveyOpen={setIsSurveyOpen}
      />
      <div className="survey-wrapper">
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Survey;
