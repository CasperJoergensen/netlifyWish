import React from "react";
const netlifyIdentity = require('netlify-identity-widget');

function LandingPage() {
    netlifyIdentity.init()

    const openLoginModal = async (e: any) => {
        fetch("/.netlify/functions/hello").then(t => {
            console.log(t)
        })

        // netlifyIdentity.open('login')
    }

    return (
        <div className={'landing-page'}>
            <button onClick={openLoginModal}>Log ind</button>
        </div>
    )
}

export default LandingPage;