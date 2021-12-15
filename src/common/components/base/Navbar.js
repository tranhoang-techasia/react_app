import Icon from '@mdi/react';
import { mdiAccount} from '@mdi/js';

const Navbar = (props) => {
    return (
        <nav className="navbar d-flex bg-light px-3">
            <Icon size="50px" path={mdiAccount}/>
            Hello nav
        </nav>
    )
}

export default Navbar;