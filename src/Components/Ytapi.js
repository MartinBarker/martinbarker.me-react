import React, { Component } from 'react';
import gapi from 'gapi-client';

class App extends Component {
    generateURL = async (e = '') => {
        console.log('generateURL() ')
        
        const clientSecret = process.env.client_secret;
        const clientId = process.env.client_id;
        const redirectUrl = process.env.redirect_uris[0];
        
        const OAuth2 = gapi.auth.OAuth2;
        var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    }
    render() {
        

        return (
            <div>
                {/* tagger.site title */}
                <h1>Ytapi</h1>

                <button onClick={this.generateURL} >generateURL</button>

            </div>
        );
    }
}

export default App;
