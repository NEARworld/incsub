import reasonsData from 'Mocks/reasonsData';
import { useState } from 'react';

function Reasons() {
  const [checked, setChecked] = useState(0);
  return (
    <div className="reason-container">
      {reasonsData.map((item) => (
        <label
          className="reason"
          key={item.id}
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
            onChange={() => setChecked(item.id)}
          />
          <span className="checkmark"></span>
          <span className="reason-text">{item.data}</span>
        </label>
      ))}
    </div>
  );
}

export default Reasons;
