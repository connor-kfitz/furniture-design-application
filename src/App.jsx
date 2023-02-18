import './styles/main.scss';
import Header from './components/header-section';
import Intro from './components/intro-section';
import TopProducts from './components/top-products-section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <Intro></Intro>
        <TopProducts></TopProducts>
      </body>
    </div>
  );
}

export default App;