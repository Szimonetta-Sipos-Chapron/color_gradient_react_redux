import Button from './Button';

import { useDispatch } from 'react-redux';
import {
  changeAllColor,
  changeFirstColor,
  changeLastColor,
} from '../store/gradientReducer';

const ColorButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className='buttons group'>
      <Button
        text={'Random First'}
        onClick={() => dispatch(changeFirstColor())}
      />
      <Button text={'Random All'} onClick={() => dispatch(changeAllColor())} />
      <Button
        text={'Random Last'}
        onClick={() => dispatch(changeLastColor())}
      />
    </div>
  );
};

export default ColorButtons;
