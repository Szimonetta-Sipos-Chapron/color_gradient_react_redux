import './App.css';
import ColorButtons from './components/ColorButtons';
import DirectionButtons from './components/DirectionButtons';
import Gradient from './components/Gradient';
import NbColors from './components/NbColors';

import { changeDirection } from './store/gradientReducer';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  
  const dispatch = useDispatch();

  dispatch(changeDirection('120deg'));

  const lastColor = useSelector((state) => state.gradient.lastColor);
  const firstColor = useSelector((state) => state.gradient.firstColor);

  console.log(lastColor, firstColor);

  return (
    <>
      <NbColors />
      <ColorButtons />
      <Gradient />
      <DirectionButtons />
    </>
  );
}

export default App;
