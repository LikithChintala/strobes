import React, { useState } from 'react'
import { Form, SelectItem, Button, TextInput, FluidForm, Select } from 'carbon-components-react';
import ArrowRight32 from '@carbon/icons-react/lib/arrow--right/32';

import { Auth } from 'aws-amplify';

interface RegisterProps {
    buttonText: string
}
export default function Registerform({ buttonText }: RegisterProps) {

    const [name, setName] = useState("")
    const [middle_name, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")


    const signUp = () => {
        // const { username, password, email, phone_number } = this.state;  
        Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email: email,
                name: name,
                middle_name: middle_name,
                gender: gender
            }
        })
            .then(() => {
                console.log('Successfully signed up');
            })
            .catch((err) => console.log(`Error signing up: ${err}`))
    }



    return (
        <div>
            <Form>
                <div className="bx--grid ">
                    <div className="bx--row input-row__gap">
                        <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                            <FluidForm>
                                <TextInput
                                    helperText="Optional helper text"
                                    id="name"
                                    invalidText="A valid value is required"
                                    labelText="First Name"
                                    placeholder="Placeholder text"
                                    onChange={(e) => setName(e.target.value)}

                                /> </FluidForm>
                        </div>
                        <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                            <FluidForm>
                                <TextInput
                                    helperText="Optional helper text"
                                    id="test2"
                                    invalidText="A valid value is required"
                                    labelText="Last Name"
                                    placeholder="Placeholder text"
                                    onChange={(e) => setMiddleName(e.target.value)}

                                /> </FluidForm>
                        </div>
                    </div>

                    <div className="bx--row input-row__gap">
                        <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                            <FluidForm>
                                <TextInput
                                    helperText="Optional helper text"
                                    id="test2"
                                    invalidText="A valid value is required"
                                    labelText="Company"
                                    placeholder="Placeholder text"
                                    onChange={(e) => setEmail(e.target.value)}
                                /> </FluidForm>
                        </div>
                        <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                            <FluidForm>
                                <Select
                                    style={{    minHeight: "4rem",padding: "2rem 1rem 0.8125rem"}}
                                    defaultValue="placeholder-item"
                                    id="select-1"
                                    invalidText="This is an invalid error message."
                                    labelText="I am a"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <SelectItem text="Option 1" value="option-1" />
                                    <SelectItem text="Option 2" value="option-2" />
                                    <SelectItem text="Option 3" value="option-3" />
                                </Select>
                            </FluidForm>
                        </div>
                    </div>

                    <div className="bx--row input-row__gap">
                        <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                            <FluidForm>
                                <TextInput
                                    helperText="Optional helper text"
                                    id="test2"
                                    invalidText="A valid value is required"
                                    labelText="Eamil"
                                    placeholder="Placeholder text" 
                                    onChange={(e) => setEmail(e.target.value)}

                                    />
                            </FluidForm>
                        </div>
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
                            <Button kind="primary" renderIcon={ArrowRight32} onClick={signUp}>{buttonText}</Button>
                        </div>
                    </div>

                </div> </Form>
        </div>
    )
}


