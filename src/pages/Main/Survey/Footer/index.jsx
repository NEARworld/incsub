import Warning from '../../../../components/notifications/Warning';

function Footer() {
  const content =
    "Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things. And you'll lose the chance to stay on this plan at the same cost ongoing (regardless of future price increases).";
  return (
    <footer>
      <Warning content={content} />
      <div className="survey-control">
        <button>Back</button>
        <button>Cancel Membership</button>
      </div>
    </footer>
  );
}

export default Footer;
