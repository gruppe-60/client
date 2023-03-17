import React from "react";
import "./Footer.css";

const Footer = () => {

    return (
        <>
            <h1>Footer</h1>
            <div className='main-footer'>
                <div  >
                    <div className='row'>
                        {/*  spalte1 */}
                        <div className='col'>
                            <h4>SmartBuy GmbH</h4>
                            <ul className=''>
                                <li >030-123-456</li>
                                <li >Berlin, Germany</li>
                                <li >Kudamm 20, 10000 Berlin</li>
                            </ul>
                        </div>
                        {/* spalte2 */}
                        <div className='col' >
                            <h4>Teams</h4>
                            <ul className=''>
                                <li>Elham </li>
                                <li>Eduard</li>
                                <li>Sebastian</li>
                                <li>Tenaw</li>
                            </ul>
                        </div>
                        {/*   spalte3 */}
                        <div className='col' >
                            <h4>About</h4>
                            <ul className=''>
                                <li>SmartBuy App</li>
                                <li>Shopping list</li>
                                <li>Einkaufsliste-App</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <p className='' >
                            &copy;{new Date().getFullYear()} SmartBuy GmbH  |  All rights reserved | Terms of Service  | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer;