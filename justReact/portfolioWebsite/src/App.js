import logo from './logo.svg';
import './App.css';
import 'flowbite';
import { Navigation } from './Components/Navigation';
import { Introduction } from './Components/Introduction';

function App() {
  return (
    <div class="container mx-auto">
        <Navigation />
        <Introduction />
    </div>
  );
}

export default App;
