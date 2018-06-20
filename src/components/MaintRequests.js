import React, { Component } from 'react';
import SidebarNav from './SidebarNav';


export default class Requests extends Component {
    state={
        sidebar: true
    }

 render(){
     return(
         <div>
            <SidebarNav />
            <div className="hub-content">
                <p>This is the Main Request Page</p>
            </div>
         </div>
     );
 }

}