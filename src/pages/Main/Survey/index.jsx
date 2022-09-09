import CancelButton from '../../../components/buttons/CancelButton';
import '../../../styles/survey.scss';

function Survey() {
  return (
    <div className="survey-container">
      <header className="survey-header">
        <CancelButton customClass="survey-btn-cancel" />
      </header>
    </div>
  );
}

export default Survey;
