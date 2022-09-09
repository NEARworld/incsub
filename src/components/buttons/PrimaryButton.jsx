function PrimaryButton({ customClass, text }) {
  return (
    <button
      className={customClass}
      style={{
        borderRadius: '4px',
        padding: '12.5px 15px',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '15px',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
