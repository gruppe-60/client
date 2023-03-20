import React from "react";
import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer">
            <div className='main-footer'>
                    <div className='row'>
                        {/*  spalte1 */}
                        <div className='col-md-4'>
                            <h4>SmartBuy GmbH</h4>
                            <ul className='one'>
                                <li>030-123-456</li>
                                <li>Kudamm 20</li>
                                <li>10000 Berlin</li>
                                <li>Germany</li>
                            </ul>
                        </div>
                        {/* spalte2 */}
                        <div className='col-md-4' >
                            <h4>Teams</h4>
                            <ul className='two'>
                                <li>Elham </li>
                                <li>Eduard</li>
                                <li>Sebastian</li>
                                <li>Tenaw</li>
                            </ul>
                        </div>
                        {/*   spalte3 */}
                        <div className='col-md-4' >
                            <h4>About</h4>
                            <ul className='three'>
                                <li>SmartBuy App</li>
                                <li>Shopping list</li>
                                <li>Einkaufsliste-App</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row2'>
                        <p className='col-md-12' >
                            &copy;{new Date().getFullYear()} SmartBuy GmbH  |  All rights reserved | Terms of Service  | Privacy
                        </p>
                    </div>
                </div>
            </div>
    )

}

export default Footer;