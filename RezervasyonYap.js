import React, { Component } from "react";
import { Table } from 'reactstrap';
import { FormGroup, Input, Label, Form } from 'reactstrap';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import Axios from "axios";
import alertify from "alertifyjs";


export default class RezervasyonYap extends Component {

  state = {
    odabilgi: [],

    standart: "",
    dublex: "",

    dogu: "",
    bati: "",
    kuzey: "",
    guney: "",

    kat1: "",
    kat2: "",
    kat3: "",

    arizayok: "",
    arizavar: "",

    giristarih: '',
    cikistarih: '',

    rezodano: "",
    rezisimsoyisim: "",
    reztel: "",
    rezkisisayisi: "",
    rezaciklama: "",
  };


  rezerveet = (oda) => {
    let state = this.state;
    const rezervasyonoda = {
      rezodano: oda.oda_no,

      giristarih: state.giristarih,
      cikistarih: state.cikistarih,

      rezisimsoyisim: state.rezisimsoyisim,
      reztel: state.reztel,
      rezkisisayisi: state.rezkisisayisi,
      rezaciklama: state.rezaciklama,
    }
    if (rezervasyonoda.rezisimsoyisim == "") {
      alertify.error("İsim Boş Bırakılamaz");
    } else if (rezervasyonoda.reztel == "") {
      alertify.error("Telefon Numarası Boş Bırakılamaz");
    } else if (rezervasyonoda.kisisayisi == "") {
      alertify.error("Kişi Sayısı Boş Bırakılamaz");
    } else if (rezervasyonoda.giristarih == "") {
      alertify.error("Giriş Tarihi Boş Bırakılamaz");
    } else if (rezervasyonoda.cikistarih == "") {
      alertify.error("Çıkış Tarihi Boş Bırakılamaz");
    } else {
      Axios.post(`http://localhost:3001/rezervasyonyap`, { rezervasyonoda })
        .then(res => {
          console.log(res.data);
            alertify.success("Rezervasyon Başarılı.");
            window.location.reload(false);
        })
    }
  };



  verigetir = () => {
    Axios.get("http://localhost:3001/rezervasyonyapbilgi")
      .then(res => {
        const odabilgi = res.data;
        this.setState({ odabilgi });
      })
  };

  componentDidMount() {
    this.verigetir();
  };

  odanogonder = (event) => {
    let state = this.state;

    const oda = {
      odano: event.target.value,
      giristarih: state.giristarih,
      cikistarih: state.cikistarih,
    };
    if (oda.odano === "") {
      this.verigetir()
    } else {
      Axios.post("http://localhost:3001/rezervasyonyapbilgino", { oda_no: oda })
        .then(res => {
          const odabilgi = res.data;
          this.setState({ odabilgi });
        })
    }
  };

  giristarih = (event) => {
    let namedegisken = event.target.value;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = namedegisken;
    oda.cikistarih = state.cikistarih;


    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }
    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ giristarih: namedegisken, odabilgi: odabilgi })

      });
  }


  //o aralıkta ki boş olanlar gelsin
  cikistarih = (event) => {
    let namedegisken = event.target.value;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = namedegisken;



    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }
    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ cikistarih: namedegisken, odabilgi: odabilgi })

      });
  }


  standartdegiş = (event) => {
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.standart === namedegisken) {
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }
    oda.standart = namedegisken;



    if (namedegisken === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }



    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }
    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ standart: namedegisken, odabilgi: odabilgi })

      });
  }

  dublexdegiş = (event) => {//bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.dublex === namedegisken) {//bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }
    oda.dublex = namedegisken;//bura



    if (state.standart === "" && namedegisken === "") {//bura
      oda.standart = "standart";
      oda.dublex = "dublex";
    }



    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }
    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ dublex: namedegisken, odabilgi: odabilgi })//bura

      });
  }


  kuzeydegiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.kuzey === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.kuzey = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }

    if (namedegisken === "" && state.guney === "" && state.dogu === "" && state.bati === "") {//bura
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ kuzey: namedegisken, odabilgi: odabilgi })//bura

      });
  }


  guneydegiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.guney === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.guney = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }

    if (state.kuzey === "" && namedegisken === "" && state.dogu === "" && state.bati === "") {//bura
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ guney: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  dogudegiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.dogu === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.dogu = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }

    if (state.kuzey === "" && state.guney === "" && namedegisken === "" && state.bati === "") {//bura
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ dogu: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  batidegiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.bati === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.bati = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }

    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && namedegisken === "") {//bura
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ bati: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  kat1degiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.kat1 === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.kat1 = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (namedegisken === "" && state.kat2 === "" && state.kat3 === "") {//bura
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }

    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ kat1: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  kat2degiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.kat2 === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.kat2 = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (namedegisken === "" && state.kat1 === "" && state.kat3 === "") {//bura
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }

    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ kat2: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  kat3degiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.kat3 === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.kat3 = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }

    if (namedegisken === "" && state.kat1 === "" && state.kat2 === "") {//bura
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }

    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ kat3: namedegisken, odabilgi: odabilgi })//bura

      });
  }


  arizavardegiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.arizavar === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.arizavar = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }
    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }

    if (state.arizayok === "" && namedegisken === "") {//bura
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ arizavar: namedegisken, odabilgi: odabilgi })//bura

      });
  }


  arizayokdegiş = (event) => {   //bura
    let namedegisken = event.target.name;
    const oda = {
      standart: "",
      dublex: "",

      dogu: "",
      bati: "",
      kuzey: "",
      guney: "",

      kat1: "",
      kat2: "",
      kat3: "",

      arizayok: "",
      arizavar: "",

      giristarih: '',
      cikistarih: '',
    };

    let state = this.state;
    oda.standart = state.standart;
    oda.dublex = state.dublex;

    oda.dogu = state.dogu;
    oda.bati = state.bati;
    oda.kuzey = state.kuzey;
    oda.guney = state.guney;

    oda.kat1 = state.kat1;
    oda.kat2 = state.kat2;
    oda.kat3 = state.kat3;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.giristarih = state.giristarih;
    oda.cikistarih = state.cikistarih;

    if (state.arizayok === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.arizayok = namedegisken;   //bura

    if (state.standart === "" && state.dublex === "") {
      oda.standart = "standart";
      oda.dublex = "dublex";
    }
    if (state.kuzey === "" && state.guney === "" && state.dogu === "" && state.bati === "") {
      oda.dogu = "dogu";
      oda.bati = "bati";
      oda.kuzey = "kuzey";
      oda.guney = "guney";
    }
    if (state.kat1 === "" && state.kat2 === "" && state.kat3 === "") {
      oda.kat1 = "kat1";
      oda.kat2 = "kat2";
      oda.kat3 = "kat3";
    }

    if (namedegisken === "" && state.arizavar === "") {//bura
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    Axios.post("http://localhost:3001/rezervasyonyapbilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ arizayok: namedegisken, odabilgi: odabilgi })//bura

      });
  };

  isim = (event) => {
    let degisken = event.target.value;
    this.setState({ rezisimsoyisim: degisken });
  };
  tel = (event) => {
    let degisken = event.target.value;
    this.setState({ reztel: degisken });
  };
  kisisayisi = (event) => {
    let degisken = event.target.value;
    this.setState({ rezkisisayisi: degisken });
  };
  aciklama = (event) => {
    let degisken = event.target.value;
    this.setState({ rezaciklama: degisken });
  };


  render() {
    return (

      <div>

        <ListGroup horizontal>
          <ListGroupItem
            tag="a"
            onClick={this.verigetir}
            color="danger"
          >
            Hepsi
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="standart"
            onClick={this.standartdegiş}
            active={"standart" == this.state.standart}
          >
            Standart Oda
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="dublex"
            onClick={this.dublexdegiş}
            active={"dublex" == this.state.dublex}

          >
            Dublex Oda
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kuzey"
            onClick={this.kuzeydegiş}
            active={"kuzey" == this.state.kuzey}

          >
            Kuzey
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="guney"
            onClick={this.guneydegiş}
            active={"guney" == this.state.guney}

          >
            Güney
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="dogu"
            onClick={this.dogudegiş}
            active={"dogu" == this.state.dogu}

          >
            Dogu
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="bati"
            onClick={this.batidegiş}
            active={"bati" == this.state.bati}

          >
            Batı
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kat1"
            onClick={this.kat1degiş}
            active={"kat1" == this.state.kat1}

          >
            Kat 1
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kat2"
            onClick={this.kat2degiş}
            active={"kat2" == this.state.kat2}

          >
            Kat 2
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kat3"
            onClick={this.kat3degiş}
            active={"kat3" == this.state.kat3}

          >
            Kat 3
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="arizavar"
            onClick={this.arizavardegiş}
            active={"arizavar" == this.state.arizavar}

          >
            Arızalı
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="arizayok"
            onClick={this.arizayokdegiş}
            active={"arizayok" == this.state.arizayok}

          >
            Arıza Yok
          </ListGroupItem>

        </ListGroup>

        <FormGroup>
          <Label for="exampleNumber" >
            Oda no
          </Label>
          <Input
            id="exampleNumber"
            name="odano"
            placeholder="oda no"
            type="number"
            onChange={this.odanogonder}
          />
        </FormGroup>

        <Form>

          <FormGroup>
            <Label for="exampleDate">
              Giriş Tarihi
            </Label>
            <Input
              id="exampleDate"
              name="dategiris"
              placeholder="date placeholder"
              type="date"
              onChange={this.giristarih}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">
              Çıkış Tarihi
            </Label>
            <Input
              id="exampleDate"
              name="dategiris"
              placeholder="date placeholder"
              type="date"
              onChange={this.cikistarih}
            />
          </FormGroup>

        </Form>

        <FormGroup>
          İsim Soyisim
          <Input
            id="isim"
            name="isim"
            placeholder="isim"
            type="text"
            onChange={this.isim}
          />
          Telefon Numarası
          <Input
            id="tel"
            name="tel"
            placeholder="tel"
            type="number"
            onChange={this.tel}
          />
          Kişi Sayısı
          <Input
            id="kisisayisi"
            name="kisisayisi"
            placeholder="kisisayisi"
            type="number"
            onChange={this.kisisayisi}
          />
          Acıklama
          <Input
            id="acıklama"
            name="acıklama"
            placeholder="acıklama"
            type="acıklama"
            onChange={this.aciklama}
          />
        </FormGroup>
        <h5>İsim Soyisim: {this.state.rezisimsoyisim} Telefon Numarası: {this.state.reztel} Kişi Sayısı: {this.state.rezkisisayisi} Giriş Tarihi: {this.state.giristarih} Çıkış Tarihi: {this.state.cikistarih} </h5>
        <h5>{this.state.rezaciklama}</h5>


        <h1>knapsack problem yazılacak</h1>

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
                mt2
              </th>
              <th>
                Oda tipi
              </th>
              <th>
                Kat
              </th>
              <th>
                Yön
              </th>
              <th>
                Arıza Durum
              </th>
              <th>
                Şikayet
              </th>
              <th>
                Giriş Tarihi
              </th>
              <th>
                Çıkış Tarihi
              </th>
              <th>
                Oda Seç
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
                  {oda.buyukluk_mt2}
                </td>
                <td>
                  {oda.oda_tipi}
                </td>
                <td>
                  {oda.oda_kat}
                </td>
                <td>
                  {oda.oda_yon}
                </td>
                <td>
                  {oda.oda_arizadurum}
                </td>
                <td>
                  {oda.oda_sikayet}
                </td>
                <td>
                  {oda.giris_tarih}
                </td>
                <td>
                  {oda.cikis_tarih}
                </td>
                <td>
                  <Button
                    onClick={() => this.rezerveet(oda)}
                    color="info"
                  >
                    Bu odaya rezerve et
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