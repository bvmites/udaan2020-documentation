import React, { useState } from 'react';

import { userService, authenticationService } from '@/_services';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            receipt: [{name:"",phone:"",event:""}],
        };

    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        let {receipt}=this.state;
        const handleSubmit = (e) => {
            e.preventDefault();
        };
        const addParticipant = (e) => {
            this.setState((prevState) => ({
                receipt: [...prevState.receipt, {name:"", phone:"",event:""}],
            }));
        };

        const handleChange = (e) => {
            if (["name", "phone","event"].includes(e.target.className) ) {
                let receipt = [...this.state.receipt]
                receipt[e.target.dataset.id][e.target.className] = e.target.value
                this.setState({ receipt }, () => console.log(this.state.receipt))
            } else {
                this.setState({ [e.target.name]: e.target.value })
            }
        }
        return (
            <div>
                <p>Your role is: <strong>Data Entry Operator</strong>. You can add participants</p>
                <p>Try not to make mistakes.</p>
                <Form onChange={handleChange} onSubmit={handleSubmit} >
                    <FormGroup >
                    <Label htmlFor="Receipt Number">Receipt Number</Label>
                    <Input type="text" name="Receipt Number" id="rnumber" />

                    {
                        receipt.map((val, idx)=> {
                            let receiptId = `receipt-${idx}`, nameId = `age-${idx}`, phoneId = `phone-${idx}` , eventId = `event-${idx}`
                            return (
                                <div key={idx}>
                                    <Label htmlFor={receiptId}>{`Participant no #${idx + 1}`}</Label>
                                    <Input
                                        type="text"
                                        name={nameId}
                                        data-id={idx}
                                        id={receiptId}
                                        className="name"
                                    />
                                    <Label htmlFor={phoneId}>Phone</Label>
                                    <Input
                                        type="int"
                                        name={phoneId}
                                        data-id={idx}
                                        id={phoneId}
                                        className="phone"
                                    />
                                    <Label htmlFor={eventId}>Event</Label>
                                    <Input
                                        type="select"
                                        name={phoneId}
                                        data-id={idx}
                                        id={phoneId}
                                        className="phone"
                                    />
                                </div>
                            )
                        })
                    }
                    <Button onClick={addParticipant} className="">Add New Participant</Button>
                    <input type="submit" value="Submit" />
                    </FormGroup>
                </Form>
            </div>
        );
    }



}

export { HomePage };