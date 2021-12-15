import Navbar from "../base/Navbar";
import Sidebar from "../base/Sidebar";

const  MainLayout = (props) => {
    return (
        <main className="d-flex">
            <Sidebar /> 

            <div className="content w-100">
                <Navbar />  
                <div className="content-body px-3">
                    {props.children}
                </div>
            </div>
        </main>

    );
}


export default MainLayout;