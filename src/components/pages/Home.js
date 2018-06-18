// src/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        // this.checkAuthentication = this.checkAuthentication.bind(this);
        // this.login = this.login.bind(this);
        // this.logout = this.logout.bind(this);
    }

     checkAuthentication = async() => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

     login = async() => {
        this.props.auth.login('/');
    }

     logout = async() => {
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;

        const mainContent = this.state.authenticated ?
           <div>
                <p className="lead">You have entered the staff portal <Link to="/staff">click here </Link></p>
                <button className="btn btn-lg btn-light" onClick={this.logout}>Logout</button>
           </div> :
           <div>
                <p className="lead">If you are a member please do smth</p>
                <button className="btn btn-lg btn-dark" onClick={this.login}>Login</button>
           </div> 
           

        return (
            <div className="jumbotron">
                <h1 className="display-4"> Okra Test App</h1>
                {mainContent}
            </div>
        );
    }
});