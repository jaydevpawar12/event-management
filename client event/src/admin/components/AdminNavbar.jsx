import React from 'react'
import { useSelector } from 'react-redux'
import { useLogoutUserMutation } from '../../redux/api/authApi'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    const { show } = useSelector(state => state.admin)
    const [logout] = useLogoutUserMutation()
    return <>
        <nav style={{ marginLeft: `${show ? "199px" : "0px"} ` }} className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" >Home</Link>

                    </div>
                    <div className='text-end ms-auto'>
                        <button className='btn btn-danger' onClick={logout} ><i className='bi bi-arrow-down-left'></i>Logout</button>
                    </div>
                </div>
            </div>
        </nav>

    </>
}

export default AdminNavbar