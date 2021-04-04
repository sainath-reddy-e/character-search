import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title">Character Search App</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search Character by Name"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default HeaderPage;
