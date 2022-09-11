import reasonsData from 'Mocks/reasonsData';
import Detail from './Detail';
import styles from 'Styles/survey/reasons.module.scss';
import { useEffect } from 'react';

function Reasons({ checked, setChecked, radioRef, detailRef }) {
  useEffect(() => {
    console.log('Reasons', checked);
  });
  return (
    <div className={styles.container}>
      {reasonsData.map((item) => (
        <div className={styles.wrapper} key={item.id}>
          <label
            className={styles.reason}
            htmlFor={item.id}
            style={{
              backgroundColor: checked === item.id ? '#d5e3fe' : 'transparent',
            }}
          >
            <input
              type="radio"
              name="reason"
              value={item.data}
              id={item.id}
              ref={checked === item.id ? radioRef : undefined}
              onChange={() => setChecked(item.id)}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.text}>{item.data}</span>
          </label>
          {checked === item.id ? (
            <Detail checked={checked} detailRef={detailRef} />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Reasons;
