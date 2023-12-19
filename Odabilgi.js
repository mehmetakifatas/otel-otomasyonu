import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
import { FormGroup, Input, Label } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Axios from "axios";



export default class Odabilgi extends Component {

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

    temiz: "",
    kirli: "",

    arizayok: "",
    arizavar: "",

    dolu: "",
    bos: "",
  }


  verigetir = () => {
    Axios.get("http://localhost:3001/odabilgi")
      .then(res => {
        const odabilgi = res.data;
        this.setState({ odabilgi });
      })
  }

  componentDidMount() {
    this.verigetir();
  }

  onChangeHandler = (event) => {
    const oda = {
      odano: event.target.value
    };
    if (oda.odano === "") {
      this.verigetir()
    } else {
      Axios.post("http://localhost:3001/odabilgino", { oda_no: oda })
        .then(res => {
          const odabilgi = res.data;
          this.setState({ odabilgi });
        })
    }
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;



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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;



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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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

    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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

    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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

    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ kat3: namedegisken, odabilgi: odabilgi })//bura

      });
  }


  temizdegiş = (event) => {   //bura
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

    if (state.temiz === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.temiz = namedegisken;   //bura

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

    if (namedegisken === "" && state.kirli === "") {//bura
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }

    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ temiz: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  kirlidegiş = (event) => {   //bura
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

    if (state.kirli === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.kirli = namedegisken;   //bura

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

    if (namedegisken === "" && state.temiz === "") {//bura
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }

    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }
    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ kirli: namedegisken, odabilgi: odabilgi })//bura

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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }

    if (state.arizayok === "" && namedegisken === "") {//bura
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }

    if (namedegisken === "" && state.arizavar === "") {//bura
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    if (state.dolu === "" && state.bos === "") {
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ arizayok: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  doludegiş = (event) => {   //bura
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

    if (state.dolu === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.dolu = namedegisken;   //bura

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    if (state.dolu === "" && namedegisken === "") {//bura
      oda.dolu = "dolu";
      oda.bos = "bos";
    }
    
    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ dolu: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  bosdegiş = (event) => {   //bura
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

      temiz: "",
      kirli: "",

      arizayok: "",
      arizavar: "",

      dolu: "",
      bos: "",
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

    oda.temiz = state.temiz;
    oda.kirli = state.kirli;

    oda.arizayok = state.arizayok;
    oda.arizavar = state.arizavar;

    oda.dolu = state.dolu;
    oda.bos = state.bos;

    if (state.bos === namedegisken) {   //bura
      namedegisken = "";
    } else {
      namedegisken = namedegisken;
    }

    oda.bos = namedegisken;   //bura

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
    if (state.temiz === "" && state.kirli === "") {
      oda.temiz = "temiz";
      oda.kirli = "kirli";
    }
    if (state.arizayok === "" && state.arizavar === "") {
      oda.arizayok = "arizayok";
      oda.arizavar = "arizavar";
    }

    if (state.dolu === "" && namedegisken === "") {//bura
      oda.dolu = "dolu";
      oda.bos = "bos";
    }

    Axios.post("http://localhost:3001/odabilgioz", { odaoz: oda })
      .then(res => {
        const odabilgi = res.data;

        this.setState({ bos: namedegisken, odabilgi: odabilgi })//bura

      });
  }

  render() {
    return (

      <div>

        <ListGroup horizontal>
          <ListGroupItem
            tag="a"
            onClick={this.verigetir}
          >
            Hepsi
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="standart"
            onClick={this.standartdegiş}
            active={"standart"==this.state.standart}

          >
            Standart Oda
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="dublex"
            onClick={this.dublexdegiş}
            active={"dublex"==this.state.dublex}

          >
            Dublex Oda
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kuzey"
            onClick={this.kuzeydegiş}
            active={"kuzey"==this.state.kuzey}

          >
            Kuzey
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="guney"
            onClick={this.guneydegiş}
            active={"guney"==this.state.guney}

          >
            Güney
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="dogu"
            onClick={this.dogudegiş}
            active={"dogu"==this.state.dogu}

          >
            Dogu
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="bati"
            onClick={this.batidegiş}
            active={"bati"==this.state.bati}

          >
            Batı
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kat1"
            onClick={this.kat1degiş}
            active={"kat1"==this.state.kat1}

          >
            Kat 1
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kat2"
            onClick={this.kat2degiş}
            active={"kat2"==this.state.kat2}

          >
            Kat 2
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kat3"
            onClick={this.kat3degiş}
            active={"kat3"==this.state.kat3}

          >
            Kat 3
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="temiz"
            onClick={this.temizdegiş}
            active={"temiz"==this.state.temiz}

          >
            Temiz
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="kirli"
            onClick={this.kirlidegiş}
            active={"kirli"==this.state.kirli}

          >
            Kirli
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="arizavar"
            onClick={this.arizavardegiş}
            active={"arizavar"==this.state.arizavar}

          >
            Arızalı
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="arizayok"
            onClick={this.arizayokdegiş}
            active={"arizayok"==this.state.arizayok}

          >
            Arıza Yok
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="dolu"
            onClick={this.doludegiş}
            active={"dolu"==this.state.dolu}

          >
            Dolu
          </ListGroupItem>

          <ListGroupItem
            tag="a"
            name="bos"
            onClick={this.bosdegiş}
            active={"bos"==this.state.bos}

          >
            Boş
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
            onChange={this.onChangeHandler}
          />
        </FormGroup>


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
                Kirlilik Durum
              </th>
              <th>
                Kayıp eşya
              </th>
              <th>
                Kullanıcı
              </th>
              <th>
                Oda Harcama
              </th>
              <th>
                İncele
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
                  {oda.oda_kirlilik}
                </td>
                <td>
                  {oda.oda_kayipesya}
                </td>
                <td>
                  {oda.kullanici_isimsoyisim}
                </td>
                <td>
                  {oda.oda_harcama}
                </td>

                <Button
                  color="info"
                  outline
                >
                  Degiştir
                </Button>
              </tr>

            ))}

          </tbody>
        </Table>
      </div>
    )
  }
}