function detailGenerator(styles, checked, detailRef) {
  if (checked === 2) {
    return (
      <textarea
        id={2}
        className={styles.second}
        placeholder="What is the better solution? If you don't mind sharing. Your feedback is much appreaciated!"
        required
        ref={detailRef}
      ></textarea>
    );
  }
  if (checked === 4) {
    return (
      <div id={4} ref={detailRef} className={styles.forth}>
        <h6>Which product(s) did you have an issue with?</h6>
      </div>
    );
  }
  return null;
}

export default detailGenerator;
