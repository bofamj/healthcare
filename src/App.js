import Header from './components/header/Header'
import Services from './components/services/Services'
import HealthCare from './components/healthcare/HealthCare'
import MobileApp from './components/mobileApp/MobileApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <HealthCare />
      <MobileApp />
    </div>
  );
}

export default App;
