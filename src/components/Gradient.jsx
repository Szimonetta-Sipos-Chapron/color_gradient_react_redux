import { useSelector } from 'react-redux';

const Gradient = () => {
  const firstColor = useSelector((state) => state.gradient.firstColor);
  const lastColor = useSelector((state) => state.gradient.lastColor);
  const direction = useSelector((state) => state.gradient.direction);

  return (
    <>
      <div className='colors'>
        <span style={{ color: firstColor }}>{firstColor}</span>
        <span style={{ color: lastColor }}>{lastColor}</span>
      </div>
      <div
        className='gradient'
        style={{
          background: `linear-gradient(${direction},${firstColor},${lastColor})`,
        }}
      ></div>
    </>
  );
};

export default Gradient;
