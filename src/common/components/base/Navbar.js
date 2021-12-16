import Icon from '@mdi/react';
import { mdiMenu} from '@mdi/js';

const Navbar = (props) => {
    return (
        <nav className="navbar d-flex bg-light px-3">
            <Icon className="c-pointer" onClick={props.onClickNavIcon} size="30px" path={mdiMenu}/>
            Hello nav
        </nav>
    )
}

export default Navbar;