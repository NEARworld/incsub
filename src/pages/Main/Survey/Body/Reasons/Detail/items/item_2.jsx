export default ({ styles, detailRef }) => (
  <textarea
    id={2}
    className={styles.second}
    placeholder="What is the better solution? If you don't mind sharing. Your feedback is much appreaciated!"
    required
    ref={detailRef}
  ></textarea>
);
