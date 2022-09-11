import NoticeIcon from 'Icons/NoticeIcon';
import { useContext, useEffect, useState } from 'react';
import { products } from 'Mocks/products';
import { DetailContext } from 'Pages/Main';

export default ({ styles, detailRef }) => {
  const [isFocusDisplay, setIsFocusDisplay] = useState(false);
  const [inputBorder, setInputBorder] = useState('1px solid black');
  const [subData, setSubData] = useState({
    products: [],
    type: null,
    text: '',
  });
  const [_, setDetailPayload] = useContext(DetailContext);

  useEffect(() => {
    setDetailPayload(subData);
  }, [subData]);

  const getCleanedProductList = (prevState, product) => {
    let checkedProduct = undefined;
    const cleanedArr = prevState.products.filter((item) => {
      if (item === product.id) checkedProduct = product.id;
      return item !== product.id;
    });
    return checkedProduct
      ? { ...prevState, products: cleanedArr }
      : { ...prevState, products: [...cleanedArr, product.id] };
  };

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
            onClick={() => setIsFocusDisplay((prevState) => !prevState)}
          >
            <input
              type="text"
              readOnly
              id="product"
              style={{
                border: isFocusDisplay ? '1px solid #286ef1' : inputBorder,
              }}
              onMouseOver={() => setInputBorder('1px solid #286ef1')}
              onMouseLeave={() => setInputBorder('1px solid black')}
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
            >{`${subData.products.length} products selected`}</span>
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
                    htmlFor={`product_${product.id}`}
                    className={styles.product}
                  >
                    <input
                      type="checkbox"
                      id={`product_${product.id}`}
                      name={`${product.name} #${product.id}`}
                      onChange={() =>
                        setSubData((prevState) =>
                          getCleanedProductList(prevState, product)
                        )
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
          <button
            type="button"
            onClick={() =>
              setSubData((prevState) => ({ ...prevState, type: 1 }))
            }
            style={{
              backgroundColor: subData.type === 1 ? '#d4e2ff' : 'transparent',
              color: subData.type === 1 ? '#286ef1' : 'initial',
            }}
          >
            One Major Problem
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('clicked');
              setSubData((prevState) => ({ ...prevState, type: 2 }));
            }}
            style={{
              backgroundColor: subData.type === 2 ? '#d4e2ff' : 'transparent',
              color: subData.type === 2 ? '#286ef1' : 'initial',
            }}
          >
            Various things
          </button>
        </section>
      </div>
      <hr />
      <div className={styles.section_3}>
        <header className={styles.header}>
          <h1 className={styles.title}>What problem(s) did you encounter?</h1>
          <NoticeIcon />
        </header>
        <section>
          <textarea
            onChange={(e) =>
              setSubData((prevState) => ({
                ...prevState,
                text: e.target.value,
              }))
            }
            required
          ></textarea>
        </section>
      </div>
      <hr />
    </div>
  );
};
