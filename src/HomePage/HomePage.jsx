import React, { useState } from 'react';

import { userService, authenticationService } from '@/_services';
import { Button, Form, FormGroup, Label, Input, FormText ,Container, Row, Col , Table } from 'reactstrap';
import { AvField, } from 'availity-reactstrap-validation';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            receipt: [{name:"",phone:"",event:"",date:"",branch:"",total:""}],
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
        return (
            <div>
                <p>Your role is: <strong>Documentation Team</strong>. You can add participants</p>
                <Container fluid={true}>
                <Form  onSubmit={handleSubmit} >
                    <FormGroup>
                        <Row>
                            <Col sm="4">
                                <Label htmlFor="Receipt Number">R No:</Label>
                                <Input type="text" name="Receipt Number" id="rnumber" />
                            </Col>
                            <Col xs="6" sm="4">
                                <Label htmlFor="date">Date:</Label>
                                <Input type="date" name="date" id="date"/>
                            </Col>
                            <Col xs="6" sm="4">
                                <Label htmlFor="phone">Phone:</Label>
                                <Input type="phone" name="phone" id="phone"/>
                            </Col>
                            <Col sm="4">
                            <Label htmlFor="email">Email:</Label>
                            <Input type="email" name="email" id="email"/>
                            </Col>
                            <Col sm="4">
                                <Label htmlFor="name">Name:</Label>
                                <Input type="text" name="name" id="name" />
                            </Col>
                            <Col xs="auto">
                                <Label htmlFor="branch">Branch Name:</Label>
                                <Input type="select" name="branch" id="branch">
                                    <option>EC</option>
                                    <option>EL</option>
                                    <option>IT</option>
                                    <option>PR</option>
                                    <option>CP</option>
                                    <option>CI</option>
                                    <option>Other</option>
                                </Input>
                            </Col>
                            <Col xs="auto">
                                <Label htmlFor="year">Year</Label>
                                <Input type="select" name="year" id="year">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>

                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <p>Select The Events the Participant has enrolled in</p>
                        </Row>
                        <Row>
                            <Table bordered striped>
                                <thead>
                                <tr align="center">
                                    <th >#</th>
                                    <th >CE</th>
                                    <th >CP/IT</th>
                                    <th >EC/EL</th>
                                    <th >EE</th>
                                    <th >ME/PE</th>
                                    <th >NT</th>
                                    <th >CL</th>
                                    <th >WS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr align="center">
                                    <th scope="row">1</th>

                                    <td> <Input type="checkbox" id="CE1"/></td>
                                    <td> <Input type="checkbox" id="CP/IT1"/></td>
                                    <td> <Input type="checkbox" id="EC/EL1"/></td>
                                    <td> <Input type="checkbox" id="EE1"/></td>
                                    <td> <Input type="checkbox" id="ME/PE1"/></td>
                                    <td> <Input type="checkbox" id="NT1"/></td>
                                    <td> <Input type="checkbox" id="CL1"/></td>
                                    <td> <Input type="checkbox" id="WS1"/></td>
                                </tr>
                                <tr align="center">
                                    <th scope="row">2</th>
                                    <td> <Input type="checkbox" id="CE2"/></td>
                                    <td> <Input type="checkbox" id="CP/IT2"/></td>
                                    <td> <Input type="checkbox" id="EC/EL2"/></td>
                                    <td> <Input type="checkbox" id="EE2"/></td>
                                    <td> <Input type="checkbox" id="ME/PE2"/></td>
                                    <td> <Input type="checkbox" id="NT2"/></td>
                                    <td> <Input type="checkbox" id="CL2"/></td>
                                    <td> <Input type="checkbox" id="WS2"/></td>
                                </tr>
                                <tr align="center">
                                    <th scope="row">3</th>
                                    <td> <Input type="checkbox" id="CE3"/></td>
                                    <td> <Input type="checkbox" id="CP/IT3"/></td>
                                    <td> <Input type="checkbox" id="EC/EL3"/></td>
                                    <td> <Input type="checkbox" id="EE3"/></td>
                                    <td> <Input type="checkbox" id="ME/PE3"/></td>
                                    <td> <Input type="checkbox" id="NT3"/></td>
                                    <td> <Input type="checkbox" id="CL3"/></td>
                                    <td> <Input type="checkbox" id="WS3"/></td>
                                </tr>
                                <tr align="center">
                                    <th scope="row">4</th>
                                    <td> <Input type="checkbox" id="CE4"/></td>
                                    <td> <Input type="checkbox" id="CP/IT4"/></td>
                                    <td> <Input type="checkbox" id="EC/EL4"/></td>
                                    <td> <Input type="checkbox" id="EE4"/></td>
                                    <td> <Input type="checkbox" id="ME/PE4"/></td>
                                    <td> <Input type="checkbox" id="NT4"/></td>
                                    <td> <Input type="checkbox" id="CL4"/></td>
                                    <td> <Input type="checkbox" id="WS4"/></td>
                                </tr>
                                <tr align="center">
                                    <th scope="row">5</th>
                                    <td> <Input type="checkbox" id="CE5"/></td>
                                    <td> <Input type="checkbox" id="CP/IT5"/></td>
                                    <td> <Input type="checkbox" id="EC/EL5"/></td>
                                    <td> <Input type="checkbox" id="EE5"/></td>
                                    <td> <Input type="checkbox" id="ME/PE5"/></td>
                                    <td> <Input type="checkbox" id="NT5"/></td>
                                    <td> <Input type="checkbox" id="CL5"/></td>
                                    <td> <Input type="checkbox" id="WS5"/></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                        <input type="submit" value="Submit" />
                        </Row>

                    </FormGroup>
                </Form>
                </Container>
            </div>
        );
    }



}

export { HomePage };