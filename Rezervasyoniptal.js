import React, { Component } from "react";

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Table } from 'reactstrap';

import Axios from "axios";
import alertify from "alertifyjs"; 



export default class Rezervasyoniptal extends Component {


    state = {
        odabilgi: [],

        telefon_no: "",
        tc_no: "",

        isim_soyisim: "",

    }


    sil = (oda) => {
  
        Axios.delete(`http://localhost:3001/deleterez/${oda.id}`)
            .then(res => {
                if(res.data.affectedRows==1)
                alertify.success("Rezervasyon İptal Başarılı. Oda No:"+oda.oda_no+"  Kullanıcı İsim:"+oda.kullanici_adsoyad+ "Giriş Tarih: "+oda.giris_tarih+ "  Çıkış Başarılı: "+oda.cikis_tarih);
                else{
                    alertify.error("Hata");
                };
            })
    };




    telgonder = (event) => {
        let state = this.state;
        const oda = {
            telefon_no: event.target.value,
            tc_no: state.tc_no,
            isim_soyisim: state.isim_soyisim,
        };

        Axios.post("http://localhost:3001/rezervasyoniptalbilgi", { odarez: oda })
            .then(res => {
                const odabilgi = res.data;
                this.setState({ telefon_no: oda.telefon_no, odabilgi: odabilgi });
            });
    };


    tcgonder = (event) => {
        let state = this.state;
        const oda = {
            telefon_no: state.telefon_no,
            tc_no: event.target.value,
            isim_soyisim: state.isim_soyisim,
        };

        Axios.post("http://localhost:3001/rezervasyoniptalbilgi", { odarez: oda })
            .then(res => {
                const odabilgi = res.data;
                this.setState({ tc_no: oda.tc_no, odabilgi: odabilgi });
            });
    };

    isimgonder = (event) => {
        let state = this.state;
        const oda = {
            telefon_no: state.telefon_no,
            tc_no: state.tc_no,
            isim_soyisim: event.target.value,
        };

        Axios.post("http://localhost:3001/rezervasyoniptalbilgi", { odarez: oda })
            .then(res => {
                const odabilgi = res.data;
                this.setState({ isim_soyisim: oda.isim_soyisim, odabilgi: odabilgi });
            });
    };

    verigetir = () => {
        const oda = {
            telefon_no: "",
            tc_no: "",
            isim_soyisim: "",
        };
        Axios.post("http://localhost:3001/rezervasyoniptalbilgi", { odarez: oda })
            .then(res => {
                const odabilgi = res.data;
                this.setState({ odabilgi: odabilgi })
            });
    }

    componentDidMount() {
        this.verigetir();
    }

    render() {
        return (
            <div>

                <Form>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Telefon No
                        </Label>
                        <Input
                            id="tel"
                            name="tel"
                            placeholder=" Örn 05351234567"
                            onChange={this.telgonder}

                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Tc No
                        </Label>
                        <Input
                            id="tc"
                            name="tc"
                            placeholder="11 haneli tc no yada pasaport"
                            onChange={this.tcgonder}

                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            İsim Soyisim
                        </Label>
                        <Input
                            id="isim"
                            name="isim"
                            placeholder="Huseyin"
                            onChange={this.isimgonder}
                        />
                    </FormGroup>
                </Form>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                No
                            </th>
                            <th>
                                Kullanici
                            </th>
                            <th>
                                Tel
                            </th>
                            <th>
                                Kisi Sayisi
                            </th>
                            <th>
                                Giriş Tarihi
                            </th>
                            <th>
                                Çıkış Tarihi
                            </th>
                            <th>
                                iptal
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.odabilgi.map(oda => (
                            <tr key={oda.id}> {oda.id}
                                <th scope="row">
                                    {oda.oda_no}
                                </th>
                                <td>
                                    {oda.kullanici_adsoyad}
                                </td>
                                <td>
                                    {oda.kullanici_tel}
                                </td>
                                <td>
                                    {oda.kisi_sayisi}
                                </td>
                                <td>
                                    {oda.giris_tarih}
                                </td>
                                <td>
                                    {oda.cikis_tarih}
                                </td>
                                <td>
                                    <Button
                                        onClick={() => this.sil(oda)}
                                        color="info"
                                    >
                                        rezervasyon iptal et
                                    </Button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}