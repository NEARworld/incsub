import WarningIcon from '../icons/WarningIcon';

function Warning({ content }) {
  return (
    <div className="warning-container">
      <WarningIcon />
      <p className="warning-text">{content}</p>
    </div>
  );
}

export default Warning;
