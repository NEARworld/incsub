import { useState } from 'react';

function PrimaryButton({ parent, customClass, text }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={customClass}
      style={{
        borderRadius: '4px',
        padding: '12.5px 15px',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '15px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        ...makeStyle(),
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );

  function makeStyle() {
    let styles = {};
    // For survey cancel button
    if (parent?.name === 'survey') {
      styles.color = '#6b6b6b';
      styles.cursor = 'initial';
      if (parent?.checked) {
        styles.cursor = 'pointer';
        styles.color = 'white';
        styles.backgroundColor = '#F43C3D';
        if (hover) styles.backgroundColor = '#de2828';
      }
    }
    // For modal button
    if (customClass === 'btn_primary') {
      styles.color = 'white';
      if (hover) styles.backgroundColor = '#2260d4';
      else styles.backgroundColor = '#286ef1';
    }
    return styles;
  }
}

export default PrimaryButton;
