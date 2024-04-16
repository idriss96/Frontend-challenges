import image from '../assets/images/illustration-sign-up-desktop.svg';
import iconList from '../assets/images/icon-list.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail } from '../state/email/email';

function SubscribeCard() {
  const [emailError, setEmailError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(e.target.email.value)) {
      dispatch(setEmail(e.target.email.value));
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="card-container">
      <div className="card-container__info">
        <h1 className="title">Stay updated!</h1>
        <p className="description">
          Join 60.000+ product managers receiving monthly updates on:
        </p>
        <ul className="list">
          <li className="list-item">
            <img src={iconList} alt="check icon" /> Product discovery and
            building what matters
          </li>
          <li className="list-item">
            <img src={iconList} alt="check icon" /> measuring to ensure updates
            are success
          </li>
          <li className="list-item">
            <img src={iconList} alt="check icon" /> and much more!
          </li>
        </ul>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="form-label">
            <label htmlFor="email" className="label-info">
              Email address
            </label>
            {emailError ? (
              <label htmlFor="email" className="label-error">
                Valid email required
              </label>
            ) : null}
          </div>
          <input
            className={emailError ? 'form-input-error' : 'form-input'}
            id="email"
            name="email"
            type="email"
            placeholder="email@company.com"
          />
          <button className="form-button" type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="card-container__image">
        <img src={image} alt="illustration" />
      </div>
    </div>
  );
}

export default SubscribeCard;
