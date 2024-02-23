import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../redux/slices/adminSlice'
import { Link } from "react-router-dom"
const AdminSidebar = () => {
    const dispatch = useDispatch()
    const { show } = useSelector(state => state.admin)
    return <>
        <div
            style={{ width: "200px" }}
            // className={`offcanvas offcanvas-start ${show && "show"} `}
            className={`offcanvas offcanvas-start  show `}
            id="sidebar">
            <div style={{ height: "56px" }} className="offcanvas-header bg-primary">
                <h5 className="offcanvas-title text-light" id="sidebar">Admin Panel</h5>

            </div>
            <div className="offcanvas-body p-0 d-flex flex-column justify-content-between bg-light">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong><i className="bi bi-gear"></i> Admin</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='py-2'> <Link className='nav-link' to="/admin/packages"> <i className="bi bi-star"></i> Packages</Link> </div>
                                <div className='py-2'> <Link className='nav-link' to="/admin/users"> <i className="bi bi-star"></i> Customers</Link> </div>
                                <div className='py-2'> <Link className='nav-link' to="/admin/coupons"> <i className="bi bi-star"></i> Coupons</Link> </div>
                                <div className='py-2'> <Link className='nav-link' to="/admin/account"> <i className="bi bi-star"></i> Account</Link> </div>
                                <div className='py-2'> <Link className='nav-link' to="/admin/notification"> <i className="bi bi-star"></i> Notification</Link> </div>
                            </div>
                        </div><menu></menu>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong> <i className="bi bi-gear"></i> User</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='py-2'> <Link className='nav-link' to="/admin/reviews"> <i className="bi bi-star"></i> Reviews</Link> </div>
                                <div className='py-2'> <Link className='nav-link' to="/admin/contacts"> <i className="bi bi-person-lines-fill"></i> Contacts</Link> </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong><i className="bi bi-gear"></i> Bookings</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='py-2'> <Link className='nav-link' to="/admin/orders"> <i className="bi bi-cart"></i> Orders</Link> </div>
                                <div className='py-2'> <Link className='nav-link'> <i className="bi bi-star"></i> Payments</Link> </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong><i className="bi bi-gear"></i> CMS </strong>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='py-2'> <Link className='nav-link' to="/admin/cms"> <i class="bi bi-file-earmark-bar-graph"></i> ADD CMS</Link> </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour ">
                                <strong><i className="bi bi-gear"></i> Home Slide </strong>
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='py-2'> <Link className='nav-link' to="/admin/carousel"> <i class="bi bi-file-earmark-bar-graph"></i> ADD Slides</Link> </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='d-flex justify-content-around gap-3 fs-5  bg-primary text-light p-2'>
                    <i className="bi bi-gear"></i>
                    <i className="bi bi-gear"></i>
                    <i className="bi bi-trash"></i>
                </div>
            </div>
        </div>
    </>
}

export default AdminSidebar
