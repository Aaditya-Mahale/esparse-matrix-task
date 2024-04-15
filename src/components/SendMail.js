import { useMemo } from "react";
import "./SendMail.css";

const SendMail = ({ iconSend, sendMailBorder, enterYourEmailColor }) => {
  const sendMailStyle = useMemo(() => {
    return {
      border: sendMailBorder,
    };
  }, [sendMailBorder]);

  const enterYourEmailStyle = useMemo(() => {
    return {
      color: enterYourEmailColor,
    };
  }, [enterYourEmailColor]);

  return (
    <div className="send-mail" style={sendMailStyle}>
      <div className="enter-your-email" style={enterYourEmailStyle}>
        Enter your email
      </div>
      <img className="icon-send" alt="" src={iconSend} />
    </div>
  );
};

export default SendMail;
