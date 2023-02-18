import './styles/main.scss';
import Header from './components/header-section';
import Intro from './components/intro-section';
import TopProducts from './components/top-products-section';
import Experiences from './components/experiences-section';
import Materials from './components/materials-section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Intro></Intro>
        <TopProducts></TopProducts>
        <Experiences></Experiences>
        <Materials></Materials>
      </main>
    </div>
  );
}

export default App;
