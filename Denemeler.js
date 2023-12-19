import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';



export default class KisiEkleme extends Component {

    render() {
        return (
            <div>
                <h1> Oda Giriş</h1>
                <Form>
                    <Label for="exampleAddress">
                        Telefon No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=" Örn 05351234567"
                    />
                    <Label for="exampleAddress">
                        Tc No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder="11 haneli tc no yada pasaport"
                    />
                    <Label for="exampleAddress">
                        Hitap, İsim
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder="PrDR Huseyin"
                    />
                    <Label for="exampleAddress">
                        Soyisim
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Baba Adı
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Anne Adı
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Dogum Yeri
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Soyisim
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />

                    <Label for="exampleAddress">
                        Dogum Tarihi
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Uyrugu
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Kimlik Türü
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Seri No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Kayıtlı oldugu il
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Kayıtlı oldugu ilçe
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Kayıtlı oldugu köy
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Cilt No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Aile Sıra No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Sıra No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Cinsiyet
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Medeni Hal
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Meslegi
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Adresi
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Label for="exampleAddress">
                        Oda No
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder=""
                    />
                    <Button>
                        Oda Ekle
                    </Button>
                </Form>
            </div >
        )
    }
}











import React, { Component } from "react";


import Webcam from "react-webcam";

export default class KisiEkleme extends Component {


    state = {
        screenshot: null,
    }
    screenshot() {
        var screenshot = this.refs.webcam.getScreenshot();
        this.setState({ screenshot: screenshot });
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div>
                <Webcam audio={false}
                    ref='webcam'
                    height={350}
                    width={350}
                    videoConstraints={videoConstraints} />
                <button onClick={this.screenshot.bind(this)}>Capture</button>
                {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
            </div>
        )
    }
}

