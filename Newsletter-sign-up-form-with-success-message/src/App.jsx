import SubscribeCard from './components/SubscribeCard';
import ThanksCard from './components/ThanksCard';
import './styles/index.scss';
import { useSelector } from 'react-redux';

function App() {
  const email = useSelector((state) => state.email.email);
  console.log(email);

  return (
    <div className="App">{email ? <ThanksCard /> : <SubscribeCard />}</div>
  );
}

export default App;
