function Detail({ checked }) {
  function setComponent() {
    if (checked === 2) {
      return (
        <textarea
          className="reason-2"
          placeholder="What is the better solution? If you don't mind sharing. Your feedback is much appreaciated!"
        ></textarea>
      );
    } else if (checked === 4) {
      return (
        <div className="reason-4">
          <h6>Which product(s) did you have an issue with?</h6>
        </div>
      );
    } else return null;
  }

  return setComponent();
}

export default Detail;
