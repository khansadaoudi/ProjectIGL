import React ,{Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {MDBIcon}from 'mdbreact';
import { NavLink } from 'react-router-dom';
const {  Sider } = Layout;
class SideNav extends Component  {
  

render() {
  return(
    <Router>
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item >
          <NavLink to="/" exact={true}>
        <MDBIcon icon="chart-pie" className="mr-3"/>
          <span className="nav-text">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
        <NavLink to="/profil" >
        <MDBIcon icon="user" className="mr-3"/>
          <span className="nav-text">Profil</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
        <NavLink to="/AddProf" >
        <MDBIcon icon="plus-square"  className="mr-3"/>
          <span className="nav-text">Ajout Enseignant</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
        <NavLink to="/AddEtud" >
        <MDBIcon icon="plus-square"  className="mr-3"/>
      
          <span className="nav-text">Ajout Etudiant</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
        <NavLink to="/LogOut" >
        <MDBIcon icon="sign-out-alt"  className="mr-3"/>
          <span className="nav-text">Déconnexion</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>
  </Router>
);
}
}
export default SideNav;