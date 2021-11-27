import Header from './components/header/Header'
import Services from './components/services/Services'
import HealthCare from './components/healthcare/HealthCare'
import MobileApp from './components/mobileApp/MobileApp';
import Testimonials from './components/testimonials/Testimonials'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <HealthCare />
      <MobileApp />
      <Testimonials />
    </div>
  );
}

export default App;
