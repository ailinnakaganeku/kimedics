import MenuItem from '@mui/material/MenuItem';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Column, OptionContainer, OptionIcon, StyledDrawer, StyledSearchField, StyledTextField } from './styes';
import PracticeList from '../Practice';

const options = [
    {
        value: 'Practice',
        label: 'Practice',
        icon: <RoomOutlinedIcon fontSize='18px' />,
    },
]

const Drawer = () => {

    const renderOptions = () => {
        return options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                <OptionContainer>
                    <OptionIcon>{option.icon}</OptionIcon>
                    {option.label}
                </OptionContainer>
            </MenuItem>
        ));
    };

    return (
        <StyledDrawer>
            <Column>
                <StyledTextField
                    id='outlined-select-currency'
                    select
                    label='Display'
                    defaultValue='Practice'
                    color='secondary'
                >
                    {renderOptions()}
                </StyledTextField>
                <StyledSearchField
                    id='outlined-search'
                    type='search'
                    color='secondary'
                    placeholder='Search'
                    InputProps={{
                        startAdornment: <SearchIcon color='secondary' />,
                    }}
                />
            </Column>
            <Column>
                <PracticeList />
            </Column>
        </StyledDrawer>
    );
};

export default Drawer;
