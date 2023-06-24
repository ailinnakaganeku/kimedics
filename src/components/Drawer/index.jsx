import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Column, OptionContainer, OptionIcon, StyledDrawer, StyledSearchField, StyledTextField } from './styes';
import PracticeList from '../Practice';
import { data } from '../Practice/data';

const options = [
    {
        value: 'Practice',
        label: 'Practice',
        icon: <RoomOutlinedIcon fontSize='18px' />,
    },
];

const Drawer = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const renderOptions = () => {
        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return filteredOptions.map((option) => (
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
                    id='outlined-select'
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Column>
            <Column>
                <PracticeList
                    data={data?.filter(({ name }) =>
                        name.toLowerCase().includes(searchQuery.toLowerCase())
                    )}
                />
            </Column>
        </StyledDrawer>
    );
};

export default Drawer;
