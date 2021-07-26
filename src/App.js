
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SiteHeader from './components/common/Header';
import SiteFooter from './components/common/Footer';
import {Layout} from 'antd';
const {Header, Content, Footer} = Layout; 
//BrowserRouter or Router defines the routing region. All the URL and consecutive
//components are placed in this region.
//Route renders some UI when path matches the current URL.
//Link equivalent to anchor tag of HTML.
//Switch is used to render only first route that matches the URL.   
function App() {
  return (
    <>
    <Layout className="mainLayout">
      <Header>
        <SiteHeader/>
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <SiteFooter />
      </Footer>
    </Layout>
    </>
  );
}

export default App;
