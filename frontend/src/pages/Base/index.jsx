import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import Navbar from "../../components/Navbar/index.jsx";
import {Link, Outlet} from "react-router-dom";

export const Base = () => {

    return (
        <div>
            <header className="py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="h1 link-underline link-underline-opacity-0" to={"/"}>
                        CRUD
                    </Link>
                    <Navbar/>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer className="footer">
                <p className="text-center">&copy; 2024 - Universidade Federal do Ceará</p>
            </footer>
        </div>
    )
}



