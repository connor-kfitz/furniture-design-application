import './styles/main.scss';
import Header from './components/header-section';
import Intro from './components/intro-section';
import TopProducts from './components/top-products-section';
import Experiences from './components/experiences-section';
import Materials from './components/materials-section';
import Testimonials from './components/testimonial-section';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Intro/>
        <TopProducts/>
        <Experiences/>
        <Materials/>
        <Testimonials/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
