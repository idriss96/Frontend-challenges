import image from '../assets/images/illustration-sign-up-desktop.svg';
import iconList from '../assets/images/icon-list.svg';
import { useState } from 'react';

function SubscribeCard() {
  let email = '';
  const [emailError, setEmailError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    email = e.target[0].value;
    console.log(email);
    if (emailRegex.test(email)) {
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
            className={emailError ? "form-input-error" : 'form-input'}

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
