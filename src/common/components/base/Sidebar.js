import Icon from '@mdi/react';
import { mdiAccount , mdiViewDashboardOutline} from '@mdi/js';


const Sidebar = (props) => {
    const style = {width : '280px', height : "100vh"};
    const navData = [
        {"icon" : mdiAccount, "title" : "User"},
        {"icon" : mdiViewDashboardOutline, "title" : "Dashboard"},
    ];

    const navRender = navData.map((item) => <li key={item.title} className="nav-item text-light"><a href="/" className="nav-link text-light ml-3"><Icon path={item.icon} size="30px" /> {item.title}</a></li>);

    return (<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={style}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="/bootstrap"></use></svg>
            <span className="fs-4">Home</span>
        </a>
        <hr/>
            <ul className="nav nav-pills flex-column mb-auto"> {navRender} </ul>
            <hr />
            <div className="dropdown">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
                    <li><a className="dropdown-item" href="/">New project...</a></li>
                    <li><a className="dropdown-item" href="/">Settings</a></li>
                    <li><a className="dropdown-item" href="/">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Sign out</a></li>
                </ul>
            </div>
    </div>)
}

export default Sidebar;