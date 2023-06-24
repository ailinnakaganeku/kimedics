import { useState } from 'react';
import { data } from './data';
import PracticeListItem from './Item';
import { StyledCheckbox, ItemContainer, Text } from './styles';

const PracticeList = () => {
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
