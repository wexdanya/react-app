import React from 'react';
import UserLoader from './../components/UsersLoader/index';
import Pagination from './../components/Pagination/index';
const HomePage = () => {
    return (
        <>
            <UserLoader />
            <Pagination/>
        </>
    );
}

export default HomePage;
