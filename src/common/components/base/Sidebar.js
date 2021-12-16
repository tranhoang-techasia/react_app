import Icon from '@mdi/react';
import { mdiAccount , mdiViewDashboardOutline} from '@mdi/js';
import {Link} from "react-router-dom";

const Sidebar = (props) => {
    const style = {width : '280px', height : "100vh"};
    const navData = [
        {"icon" : mdiAccount, "title" : "User", "link" : "/home"},
        {"icon" : mdiViewDashboardOutline, "title" : "Dashboard", "link" : "/dashboard"},
    ];

    const navRender = navData.map((item) => <li key={item.title} className="nav-item text-light">
        <Link to={item.link} className="nav-link text-light ml-3">  <Icon path={item.icon} size="30px" /> {item.title} </Link>
        </li>);

    return (<div className={`${props.isShow ? "d-flex" : "d-none"} flex-column flex-shrink-0 p-3 text-white bg-dark`} style={style}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="/bootstrap"></use></svg>
            <span className="fs-4">Home</span>
        </a>
        <hr/>
            <ul className="nav nav-pills flex-column mb-auto"> {navRender} </ul>
            <hr />
        
    </div>)
}

export default Sidebar;