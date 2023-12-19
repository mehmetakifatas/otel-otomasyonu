import "./App.css";
import React, {Component} from "react";

import { useState } from "react";

import Axios from "axios";

function App() {
  const [oda_no, setoda_no] = useState(0);
  const [oda_tipi, setoda_tipi] = useState("");
  const [oda_yon, setoda_yon] = useState("");
  const [oda_kat, setoda_kat] = useState(1);
  const [oda_arizadurum, setoda_arizadurum] = useState("");
  const [oda_sikayet, setoda_sikayet] = useState("");
  const [oda_kirlilik, setoda_kirlilik] = useState("");
  const [oda_aciklama, setoda_aciklama] = useState("");


  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/odaolustur", {
      oda_no: oda_no,
      oda_tipi: oda_tipi,
      oda_yon: oda_yon,
      oda_kat: oda_kat,
      oda_arizadurum: oda_arizadurum,
      oda_sikayet: oda_sikayet,
      oda_kirlilik: oda_kirlilik,
      oda_aciklama: oda_aciklama,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          oda_no: oda_no,
          oda_tipi: oda_tipi,
          oda_yon: oda_yon,
          oda_kat: oda_kat,
          oda_arizadurum: oda_arizadurum,
          oda_sikayet: oda_sikayet,
          oda_kirlilik: oda_kirlilik,
          oda_aciklama: oda_aciklama,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                id: val.id,
                name: val.name,
                country: val.country,
                age: val.age,
                position: val.position,
                wage: newWage,
              }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  

  return (



    <div className="App">
      <div className="information">
        <label>oda_no:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_no(event.target.value);
          }}
        />
        <label>oda_tipi:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_tipi(event.target.value);
          }}
        />
        <label>oda_yon:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_yon(event.target.value);
          }}
        />
        <label>oda_kat:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_kat(event.target.value);
          }}
        />
        <label>oda_arizadurum:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_arizadurum(event.target.value);
          }}
        />
        <label>oda_sikayet:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_sikayet(event.target.value);
          }}
        />
        <label>oda_kirlilik:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_kirlilik(event.target.value);
          }}
        />
        <label>oda_aciklama:</label>
        <input
          type="text"
          onChange={(event) => {
            setoda_aciklama(event.target.value);
          }}
        />
        <button onClick={addEmployee}>oda ekle</button>
      </div>
    </div>
  );
}

export default App;