import React from "react";
const netlifyIdentity = require('netlify-identity-widget');

function LandingPage() {
    netlifyIdentity.init()

    const openLoginModal = () => {
        netlifyIdentity.open('login')
    }

    return (
        <div className={'landing-page'}>
            <button onClick={openLoginModal}>Log ind</button>
        </div>
    )
}

export default LandingPage;