import { useState } from 'react';
import PracticeListItem from './Item';
import { StyledCheckbox, ItemContainer, Text, JobsText } from './styles';

const PracticeList = ({data}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]);
    } else {
      const allIds = data.map(({ id }) => id);
      setSelectedItems(allIds);
    }
  };

  const handlePracticeListItemSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <>
      <ItemContainer>
        <StyledCheckbox
          checked={selectedItems.length === data.length}
          onChange={handleSelectAll}
        />
        <Text>All</Text>
        <JobsText>Jobs</JobsText>
      </ItemContainer>
      {data?.map(({ id, name, totalBeds }) => (
        <PracticeListItem
          key={id}
          id={id}
          name={name}
          totalBeds={totalBeds}
          checked={selectedItems.includes(id)}
          onSelect={handlePracticeListItemSelect}
        />
      ))}
    </>
  );
};

export default PracticeList;
