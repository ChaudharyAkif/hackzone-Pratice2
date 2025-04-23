import { Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/Auth'

const Navbar = () => {
    const { isAuth,handleLogout } = useAuthContext()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Link</a>
                            </li>                 </ul>
                        <div className="d-flex gap-2      ">

                            {/* {!isAuth */}

                                {/* ? <> */}
                                    <Link to={"/auth/login"}>
                                        <button className="btn btn-outline-info" >Login</button>
                                    </Link>
                                    <Link to={"/auth/register"}>
                                        <button className="btn btn-outline-success" >Register</button>
                                    </Link>
                                {/* </> */}
                                {/* : <> */}
                                    {/* <Link to={"/auth/dashboard"}>
                                        <button className="btn btn-outline-warning" >Dashboard</button>
                                    </Link>
                                        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button> */}
                                {/* </> */}
                            {/* } */}


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
