import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { Header } from './component/Header';
import MainContainer from './component/MainContainer';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
