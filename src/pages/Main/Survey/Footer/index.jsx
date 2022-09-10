import Warning from 'Components/notifications/Warning';
import PrimaryButton from 'Components/buttons/PrimaryButton';
import LeftArrowIcon from 'Components/icons/LeftArrowIcon';

function Footer() {
  const content =
    "Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things. And you'll lose the chance to stay on this plan at the same cost ongoing (regardless of future price increases).";
  return (
    <footer>
      <Warning content={content} />
      <div className="survey-control">
        <LeftArrowIcon />
        <PrimaryButton
          customClass="btn-cancel-membership"
          text="Cancel Membership"
        />
      </div>
    </footer>
  );
}

export default Footer;
