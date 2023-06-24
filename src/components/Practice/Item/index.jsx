import { ItemContainer, NameText, StyledCheckbox, TotalBedsText } from '../styles';

const PracticeListItem = ({ id, totalBeds, name, checked, onSelect }) => {
    return (
        <ItemContainer>
            <StyledCheckbox checked={checked} onChange={() => onSelect(id)} />
            <NameText>{name}</NameText>
            <TotalBedsText>({totalBeds})</TotalBedsText>
        </ItemContainer>
    );
};

export default PracticeListItem;
