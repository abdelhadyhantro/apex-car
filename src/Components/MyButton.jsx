
function MyButton({ label, style, onclick }) {
  return (
    <button
      className={style}
      onClick={onclick}
    >
      {label}
    </button>
  );
}

export default MyButton;
