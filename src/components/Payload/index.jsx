import styles from 'Styles/payload.module.scss';

export default function Payload({ payload }) {
  function makeTemplate() {
    if (payload['radioId'] === 2) {
      return (
        <div>
          <p>radioId: {payload['radioId']}</p>
          <p>text: {payload.subData}</p>
        </div>
      );
    }
    if (payload['radioId'] === 4) {
      return (
        <div>
          <p>radioId: {payload['radioId']}</p>
          <p>products: {JSON.stringify(payload.subData['products'])}</p>
          <p>text: {payload.subData['text']}</p>
        </div>
      );
    } else return <p>'radioId':, {payload['radioId']}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h1>✅ Request Paylod</h1>
      {makeTemplate()}
    </div>
  );
}
