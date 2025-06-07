import { useContext } from 'react';
import { Link, NavLink, useNavigate, type NavigateFunction } from 'react-router';
import { AuthContext, type AuthContexInterface } from '../../../auth';

export const Navbar = () => {

    const navigate : NavigateFunction = useNavigate();
    const { logout, state } = useContext(AuthContext) as AuthContexInterface;
    const onLogout = () => {
        logout();
        navigate('/auth/login', {
            replace: true ///Borra del Historial la ultima navegación.
                        /// El problema es que solo quita el ultimo y no todos
                        /// los url de la app. Osea, mucho sentido no tiene.
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to=""
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2
                            d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span   className='nav-item nav-link text-primary'
                        >{state.user?.name}
                    </span>
                    <button className='nav-item nav-link btn'
                            onClick={onLogout}
                            >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}