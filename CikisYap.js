import React, { Component } from "react";

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';


export default class CikisYap extends Component {
    render() {
        return (
            <div>
                <h1> Oda cıkış</h1>
                <Form>
                <FormGroup>
                        <Label for="exampleAddress">
                            Oda No
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder=""
                        />
                    </FormGroup>
 
                    <FormGroup>
                        <Label for="exampleAddress">
                            Telefon No
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder=" Örn 05351234567"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Tc No
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="11 haneli tc no yada pasaport"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Hitap, İsim
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="PrDR Huseyin"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Soyisim
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder=""
                        />
                    </FormGroup>
                    <Button>
                        Oda Getir
                    </Button>
                </Form>
            </div>
        )
    }
}