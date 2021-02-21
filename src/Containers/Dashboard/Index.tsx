import React, { useEffect, useState } from 'react'


import { actionTypes } from "../../reducers/userReducer";
import { useStateValue } from '../../StateProvider'
import { useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify';

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
        })
            .catch((err) => {
                history.push("/login");
            })

    }, [user]);

    if (user !== null) {


        return (
            <div>
                <div className="bx--row landing-page__r2">
                    <div className="bx--col-md-4 bx--col-lg-3 side__menu"></div>
                    <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-11">
                        <h1 className="landing-page__heading" style={{ marginTop: '7rem' }}>
                            Welcome {user.attributes.name}  {user.attributes.middle_name}
                        </h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

}
