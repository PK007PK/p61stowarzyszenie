import React from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { SearchInputStyle } from './SearchInput.Style';

const SearchInput = () => (
    <BootsContainer>
        <SearchInputStyle>
            <input placeholder="Wyszukaj..." />
        </SearchInputStyle>
    </BootsContainer>
);

export default SearchInput;
