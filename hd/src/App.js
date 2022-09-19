import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portfolio from './component/Portfolio';
import Solution from './component/Solution';
import Promotion from './component/Promotion';
import News from './component/News';
import Footer from './component/Footer';
import Totop from './component/Totop';
import Popup from './component/Popup';

const App = ({}) => {
  return (
    <Wrapper>
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Portfolio />
        <Solution />
        <Promotion />
        <News />
      </main>
      <Footer />
      <Totop />
      <Popup/>
    </Wrapper>
  );
}

export default App;