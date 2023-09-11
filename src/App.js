import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/header';
import AppMain from './components/mainPage';
import AppServices from './components/ourServices';
import AppTesti from './components/whyUs';
import AppTest from './components/testimonial';
import AppLok from './components/sewaMobil';
import AppFaq from './components/faq';
import AppContact from './components/footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppMain />
        <AppServices />
        <AppTesti />
        <AppTest />
        <AppLok />
        <AppFaq />
        <AppContact />
      </main>
    </div>
  );
}

export default App;
