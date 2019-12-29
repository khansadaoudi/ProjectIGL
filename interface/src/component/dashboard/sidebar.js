import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import Sections from './pages/content';
import ModalEtud from './pages/ModalEtud';
import ModalArticle from './pages/ModalArticle';
import ArticleAffich from './pages/ArticleAffich';

const {Header, Content,  Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SideBar extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Deshboard</span>
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="plus" />
                                <span>Publier Article</span>
                                <Link to="PublierArticle" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="desktop" />
                                <span>Afficher articles</span>
                                <Link to="AfficherArticle" />
                            </Menu.Item>
                            <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>Etudiant</span>
            </span>
          }
        >
          <Menu.Item key="4"><Link to="CreeCompte" />Creer Compte</Menu.Item>
          <Menu.Item key="5"><Link to="ModifierCompte" />Modifier Compte</Menu.Item>
          <Menu.Item key="6"><Link to="SupprimerCompte" />Supprimer Compte</Menu.Item>
          <Menu.Item key="7"><Link to="AfficherCompte" />Afficher </Menu.Item>
        </SubMenu>
        <Menu.Item key="8">
                                <Icon type="logout" />
                                <span>Déconnexion</span>
                                <Link to="/Dec" />
                            </Menu.Item>

                        </Menu>
                    </Sider>
              
                <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                style={{ cursor: 'pointer' }}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route exact path="/" component={Sections} />
                        <Route exact path="/CreeCompte" component={ModalEtud} />
                        <Route exact path="/PublierArticle" component={ModalArticle} />
                        <Route exact path="/AfficherArticle" component={ArticleAffich} />
                        
                        </Content>
                    
                    </Layout>
                    </Layout>
            </Router>
        );
    }
}


export default SideBar;