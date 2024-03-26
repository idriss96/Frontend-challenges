import image from '../assets/images/illustration-sign-up-desktop.svg';
import iconList from '../assets/images/icon-list.svg';

function SubscribeCard() {
  return (
    <div className="card-container">
      <div className="card-container__info">
        <h1 className="title">
          Stay updated!
        </h1>
        <p className="description">
          Join 60.000+ product managers receiving monthly updates on:
        </p>
        <ul className="list">
          <li className='list-item'> <img src= {iconList} alt="check icon" /> Product discovery and building what matters</li>
          <li className='list-item'> <img src= {iconList} alt="check icon" /> measuring to ensure updates are success</li>
          <li className='list-item'> <img src= {iconList} alt="check icon" /> and much more!</li>
        </ul>
        <form className="form">
          <label htmlFor="email" className='form-label'>Email address</label>
          <input className='form-input' type="email" placeholder="email@company.com" />
          <button className='form-button' type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="card-container__image">
        <img src={image} alt="illustration" />
      </div>
    </div>
  );
}

export default SubscribeCard;
