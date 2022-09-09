import { useState } from 'react';
import '../../styles/modal.scss';
import CloseButton from '../buttons/CloseButton';
import PrimaryButton from '../buttons/PrimaryButton';
import DiscountIcon from '../icons/DiscountIcon';

function Modal({ setOpenSurvey }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className="modal-wrapper"
      style={{
        display: isOpen ? 'block' : 'none',
      }}
    >
      <CloseButton
        customWrapper="modal-close-wrapper"
        customClass="modal-close-btn"
        setIsOpen={setIsOpen}
      />
      <div className="modal-body-container">
        <DiscountIcon customWrapper="modal-discount-icon-wrapper" />
        <div className="modal-body">
          <div className="modal-title">
            Before You Go... <br />
            Would 50% Off For 6 Months Help?
          </div>
          <div className="modal-content">
            <p className="modal-content-item-1">
              We know things REALLY suck in the world right now - and many
              businesses and freelancers are struggling to stay afloat during
              this COVID-19 crisis.
            </p>
            <div className="modal-content-item-2">
              <p className="modal-content-item-2-1">
                So if you could use the extra cushion, grab 50% off for 6
                months.
              </p>
              <p className="modal-content-item-2-2">
                We hope you're staying safe and healthy!
              </p>
              <div className="modal-content-control">
                <PrimaryButton
                  customClass="modal-btn-primary"
                  text="50 % OFF For 6 Months"
                  triggers={{ setOpenSurvey, setIsOpen }}
                  parent="modal"
                />
                <button className="modal-cancel">
                  No, thanks! I'll cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
