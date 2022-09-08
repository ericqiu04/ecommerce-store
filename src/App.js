import Home from './routes/home.component'
import Shop from './routes/shop.component'
import {Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route paht = '/shop' element = {<Shop/>} />
    </Routes>
      
  );
};

export default App;
