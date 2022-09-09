import { useEffect } from 'react';
import reasonsData from '../../../../../mocks/reasonsData';

function Reasons() {
  useEffect(() => {
    console.log('rendered Reasons');
  });
  return (
    <div className="reason-container">
      {reasonsData.map((item) => (
        <div key={item.id} className="reason-wrapper">
          <input type="radio" name="reason" value={item.data} />
          <label htmlFor="html">{item.data}</label>
        </div>
      ))}
    </div>
  );
}

export default Reasons;
