import React, { Component } from "react";
import { Col, Row, Input, InputGroup, InputGroupText,Button } from 'reactstrap';


export default class KisiEkleme extends Component {



    render() {


        return (
            <div>
                <Row xs="2">
                    <Col className="bg-light border">
                        <InputGroup>
                            <InputGroupText>
                                oda no
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Giriş Tarihi
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Çıkış Tarihi
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Tc No
                            </InputGroupText>
                            <Input
                            />
                            <Button
                                color="info"
                                outline
                            >
                                Emniyet Sorgula
                            </Button>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Hitap, İsim
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Soyisim
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Baba Adı
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Anne Adı
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Dogum Yeri
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Dogum Tarihi
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Telefon No
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Email
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Arac Plaka
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Not
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>





                    </Col>











                    <Col className="bg-light border">

                        <InputGroup>
                            <InputGroupText>
                                Uyrugu
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Kimlik Türü
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Seri No
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Kayıtlı oldugu il
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Kayıtlı oldugu ilçe
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Kayıtlı oldugu köy
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Cilt No
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Aile Sıra No
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Sıra No
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Cinsiyet
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Medeni Hal
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Meslegi
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText>
                                Adres
                            </InputGroupText>
                            <Input
                            />
                        </InputGroup>



                    </Col>
                </Row>


            </div>
        )
    }
}

