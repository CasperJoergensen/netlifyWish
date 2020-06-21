import React from "react";
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage";

function Header() {
    return (
        <Router>
            <nav className={''} id={"navbar"}>
                <NavLink className={''} exact activeClassName={''} to="/">
                    Portfolio
                </NavLink>
                <NavLink className={''} activeClassName={''} to="/about">
                    About
                </NavLink>
                <NavLink className={''} activeClassName={''} to="/contact">
                    Contact
                </NavLink>
            </nav>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                {/*<Route exact path="/about" component={About} />*/}
                {/*<Route exact path="/contact" component={Contact} />*/}
                {/*<Route path={"/project/:id"} component={Project} />*/}
            </Switch>
        </Router>
    );
}

export default Header;
