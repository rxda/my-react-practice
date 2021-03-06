/** @jsx jsx */
import React from "react"
import PhotoContextProvider from "./context/PhotoContext";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import {css, Global, jsx} from "@emotion/react";
import {appCss, indexCss} from "./css";

export const App = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, history: string[], searchInput: string) => {
        e.preventDefault()
        e.currentTarget.reset()
        const url = `/search/${searchInput}`
        history.push(url)
    }

    return (
        <PhotoContextProvider>
            <HashRouter basename="/SnapScout">
                <div className="container">
                    <Global styles={css`
                      ${appCss};
                      ${indexCss};
                    `}/>
                    <Route render={
                        props => (
                            <Header handleSubmit={handleSubmit} history={props.history}/>
                        )
                    }/>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/mountain"/>}/>
                        <Route path="/mountain" render={() => <Item searchTerm="moutain"/>}/>
                        <Route path="/beach" render={() => <Item searchTerm="beach"/>}/>
                        <Route path="/bird" render={() => <Item searchTerm="bird"/>}/>
                        <Route path="/food" render={() => <Item searchTerm="food"/>}/>

                        <Route
                            path="/search/:searchInput"
                            render={props => (
                                <Search searchTerm={props.match.params.searchInput}/>
                            )}
                        />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        </PhotoContextProvider>
    )
}
