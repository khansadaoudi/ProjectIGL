import React,{Component} from 'react';
import NavBar from './dashboard/navbar';
import SideBar from './dashboard/sidebar';




class Dashboard extends Component{
    render() {
        return (
             <React.Fragment>
              <NavBar />
              <SideBar/>
              </React.Fragment>
               
        );
    }
}
export default Dashboard