import UnderLineIcon from "./UnderLineIcon";
import "./CallToUsFormContainer.css";

const CallToUsFormContainer = () => {
  return (
    <div className="frame-parent42">
      <div className="frame-parent43">
        <div className="icons-phone-parent">
          <img className="icons-phone" alt="" src="/iconsphone.svg" />
          <div className="call-to-us">Call To Us</div>
        </div>
        <div className="we-are-available-247-7-days-parent">
          <div className="we-are-available">
            We are available 24/7, 7 days a week.
          </div>
          <div className="emails-customerexclusivecom">
            Phone: +8801611112222
          </div>
        </div>
      </div>
      <UnderLineIcon
        underLineIconUnderLine="/underline.svg"
        underLineIconWidth="270px"
        underLineIconOverflow="unset"
        underLineIconPosition="relative"
      />
      <div className="frame-parent43">
        <div className="icons-phone-parent">
          <img className="icons-mail" alt="" src="/iconsmail.svg" />
          <div className="call-to-us">Write To US</div>
        </div>
        <div className="we-are-available-247-7-days-parent">
          <div className="fill-out-our">
            Fill out our form and we will contact you within 24 hours.
          </div>
          <div className="emails-customerexclusivecom">
            Emails: customer@exclusive.com
          </div>
          <div className="emails-customerexclusivecom">
            Emails: support@exclusive.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToUsFormContainer;
