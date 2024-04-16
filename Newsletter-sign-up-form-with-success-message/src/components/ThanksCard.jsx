import iconSuccess from '../assets/images/icon-success.svg';
import { useSelector } from 'react-redux';

function ThanksCard() {
  const email = useSelector((state) => state.email.email);

  const handelClick = () => {
    console.log('clicked');
  };
  return (
    <div className="thankCard-container">
      <img src={iconSuccess} alt="success icon" />
      <h1 className="title">Thanks for subscribing!</h1>
      <p className="description">
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>

      <button className="button" type="button" onClick={handelClick}>
        Dismiss message
      </button>
    </div>
  );
}

export default ThanksCard;
