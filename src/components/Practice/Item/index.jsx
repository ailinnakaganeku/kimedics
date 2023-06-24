import { ItemContainer, NameText, StyledCheckbox, TotalBedsText } from '../styles';


const PracticeListItem = ({ totalBeds, name }) => {
    return (
        <ItemContainer>
            <StyledCheckbox />
            <NameText>{name}</NameText>
            <TotalBedsText>({totalBeds})</TotalBedsText>
        </ItemContainer>
    );
};

export default PracticeListItem