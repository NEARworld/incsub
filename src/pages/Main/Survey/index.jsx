import '../../../styles/survey.scss';
import Body from './Body';
import Header from './Header/index';

function Survey({ survey, modal }) {
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;
  return (
    <div className="survey-container">
      <Header
        setIsModalOpen={setIsModalOpen}
        setIsSurveyOpen={setIsSurveyOpen}
      />
      <Body />
      <Footer />
    </div>
  );
}

export default Survey;
