import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
export default class Navi extends Component {



  render() {
    return (
      <div>


        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            Gece Otel
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/Odabilgi/">
                  Oda Bilgi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/RezervasyonBilgi/">
                  Rezervasyon Bilgi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/RezervasyonYap/">
                  Rezervasyon Yap
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Rezervasyoniptal/">
                  Rezervasyon iptal ekranı
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/KisiEkleme/">
                  Oda Giriş
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/CikisYap/">
                  Çıkış Yapma
                </NavLink>
              </NavItem>



            </Nav>
            <NavbarText>
              GECE OTEL
            </NavbarText>
          </Collapse>
        </Navbar>



      </div >
    )
  }
}