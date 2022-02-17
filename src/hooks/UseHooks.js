import { NavLink as Link, Outlet } from "react-router-dom";


function Hooks(){
    return(
        <div className="hooks" >
            <nav>
                <ul style={{display: 'flex', padding: '10px 20px', listStyle: 'none',  backgroundColor: '#0061FF'}}>
                    <li>
                        <Link activeclassname="active" to="/hooks/usestate">UseState</Link>
                    </li>
                    <li>
                        <Link activeclassname="active" to="/hooks/useeffect">UseEffect</Link>
                    </li>
                    <li>
                        <Link activeclassname="active" to="/hooks/useref">UseRef</Link>
                    </li>
                    <li>
                        <Link activeclassname="active" to="/hooks/usememo">UseMemo</Link>
                    </li>
                    <li>
                        <Link activeclassname="active" to="/hooks/usecallback">UseCallback</Link>
                    </li>
                    <li>
                        <Link activeclassname="active" to="/hooks/usecontext">UseContext</Link>
                    </li>
                    <li>
                        <Link activeclassname="active" to="/hooks/customhooks">Custom Hooks</Link>
                    </li>
                </ul>
            </nav>
            <div style={{fontSize: '22px', padding: '20px'}}>
                <div>Another helpful information here</div>
                <div>--------------------</div>
                <Outlet />
            </div>
            
        </div>
    )
}

export default Hooks;