import logo from './logo.svg';
import './App.css';
import './Fonts.css'
import Navbar from './Components/Navbar/Navbar';
import AnimatedCursor from 'react-animated-cursor';
import Main from './Components/Main/Main';
import * as motion from "motion/react-client"

function App() {

  const COMPANY_NAME = "coffeehouse"

  return (
    <div className="App">
      <AnimatedCursor
        color='0, 255, 111'
        clickables={[
          '.link',
          '.menuButton'
        ]}
      />
      <Navbar COMPANY_NAME={COMPANY_NAME} />

      <Main COMPANY_NAME={COMPANY_NAME} />
    </div>
  );
}

export default App;
