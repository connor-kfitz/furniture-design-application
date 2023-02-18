import './styles/main.scss';
import Header from './components/header-section';
import Intro from './components/intro-section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <Intro></Intro>
      </body>
    </div>
  );
}

export default App;
