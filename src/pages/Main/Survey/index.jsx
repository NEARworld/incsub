import '../../../styles/survey.scss';
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
      <section className="survey-body">
        <div className="survey-title">
          <h1 className="survey-title-main">We're sad to see you go...</h1>
          <p className="survey-title-sub">
            Can you tell us why you want to cancel your membership?
          </p>
        </div>
        <div className="survey-content"></div>
      </section>
      <footer>
        <div className="warning"></div>
        <div className="survey-control">
          <button>Back</button>
          <button>Cancel Membership</button>
        </div>
      </footer>
    </div>
  );
}

export default Survey;
