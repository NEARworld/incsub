import styles from 'Styles/modal.module.scss';
import CloseButton from 'Buttons/CloseButton';
import PrimaryButton from 'Buttons/PrimaryButton';
import DiscountIcon from 'Icons/DiscountIcon';

function Modal({ modal, survey }) {
  const { isModalOpen, setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;
  return (
    <div
      className={styles.wrapper}
      style={{
        display: isModalOpen ? 'block' : 'none',
      }}
    >
      <CloseButton
        customWrapper={styles.close_wrapper}
        customClass={styles.close_btn}
        trigger={setIsModalOpen}
      />
      <div className={styles.body_container}>
        <DiscountIcon customWrapper={styles.discount_icon_wrapper} />
        <div className={styles.body}>
          <div className={styles.title}>
            Before You Go... <br />
            Would 50% Off For 6 Months Help?
          </div>
          <div className={styles.content}>
            <p className={styles.content_item_1}>
              We know things REALLY suck in the world right now - and many
              businesses and freelancers are struggling to stay afloat during
              this COVID-19 crisis.
            </p>
            <div className={styles.content_item_2}>
              <p className={styles.content_item_2_1}>
                So if you could use the extra cushion, grab 50% off for 6
                months.
              </p>
              <p className={styles.content_item_2_2}>
                We hope you're staying safe and healthy!
              </p>
              <div className={styles.content_control}>
                <PrimaryButton
                  customClass="btn_primary"
                  text="50 % OFF For 6 Months"
                />
                <button
                  className={styles.cancel}
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsSurveyOpen(true);
                  }}
                >
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
