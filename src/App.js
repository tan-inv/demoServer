import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1> heyy there, hope you are doing well</h1>
      <h3>here are two books i really like:</h3>
      <ol>
        <li>
          <div>
        <Link to="/the-shining">The Shining</Link>
          </div>

        </li>
        <li>
          <div>
            <Link to="/recursion">Recursion</Link>
            
          </div>

        </li>
      </ol>
    </div>
  );
}

export default App;
