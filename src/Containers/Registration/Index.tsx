import React from 'react'

import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import RegistrationForm from './Registerform'
export default function Index() {
    return (
        <div>
            <div className="bx--row landing-page__r2">
                <div className="bx--col-md-4 bx--col-lg-3 side__menu"></div>
                <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-11">
                    <h1 className="landing-page__heading" style={{marginTop:'7rem'}}>
                        Register
                    </h1>
                    <div className="icon_text" style={{color:'black',marginBottom:'5rem'}}>
                        Already have an account ?
                        <Breadcrumb noTrailingSlash>
                            <BreadcrumbItem href="/login">Log in</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <RegistrationForm buttonText={"Continue to your free account"} />


                </div>
            </div>
        </div>
    )
}
