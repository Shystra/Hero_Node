import { BrowserRouter } from 'react-router-dom';
import { RouteApp } from './routes';
import './global.css';


function App (){
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
    
  )
}

export default App
