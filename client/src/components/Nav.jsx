import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../StateContextProvider";

function Nav({ }) {
    const { user, signOutUser } = useStateContext();

    const isLoggedIn = user._id;
    const navigate = useNavigate();

    async function signOutClick() {
        await signOutUser();
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Ouroboros</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                        </li>

                        {isLoggedIn &&
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/tickets">Tickets</NavLink>
                            </li>
                        }
                    </ul>

                    <ul className="d-flex navbar-nav mb-2 mb-md-0">
                        {isLoggedIn ?
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/profile">
                                        <FontAwesomeIcon icon={['fas', 'user-circle']} className="me-2" />
                                        <span>{user.name}</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={void (0)} onClick={signOutClick} >
                                        <FontAwesomeIcon icon={['fas', 'sign-out']} className="me-2" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </> :
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        <FontAwesomeIcon icon={['fas', 'sign-in']} className="me-2" />
                                        <span>Sign In</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;