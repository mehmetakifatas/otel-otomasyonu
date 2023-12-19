import React, { Component } from "react";
import { Row, Container } from 'reactstrap';

import {

  Routes,
  Route,

} from "react-router-dom";

import Navi from './Navi';
import Odabilgi from './Odabilgi';
import RezervasyonYap from './RezervasyonYap';
import KisiEkleme from './KisiEkleme';
import Bulunmadı from './Bulunmadı';
import Rezervasyoniptal from './Rezervasyoniptal';
import CikisYap from './CikisYap';
import RezervasyonBilgi from "./RezervasyonBilgi";



export default class App extends Component {
  render() {




    return (
      <div >
        <Container>
          <Row>
            <Navi></Navi>
          </Row>

          <Row>

            <Routes>
              <Route path="Odabilgi" element={<Odabilgi />} />

              <Route path="RezervasyonBilgi" element={<RezervasyonBilgi />} />
              <Route path="RezervasyonYap" element={<RezervasyonYap />} />
              <Route path="Rezervasyoniptal" element={<Rezervasyoniptal />} />

              <Route path="KisiEkleme" element={<KisiEkleme />} />
              <Route path="CikisYap" element={<CikisYap />} />

              <Route path="/" element={<Bulunmadı />} />
            </Routes>

          </Row>

        </Container>




      </div>
    );

  }
}
