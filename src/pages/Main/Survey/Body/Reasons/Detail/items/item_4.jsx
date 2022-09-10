import NoticeIcon from 'Icons/NoticeIcon';
import { useState } from 'react';

export default ({ styles, detailRef }) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div id={4} ref={detailRef} className={styles.fourth}>
      <div className={styles.section_1}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Which product(s) did you have an issue with?
          </h1>
          <NoticeIcon />
        </header>
        <section>
          <div className={styles.select_display}>
            <input
              type="text"
              readOnly
              placeholder={showSelect ? `${0} products selected` : ' '}
              id="product"
              onClick={() => setShowSelect((prevState) => !prevState)}
            />
            <label htmlFor="product">Select Product (s)</label>
          </div>
          <select
            name=""
            id=""
            multiple
            style={{
              maxHeight: showSelect ? '300px' : 0,
              opacity: showSelect ? 1 : 0,
            }}
          >
            <option value="0">Product #1</option>
            <option value="1">Product #2</option>
            <option value="2">Product #3</option>
          </select>
        </section>
      </div>
      <hr />
      <div className={styles.section_2}>
        <header className={styles.header}>
          <h1 className={styles.title}>What was it?</h1>
        </header>
        <section>
          <button type="button">One Major Problem</button>
          <button type="button">Various things</button>
        </section>
      </div>
      <hr />
      <div className={styles.section_3}>
        <header className={styles.header}>
          <h1 className={styles.title}>What problem(s) did you encounter?</h1>
          <NoticeIcon />
        </header>
        <section>
          <textarea required></textarea>
        </section>
      </div>
      <hr />
    </div>
  );
};
