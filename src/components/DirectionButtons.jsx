import { useDispatch } from 'react-redux';
import { changeDirection } from '../store/gradientReducer';
import Button from './Button';

const DirectionButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className='buttons group'>
      <Button
        text={'Left'}
        onClick={() => dispatch(changeDirection('270deg'))}
      />
      <Button
        text={'Right'}
        onClick={() => dispatch(changeDirection('90deg'))}
      />
    </div>
  );
};

export default DirectionButtons;
