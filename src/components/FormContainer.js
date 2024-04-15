import FourStar from "./FourStar";
import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="ak-900-wired-keyboard-parent">
      <div className="ak-900-wired-keyboard">AK-900 Wired Keyboard</div>
      <div className="parent9">
        <div className="ak-900-wired-keyboard">$960</div>
        <div className="div37">$1160</div>
      </div>
      <div className="four-star-group">
        <FourStar />
        <div className="div38">(75)</div>
      </div>
    </div>
  );
};

export default FormContainer;
