import { useMemo } from "react";
import "./GoogleSIgnUp.css";

const GoogleSIgnUp = ({ signUpWithColor }) => {
  const signUpWithStyle = useMemo(() => {
    return {
      color: signUpWithColor,
    };
  }, [signUpWithColor]);

  return (
    <div className="google-sign-up">
      <div className="icon-google-parent">
        <img className="icon-google" alt="" src="/icongoogle.svg" />
        <div className="sign-up-with" style={signUpWithStyle}>
          Sign up with Google
        </div>
      </div>
    </div>
  );
};

export default GoogleSIgnUp;
