import { NavLink } from "react-router-dom"
import App from "../pages/App"
import './navBar.css'


export default function NavBar() {
    return (
        <div id="navBar">
            <NavLink to={'*'} className="navBarIcons">Home</NavLink>
            <NavLink to={'/library'} className="navBarIcons">Library</NavLink>
            <NavLink to={'/nowPlaying'} className="navBarIcons">Now playing</NavLink>
            <NavLink className="navBarIcons">
                <input type="text" placeholder="Search" />
                <div>
                    <img src="src/img/icons8-search-60.png"/>
                </div>
            </NavLink>
        </div>
    )
}