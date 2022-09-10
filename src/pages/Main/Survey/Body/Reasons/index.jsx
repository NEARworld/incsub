import reasonsData from 'Mocks/reasonsData';
import Detail from './Detail';
import styles from 'Styles/survey/reasons.module.scss';

function Reasons({ checked, setChecked }) {
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
              onChange={() => {
                checked === item.id ? setChecked(0) : setChecked(item.id);
              }}
              checked={checked === item.id ? true : false}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.text}>{item.data}</span>
          </label>
          {checked === item.id ? <Detail checked={checked} /> : null}
        </div>
      ))}
    </div>
  );
}

export default Reasons;
