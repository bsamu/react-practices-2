import './App.css';
//import ButtonList from './buttonList'
import ButtonListWithMap from './buttonListWithMap'
import Profile from './profile';
import Profile2 from './profile2';
import Profile3 from './profile3';
import Profile4 from './profile4';

//const buttonText = "Click me!";

function App() {
  return (
    <div className="App">
      <header className="App header">
        {/*<ButtonList text={buttonText} text2="blaBla" />*/}
        <ButtonListWithMap />
      </header>
      <Profile />
      <Profile2 />
      <Profile3 />
      <Profile4 />
    </div>
  );
}

export default App;