import NoticeIcon from 'Icons/NoticeIcon';
import { useEffect, useState } from 'react';
import { products } from 'Mocks/products';

export default ({ styles, detailRef }) => {
  const [isFocusDisplay, setIsFocusDisplay] = useState(false);
  const [checkedProducts, setCheckedProducts] = useState([]);
  useEffect(() => {
    console.log(isFocusDisplay);
  });
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
          <div
            className={styles.select_display}
            onClick={() => {
              console.log('clicked div');
              setIsFocusDisplay((prevState) => !prevState);
            }}
          >
            <input
              type="text"
              readOnly
              id="product"
              style={{
                border: isFocusDisplay
                  ? '1px solid #286ef1'
                  : '1px solid black',
              }}
            />
            <label
              htmlFor="product"
              style={{
                top: isFocusDisplay ? 0 : '50%',
                fontSize: isFocusDisplay ? '0.8rem' : '15px',
                padding: isFocusDisplay ? '0 7px' : 'initial',
                color: isFocusDisplay ? '#286ef1' : 'black',
                backgroundColor: 'white',
                width: 'auto',
              }}
            >
              Select Product (s)
            </label>
            <span
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: isFocusDisplay ? 1 : 0,
              }}
            >{`${0} products selected`}</span>
          </div>
          <div
            className={styles.products_container}
            style={{
              opacity: isFocusDisplay ? 1 : 0,
              maxHeight: isFocusDisplay ? '250px' : 0,
            }}
          >
            <ul className={styles.products_wrapper}>
              {products.map((product) => (
                <li
                  key={product.id}
                  className={styles.product_wrapper}
                  style={{
                    display: isFocusDisplay ? 'block' : 'none',
                  }}
                >
                  <label
                    htmlFor={product.id}
                    className={styles.product}
                    style={{
                      backgroundColor:
                        checkedProducts === product.id
                          ? '#d4e2ff'
                          : 'transparent',
                    }}
                  >
                    <input
                      type="checkbox"
                      id={product.id}
                      name={`${product.name} #${product.id}`}
                      onChange={() =>
                        setCheckedProducts((prevState) => [
                          ...prevState,
                          product.id,
                        ])
                      }
                    />
                    <span
                      className={styles.name}
                    >{`${product.name} #${product.id}`}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
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
