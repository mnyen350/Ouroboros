import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout({ isHalf }) {
    return (
        <>
            <Nav {...{}} />
            <main className="min-vh-100 d-flex flex-column">
                <div className="row g-0 flex-grow-1">
                    {isHalf ?
                        <>
                            <div className="col-6 bg-leaf">
                            </div>
                            <div className="col-6 bg-body-tertiary">
                                <div className="p-5">
                                    <Outlet />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="col-12 bg-body-tertiary">
                                <Outlet />
                            </div>
                        </>
                    }
                </div>
            </main>
        </>
    );
}

export default Layout;