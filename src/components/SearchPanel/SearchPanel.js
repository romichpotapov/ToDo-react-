import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {

    const styleSearch = {
        fontSize: '17px',
    }

    const searchText = 'Type here to search';
    return <input className="search-input" style={styleSearch} placeholder={searchText} />;
};

export default SearchPanel;