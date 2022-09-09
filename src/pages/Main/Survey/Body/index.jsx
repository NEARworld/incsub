import Reasons from './Reasons';

function Body() {
  return (
    <section className="survey-body">
      <div className="survey-title">
        <h1 className="survey-title-main">We're sad to see you go...</h1>
        <p className="survey-title-sub">
          Can you tell us why you want to cancel your membership?
        </p>
      </div>
      <Reasons />
    </section>
  );
}

export default Body;
