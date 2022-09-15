import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portfolio from './component/Portfolio';
import Solution from './component/Solution';
import Promotion from './component/Promotion';

const App = () => {
  return (
    <div className="Wrap">
     <Header/>
     <main>
      <MainVisual/>
      <MainContent/>
      <Portfolio/>
      <Solution/>
      <Promotion/>
     </main>
    </div>
  );
}

export default App;