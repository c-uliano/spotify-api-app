import React from "react";

const SearchResults = (props: {results: string}) => {
    return (
        <div>
            {props.results}
        </div>
    );
};

export default SearchResults;
