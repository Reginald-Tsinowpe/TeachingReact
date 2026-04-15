export function CustomButton(props) {
  return (
    <button className={`inline-max ${props.customClass}`}>
      {props.buttonText}
    </button>
  );
}

// export function CustomButton({ buttonText, customClass }) {
//   return <button className={`inline-max ${customClass}`}>{buttonText}</button>;
// }
