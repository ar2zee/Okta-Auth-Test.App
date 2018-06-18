import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

class SignInWidget extends Component{
    componentDidMount(){
        const el = ReactDOM.findDOMNode(this);
        this.widget = new OktaSignIn({
            baseUrl: this.props.baseUrl,
            logo: 'https://cdn.vox-cdn.com/thumbor/SfyqZw6l_jidAYdkqYEis-Omdho=/0x0:1680x1050/1200x675/filters:focal(706x391:974x659):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/56414327/YTLogo_old_new_animation.0.gif'
        });
        this.widget.renderEl( {el}, this.props.onSuccess, this.props.onError)
    }
    componentWillUnmount(){
        this.widget.remove();
    }

    render(){
        return <div />;
    }
}

export default SignInWidget;