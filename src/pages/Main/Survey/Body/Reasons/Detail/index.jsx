import styles from 'Styles/survey/detail.module.scss';

function Detail({ checked }) {
  function setComponent() {
    if (checked === 2) {
      return (
        <textarea
          className={styles.second}
          placeholder="What is the better solution? If you don't mind sharing. Your feedback is much appreaciated!"
        ></textarea>
      );
    } else if (checked === 4) {
      return (
        <div className={styles.forth}>
          <h6>Which product(s) did you have an issue with?</h6>
        </div>
      );
    } else return null;
  }

  return setComponent();
}

export default Detail;
