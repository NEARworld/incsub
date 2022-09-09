import CancelButton from 'Components/buttons/CancelButton';

function Header({ setIsModalOpen, setIsSurveyOpen }) {
  return (
    <header className="survey-header">
      <CancelButton
        customClass="survey-btn-cancel"
        triggers={{ setIsModalOpen, setIsSurveyOpen }}
      />
      <span className="survey-header-text">Cancellation Survey</span>
      <hr className="survey-header-hr" />
    </header>
  );
}

export default Header;
