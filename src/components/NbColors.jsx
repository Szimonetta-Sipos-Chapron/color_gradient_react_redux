import { useSelector } from 'react-redux';

const NbColors = () => {
  console.log('render NbColors');

  const nbColors = useSelector((state) => state.gradient.nbColors);

  return <div className='nbColors'>{nbColors} couleurs générées</div>;
};

export default NbColors;
