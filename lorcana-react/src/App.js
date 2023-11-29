import Header from './components/Header.js';
import TierList from './components/TierList.js';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app-main'>
        <div className='switcher'>
          
        </div>
        <TierList />
      </div>
    </div>
  );
}

export default App;
