import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { Column, OptionContainer, OptionIcon, StyledDrawer, StyledSearchField, StyledTextField } from './styles';
import PracticeList from './Practice';
import { data } from '../../utils/data';
import { options } from '../../utils/options';
// import fetchData from '../../utils/api';



const Drawer = () => {
    const [searchQuery, setSearchQuery] = useState('');
/*     const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const responseData = await fetchData();
            setData(responseData);
        };

        fetchDataFromApi();
    }, []); */


    const renderOptions = () => {
        const filteredOptions = options?.filter((option) =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return filteredOptions?.map((option) => (
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
