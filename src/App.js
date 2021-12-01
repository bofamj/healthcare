import Header from './components/header/Header'
import Services from './components/services/Services'
import HealthCare from './components/healthcare/HealthCare'
import MobileApp from './components/mobileApp/MobileApp';
import Testimonials from './components/testimonials/Testimonials'
import Foter from './components/footer/Foter'
import Article from './components/article/Article'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <HealthCare />
      <MobileApp />
      <Testimonials />
      <Article/>
      <Foter/>
    </div>
  );
}

export default App;
