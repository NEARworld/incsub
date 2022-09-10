import { useState } from 'react';

function PrimaryButton({ customClass, text }) {
  const [hover, setHover] = useState(false);
  function makeStyle() {
    let styles = {};
    // For survey cancel button
    if (customClass === 'btn-cancel-membership')
      styles.backgroundColor = '#F43C3D';
    // For modal button
    if (customClass === 'btn_primary') {
      if (hover) styles.backgroundColor = '#2260d4';
      else styles.backgroundColor = '#286ef1';
    }
    return styles;
  }
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
        color: 'white',
        ...makeStyle(),
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
