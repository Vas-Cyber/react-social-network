import header from './Header.module.css'
import logo from "../../Assets/Images/logo.png.png"
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return (
        <header className={header.header}>
        <img src='logo'/>
        <div className={header.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    );
}

export default Header;