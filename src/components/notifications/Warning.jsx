import WarningIcon from '../icons/WarningIcon';
import '../../styles/warning.scss';

function Warning({ content }) {
  return (
    <div className="warning-container">
      <WarningIcon customClass="warning-icon-survey" />
      <p className="warning-text">{content}</p>
    </div>
  );
}

export default Warning;
