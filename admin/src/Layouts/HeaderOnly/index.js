import Topbar from "~/scenes/global/Topbar/Topbar";

function HeaderOnly({children}) {
    return (  
        <div className="HeaderOnly"> 
            <Topbar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;