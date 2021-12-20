import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../reducers/authSlice";
import {Navigate} from "react-router-dom";

const Logout = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    dispatch(logout());
    return (<Navigate to="/login"/>);

}

export default Logout;