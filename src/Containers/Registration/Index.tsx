import React from 'react'

import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import RegistrationForm from './Registerform'
export default function Index() {
    return (
        <div>
            <div className="bx--row landing-page__r2">
                <div className="bx--col-md-4 bx--col-lg-4">7/16</div>
                <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-11">
                    <h1 className="landing-page__heading">
                        Register
                    </h1>
                    <RegistrationForm buttonText={"Register"}/>

                    {/* <Breadcrumb noTrailingSlash>
                        <BreadcrumbItem>
                            ddd <a href="/">Getting started</a>
                        </BreadcrumbItem>
                    </Breadcrumb> */}
                </div>
            </div>
        </div>
    )
}
