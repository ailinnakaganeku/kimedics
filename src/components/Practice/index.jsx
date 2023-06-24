import { data } from './data';
import PracticeListItem from './Item';

const PracticeList = () => {
  return (
    <>
      {data?.map(({ id, name, totalBeds }) => (
        <PracticeListItem key={id} name={name} totalBeds={totalBeds} />
      ))}
    </>
  );
};

export default PracticeList;
