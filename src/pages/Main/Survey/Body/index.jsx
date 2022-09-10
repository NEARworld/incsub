import styles from 'Styles/survey/survey.module.scss';
import Reasons from './Reasons';

function Body({ checked, setChecked, radioRef, detailRef }) {
  return (
    <section className={styles.body}>
      <div className={styles.title}>
        <h1 className={styles.title_main}>We're sad to see you go...</h1>
        <p className={styles.title_sub}>
          Can you tell us why you want to cancel your membership?
        </p>
      </div>
      <Reasons
        checked={checked}
        setChecked={setChecked}
        radioRef={radioRef}
        detailRef={detailRef}
      />
    </section>
  );
}

export default Body;
