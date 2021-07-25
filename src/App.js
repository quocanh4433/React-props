// import logo from './logo.svg';
import './App.css';
import CarShop from './CarShop/CarShop';
import ExerciseCard from './ExerciseCard/ExerciseCard';
import PhoneShop from './PhoneShop/PhoneShop';
import HomeLayout from './Prop/HomeLayout';
// import Product from './Prop/Product';
import RenderWithMAp from './RenderWithMap/RenderWithMAp';
import ShoesShop from './ShoesShop/ShoesShop';

function App() {
  return (
    <div>
      <HomeLayout/>
      <hr/>
      <RenderWithMAp/>
      <hr/>
      <ShoesShop/>
      <hr/>
      <PhoneShop/>
      <hr/>
      <CarShop/>
      <hr/>
      <ExerciseCard/>
    </div>
  );
}

export default App;
