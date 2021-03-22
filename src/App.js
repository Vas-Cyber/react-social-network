import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import FriendsOnline from "./components/FriendsOnline/FriendsOnline";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <DialogsContainer/>
                               </React.Suspense>
                           }}/>

                    {/*<Route path='/login'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <Login/>
                               </React.Suspense>
                           }}/>*/}

                    <Route path='/profile/:userId?'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }}/>

                    <Route path='/news'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }}/>

                    {/*<Route path='/users'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <UsersContainer/>
                               </React.Suspense>
                           }}/>*/}

                    <Route path='/music'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <DialogsContainer/>
                               </React.Suspense>
                           }}/>

                    <Route path='/settings'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }}/>
                    {/*<Route path='/friends'
                           render={() => <FriendsOnline state={props._state.sidebar}/>}/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp