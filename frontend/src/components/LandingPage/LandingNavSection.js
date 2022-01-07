import LoginFormModal from "../LoginFormModal"
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';



const LandingNavSection = () => {

    const dispatch = useDispatch()

    const login = (e) => {

        const loginInfo = {
            credential: 'Demo-lition',
            password: 'password'
        }

        e.preventDefault();
        dispatch(sessionActions.login(loginInfo));
    }


    return (
        <div className="landingNavSection">

            <LoginFormModal />
            <NavLink to="/signup">Sign Up</NavLink>
            <button onClick={login}>Demo User</button>
        </div>
    )
}


export default LandingNavSection