import React, {useState} from "react";
import Button from "../Button/Button";
import SearchResults from "../SearchResults/SearchResults";

const SearchBar = (props: any) => {
    const [searchValue, setSearchValue] = useState('');
    const [displaySearchValue, setDisplaySearchValue] = useState('');

    const collectValue = (e:any) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        // TODO take value from input
        // TODO search the api data for input value

        setDisplaySearchValue(searchValue);
    }

    const clearSearch = () => {
        setSearchValue('');
        setDisplaySearchValue('');
    }

    return (
        <>
            <input type="text" onChange={collectValue} value={searchValue} />
            <Button text="Search" onClick={handleSearch} /> <Button text="Reset" onClick={clearSearch} />
            <SearchResults results={displaySearchValue} />
        </>
    );
};

export default SearchBar;
