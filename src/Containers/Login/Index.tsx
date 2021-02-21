
import React, { useEffect, useState } from 'react'
import { actionTypes } from "../../reducers/userReducer";
import { useStateValue } from '../../StateProvider'
import { useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import LoginForm from './Loginform'
export default function Index() {

    const [state, dispatch] = useStateValue()

    const [user, setUser] = useState(state.user)

    const history = useHistory();

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((data) => {
            //   updateIsLogged(true);
            //   setUserEmail(data.attributes.email);
            dispatch({
                type: actionTypes.SET_USER,
                user: data
            })
            setUser(data)
            history.push("/dashboard");
        })
            .catch((err) => {
                history.push("/login");
            })

    }, [user]);

    return (
        <div>
            <div className="bx--row landing-page__r2">
                <div className="bx--col-md-4 bx--col-lg-4 side__menu" ></div>
                <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-11">
                    <h1 className="landing-page__heading" style={{ marginTop: '7rem' }}>
                        Login
                    </h1>
                    <div className="icon_text" style={{ color: 'black', marginBottom: '5rem' }}>
                        Don’t have an account?
                        <Breadcrumb noTrailingSlash>
                            <BreadcrumbItem href="/register">Register</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <LoginForm buttonText={"Login"} />

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
