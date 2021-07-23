import React from 'react';

interface SearchResultsProps {
    query : string
}

const SearchResults: React.FC<SearchResultsProps> = ({query}) => {
    return (<div>
        <h6>Search Results</h6>
        <p>{query}</p>
    </div>);
}
export default SearchResults;