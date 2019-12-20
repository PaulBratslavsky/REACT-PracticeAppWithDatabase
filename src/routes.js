import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Layout from './HOCs/Layout/layout';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </Layout>
        )
    }
    
}

export default Routes;