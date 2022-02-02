//import logo from './logo.svg';
import './appp.css';
import App2 from './App2';
//import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello</h1>
//     </div>
//   );
// }

const App=()=>{
  return(
    <div className='app'>
      <Button>Submit</Button>
      <Button variant="contained">Default</Button>
      <h2>Hey</h2>
      <App2 />
    </div>
  );
}


export default App;
