import React, { useState } from 'react'
import { Form, SelectItem, Button, TextInput, FluidForm, Select } from 'carbon-components-react';
import ArrowRight32 from '@carbon/icons-react/lib/arrow--right/32';
import ArrowLeft32 from '@carbon/icons-react/lib/arrow--left/32';
import ArrowLeft24 from '@carbon/icons-react/lib/arrow--left/24';

import Email32 from '@carbon/icons-react/lib/email/32';

import { Auth } from 'aws-amplify';

interface RegisterProps {
    buttonText: string
}
export default function Loginform({ buttonText }: RegisterProps) {

    const [name, setName] = useState("")
    const [middle_name, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [company, setCompany] = useState("")
    const [step, setStep] = useState(0)


    const signIn = () => {
        Auth.signIn({
            username: email,
            password: password
        })
        .then(() => console.log('successfully signed in'))
        .catch((err) => console.log(`Error signing in: ${ err }`))
    }

    switch (step) {
        case 0:
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
                                <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                                    <Button kind="primary" renderIcon={ArrowRight32} onClick={() => setStep(step + 1)}>Continue</Button>
                                </div>
                            </div>

                        </div> </Form>
                </div>
            )
        case 1:
            return (
                <div>
                     <div className={"icon_text"}>
                    <ArrowLeft24 className="my-custom-class"/>{company}
                    </div>
                    <div className="bx--grid bx--grid--condensed">
                        <div className="bx--row input-row__gap">
                            <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                                <Button kind="tertiary" renderIcon={Email32} onClick={() => setStep(step + 1)}>Login with email</Button>

                            </div>
                        </div>
                        <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                            <Button kind="tertiary" renderIcon={ArrowRight32} onClick={signIn}>Login with google</Button>
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
                                    <h6 className="landing-page__heading">
                                        Enter Your Strobes Id
                                     </h6>
                                    <FluidForm>
                                        <TextInput
                                            helperText="Optional helper text"
                                            id="name"
                                            invalidText="A valid value is required"
                                            labelText="Email"
                                            placeholder="Placeholder text"
                                            onChange={(e) => setEmail(e.target.value)}

                                        /> </FluidForm>
                                </div>
                            </div>
                            <div className="bx--row input-row__gap" style={{ marginTop: "1rem" }}>
                                <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                                    <Button kind="primary" renderIcon={ArrowRight32} onClick={() => setStep(step + 1)}>Continue</Button>
                                </div>
                            </div>

                        </div>
                    </Form>
                </div>
            )
        case 3:
            return (
                <div>
                     <div className={"icon_text"}>
                        <ArrowLeft24 className="my-custom-class"/>{email}
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
                                <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                                    <Button kind="primary" renderIcon={ArrowRight32} onClick={signIn}>Continue</Button>
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
                                <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                                    <Button kind="primary" renderIcon={ArrowRight32} onClick={() => setStep(step + 1)}>Continue</Button>
                                </div>
                            </div>

                        </div> </Form>
                </div>
            )
    }

}


