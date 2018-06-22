import React from 'react';
import './tickets.css';
import SingleTicket from './SingleTicket';
import SidebarNav from './SidebarNav';

const GetRequest = ({ match : {params: {id} } }) => {
    const numbID = Number(id);
    return(
        <div>
            <SidebarNav />
            <div className='hub-content'>
                <SingleTicket id={numbID} />
            </div>
        </div>
    )
}

export default GetRequest;