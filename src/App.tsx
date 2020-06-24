import React, {useEffect, useState} from 'react';
import './App.css';
import functionCaller from "./utils/functionCaller";

const netlifyIdentity = require('netlify-identity-widget');
    netlifyIdentity.init()

function App() {
    netlifyIdentity.on('login', (user: object) => {
        setUser(user)
        netlifyIdentity.close()
    })
    netlifyIdentity.on('logout', () => {
        setUser({})
        netlifyIdentity.close()
    })

    useEffect(() => {
        const user = netlifyIdentity.currentUser() || {}
        setUser(user)
    }, [])

    const [user, setUser] = useState({})

    const openLoginModal = async () => {
        netlifyIdentity.open()
        const options = {
            userId: true
        }
        console.log(await functionCaller(`db?action=find&options=${JSON.stringify(options)}`, netlifyIdentity.currentUser, {}));

    }

    const isEmpty = (obj: object) => {
        return Object.keys(obj).length === 0;
    }

    return (
        <div className="App">
            {isEmpty(user) ?
                (
                    <button onClick={openLoginModal}>Log ind for at fortsætte</button>
                ) : (
                    <p onClick={openLoginModal}>Velkommen</p>
                )}
        </div>
    );
}

export default App;
