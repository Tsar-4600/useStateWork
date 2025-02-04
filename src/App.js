import logo from './logo.svg';
import './App.css';
import Counter from './components/counterN1';
import TextInput from './components/TextDisplayN2';
import LightSwitcher from './components/LightSwitchN3';
import List from './components/justAlistN4';
function App() {
  return (
    <div className="App">
        <h2>Первое задание</h2>
        <Counter/>
        <h2>Второе задание</h2>
        <TextInput/>
        <h2>Третье задание</h2>
        <LightSwitcher/>
        <h2>Четвертое задание</h2>
        <List/>

    </div>
  );
}

export default App;
