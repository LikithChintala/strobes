import React, { useState } from 'react'
import { Form, SelectItem, Button, TextInput, FluidForm, InlineNotification, NotificationActionButton } from 'carbon-components-react';
import ArrowRight32 from '@carbon/icons-react/lib/arrow--right/32';
import ArrowLeft32 from '@carbon/icons-react/lib/arrow--left/32';
import ArrowLeft24 from '@carbon/icons-react/lib/arrow--left/24';

import Email32 from '@carbon/icons-react/lib/email/32';

import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";


import { Auth } from 'aws-amplify';

import { actionTypes } from "../../reducers/userReducer";
import { useStateValue } from '../../StateProvider'
import { useHistory } from "react-router-dom";

interface RegisterProps {
    buttonText: string
}
export default function Loginform({ buttonText }: RegisterProps) {

    const [state, dispatch] = useStateValue()

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [company, setCompany] = useState("")
    const [step, setStep] = useState(0)
    const history = useHistory();


    // const confirmSignIn = () => {
    //     Auth.confirmSignIn(email)
    //     .then(() => console.log('successfully confirmed signed in'))
    //     .catch((err) => console.log(`Error confirming sign up - ${ err }`))
    // }

    const signIn = () => {
        Auth.signIn({
            username: email,
            password: password
        })
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result
                })
                history.push("/dashboard");
            }
            )
            .catch((err) => {
                setError(true)
                console.log(`Error signing in: ${err}`)
            }
            )
    }
    const GooglesignIn = () => {
        Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google
        })
    }
    switch (step) {
        case 0:
            return (
                <div>
                    <Form onSubmit={e => e.preventDefault()}>
                        <div className="bx--grid--full-width">
                            <div className="bx--row input-row__gap">
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <h6 className="landing-page__heading" style={{ marginBottom: "0.5rem" }}>
                                        Enter Your Organisation
                                     </h6>
                                    <FluidForm>
                                        <TextInput
                                            helperText="Optional helper text"
                                            id="name"
                                            invalidText="A valid value is required"
                                            labelText="Organisation Name"
                                            placeholder="company"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}

                                        /> </FluidForm>
                                </div>
                            </div>
                            <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <Button kind="primary" className="button__fullwidth" renderIcon={ArrowRight32} onClick={() => {
                                        if (company !== "") {

                                            setStep(step + 1)
                                            setError(false)

                                        } else {
                                            setError(!error)
                                        }
                                    }
                                    }>Continue</Button>
                                    {
                                        error ?
                                            <InlineNotification
                                                title={"Error!"}
                                                kind={"error"}
                                                actions={<NotificationActionButton onClick={() => setError(!error)}>close</NotificationActionButton>}
                                                subtitle={"Enter Organization Details"}
                                                hideCloseButton
                                            />
                                            : null
                                    }
                                </div>
                            </div>

                        </div>
                    </Form>


                </div>
            )
        case 1:
            return (
                <div>
                    <div className={"icon_text"} style={{ marginBottom: "1rem", cursor: "pointer" }} onClick={() => setStep(step - 1)}>
                        <ArrowLeft24 className="my-custom-class" />{company}
                    </div>
                    <div className="bx--grid bx--grid--condensed">
                        <div className="bx--row input-row__gap">
                            <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                <Button kind="tertiary" className="button__fullwidth" renderIcon={Email32} onClick={() => setStep(step + 1)}>Login with email</Button>

                            </div>
                        </div>

                        <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                            <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">

                                <Button kind="tertiary" className="button__fullwidth" renderIcon={ArrowRight32} onClick={GooglesignIn}>Login with google</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 2:
            return (
                <div>
                    <Form>
                        <div className="bx--grid bx--grid--condensed">
                            <div className="bx--row input-row__gap">
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <h6 className="landing-page__heading" style={{ marginBottom: "0.5rem" }}>
                                        Enter Your Strobes Id
                                     </h6>
                                    <FluidForm>
                                        <TextInput
                                            helperText="Optional helper text"
                                            id="name"
                                            invalidText="A valid value is required"
                                            labelText="Email"
                                            placeholder="Placeholder text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}

                                        /> </FluidForm>
                                </div>
                            </div>
                            <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <Button kind="primary" className="button__fullwidth" renderIcon={ArrowRight32} onClick={() => {
                                        if (email !== "") {

                                            setStep(step + 1)
                                            setError(false)

                                        } else {
                                            setError(!error)
                                        }
                                    }
                                    }>Continue</Button>

                                    {
                                        error ?
                                            <InlineNotification
                                                title={"Error!"}
                                                kind={"error"}
                                                actions={<NotificationActionButton onClick={() => setError(!error)}>close</NotificationActionButton>}
                                                subtitle={"Enter Email"}
                                                hideCloseButton
                                            />
                                            : null
                                    }
                                </div>

                            </div>

                        </div>
                    </Form>
                </div>
            )
        case 3:
            return (
                <div>
                    <div className={"icon_text"} style={{ marginBottom: "1rem", cursor: "pointer" }} onClick={() => setStep(step - 1)}>
                        <ArrowLeft24 className="my-custom-class" />{email}
                    </div>
                    <Form>
                        <div className="bx--grid bx--grid--condensed">
                            <div className="bx--row input-row__gap">
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <FluidForm>
                                        <TextInput.PasswordInput
                                            helperText="Optional helper text"
                                            hidePasswordLabel="Hide password"
                                            id="test2"
                                            invalidText="A valid value is required"
                                            labelText="Password"
                                            placeholder="Placeholder text"
                                            onChange={(e) => setPassword(e.target.value)}
                                            showPasswordLabel="Show password" />
                                    </FluidForm>
                                </div>
                            </div>
                            <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <Button kind="primary" className="button__fullwidth" renderIcon={ArrowRight32} onClick={signIn}>Continue</Button>
                                    {
                                        error ?
                                            <InlineNotification
                                                title={"Error!"}
                                                kind={"error"}
                                                actions={<NotificationActionButton onClick={() => setError(!error)}>close</NotificationActionButton>}
                                                subtitle={"Username or password is incorrect"}
                                                hideCloseButton
                                            />
                                            : null
                                    }
                                </div>
                            </div>

                        </div>
                    </Form>
                </div>
            )
        default:
            return (
                <div>
                    <Form>
                        <div className="bx--grid bx--grid--condensed">
                            <div className="bx--row input-row__gap">
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <h6 className="landing-page__heading">
                                        Enter Your Organisation
                                     </h6>
                                    <FluidForm>
                                        <TextInput
                                            helperText="Optional helper text"
                                            id="name"
                                            invalidText="A valid value is required"
                                            labelText="Organisation Name"
                                            placeholder="Placeholder text"
                                            onChange={(e) => setCompany(e.target.value)}

                                        /> </FluidForm>
                                </div>
                            </div>
                            <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                                <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                                    <Button kind="primary" className="button__fullwidth" renderIcon={ArrowRight32} onClick={() => setStep(step + 1)}>Continue</Button>
                                </div>
                            </div>

                        </div> </Form>
                </div>
            )
    }

}


