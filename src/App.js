// import logo from './logo.svg';
import './App.css';
import HomeLayout from './Prop/HomeLayout';
// import Product from './Prop/Product';
import RenderWithMAp from './RenderWithMap/RenderWithMAp';
import ShoesShop from './ShoesShop/ShoesShop';

function App() {
  return (
    <div className="App">
      <HomeLayout/>
      <hr/>
      <RenderWithMAp/>
      <hr/>
      <ShoesShop/>
    </div>
  );
}

export default App;
