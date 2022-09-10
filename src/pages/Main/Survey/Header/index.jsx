import CancelButton from 'Components/buttons/CancelButton';
import styles from 'Styles/survey/header.module.scss';

function Header({ setIsModalOpen, setIsSurveyOpen }) {
  return (
    <header className={styles.header}>
      <CancelButton
        customClass={styles.btn_cancel}
        triggers={{ setIsModalOpen, setIsSurveyOpen }}
      />
      <span className={styles.header_text}>Cancellation Survey</span>
      <hr className={styles.header_hr} />
    </header>
  );
}

export default Header;
