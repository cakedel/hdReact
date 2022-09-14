import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portfolio from './component/Portfolio';

const App = () => {
  return (
    <div className="Wrap">
     <Header/>
     <main>
      <MainVisual/>
      <MainContent/>
      <Portfolio/>
     </main>
    </div>
  );
}

export default App;