const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "admin",
  database: "otel",
});


app.post("/odaolustur", (req, res) => {
  const oda_no = req.body.oda_no;
  const oda_tipi = req.body.oda_tipi;
  const oda_yon = req.body.oda_yon;
  const oda_kat = req.body.oda_kat;
  const oda_arizadurum = req.body.oda_arizadurum;
  const oda_sikayet = req.body.oda_sikayet;
  const oda_kirlilik = req.body.oda_kirlilik;
  const oda_aciklama = req.body.oda_aciklama;

  db.query(
    "INSERT INTO oda ( oda_no, oda_tipi, oda_yon, oda_kat, oda_arizadurum, oda_sikayet, oda_kirlilik, oda_aciklama) VALUES (?,?,?,?,?,?,?,?)",
    [oda_no, oda_tipi, oda_yon, oda_kat, oda_arizadurum, oda_sikayet, oda_kirlilik, oda_aciklama],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.post("/odabilgioz", (req, res) => {
  const özellik = req.body.odaoz;
  sorgu = "SELECT * FROM oda WHERE oda_tipi in (?,?) and oda_yon in (?,?,?,?) and oda_kat in (?,?,?)  ";

  kirlilik = "";
  if (özellik.temiz == "temiz") {
    kirlilik = "and (oda_kirlilik in ('temiz')"
    if (özellik.kirli == "kirli") {
      kirlilik = kirlilik + "or oda_kirlilik not in('temiz'))"
    } else {
      kirlilik = kirlilik + ")"
    };
  } else {
    if (özellik.kirli == "kirli") {
      kirlilik = "and oda_kirlilik not in('temiz')"
    };
  };
  sorgu = sorgu + kirlilik;

  ariza = "";
  if (özellik.arizayok == "arizayok") {
    ariza = "and (oda_arizadurum in ('saglam')"
    if (özellik.arizavar == "arizavar") {
      ariza = ariza + "or oda_arizadurum not in('saglam'))"
    } else {
      ariza = ariza + ")"
    };
  } else {
    if (özellik.arizavar == "arizavar") {
      ariza = "and oda_arizadurum not in('saglam')"
    };
  };
  sorgu = sorgu + ariza;

  dolumu = "";
  if (özellik.bos == "bos") {
    dolumu = "and (kullanici_isimsoyisim in ('')"
    if (özellik.dolu == "dolu") {
      dolumu = dolumu + "or kullanici_isimsoyisim not in(''))"
    } else {
      dolumu = dolumu + ")"
    };
  } else {
    if (özellik.dolu == "dolu") {
      dolumu = "and kullanici_isimsoyisim not in('')"
    };
  };
  sorgu = sorgu + dolumu;

  db.query(sorgu,
    [özellik.standart, özellik.dublex, özellik.dogu, özellik.bati, özellik.kuzey, özellik.guney, özellik.kat1, özellik.kat2, özellik.kat3],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.post("/odabilgino", (req, res) => {
  const oda_no = req.body.oda_no;

  db.query("SELECT * FROM oda WHERE oda_no = ?", [oda_no.odano],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);

      }
    });
});

app.get("/odabilgi", (req, res) => {
  db.query("SELECT * FROM oda", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);

    }
  });
});



app.get("/rezervasyonbilgi", (req, res) => {

  db.query("SELECT rezervasyon.id, rezervasyon.oda_no, rezervasyon.kullanici_adsoyad, rezervasyon.kullanici_tel, rezervasyon.kisi_sayisi, rezervasyon.giris_tarih, rezervasyon.cikis_tarih, oda.buyukluk_mt2, oda.oda_tipi, oda.oda_kat, oda.oda_yon, oda.oda_arizadurum, oda.oda_sikayet" +
    " FROM otel.rezervasyon LEFT JOIN otel.oda ON otel.rezervasyon.oda_no = otel.oda.oda_no WHERE cikis_tarih > CURDATE() ORDER BY rezervasyon.oda_no , giris_tarih ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.post("/rezervasyonbilgino", (req, res) => {

  const oda_no = req.body.oda_no;

  tarih = ""
  ilktarih = oda_no.giristarih;
  ikincitarih = oda_no.cikistarih;
  ilktarih = "'" + ilktarih + "'";
  ikincitarih = "'" + ikincitarih + "'";

  if (oda_no.giristarih == '' && oda_no.cikistarih == '') {
    tarih = " AND cikis_tarih > CURDATE()";
  } else {
    if (oda_no.giristarih == '' && oda_no.cikistarih != '') {
      tarih = " AND cikis_tarih > CURDATE() AND giris_tarih < " + ikincitarih;
    }
    if (oda_no.giristarih != '' && oda_no.cikistarih == '') {
      tarih = " AND cikis_tarih > " + ilktarih;
    }
    if (oda_no.giristarih != '' && oda_no.cikistarih != '') {
      tarih = " AND cikis_tarih > " + ilktarih + " AND giris_tarih < " + ikincitarih;
    }
  }

  db.query("SELECT rezervasyon.id, rezervasyon.oda_no, rezervasyon.kullanici_adsoyad, rezervasyon.kullanici_tel, rezervasyon.kisi_sayisi, rezervasyon.giris_tarih, rezervasyon.cikis_tarih, oda.buyukluk_mt2, oda.oda_tipi, oda.oda_kat, oda.oda_yon, oda.oda_arizadurum, oda.oda_sikayet" +
    " FROM otel.rezervasyon LEFT JOIN otel.oda ON otel.rezervasyon.oda_no = otel.oda.oda_no" +
    " WHERE rezervasyon.oda_no = ? " + tarih + " ORDER BY rezervasyon.oda_no , giris_tarih ",
    [oda_no.odano],
    (err2, result2) => {
      if (err2) {
        console.log(err2);
      } else {
        res.send(result2);
      }
    });

});

app.post("/rezervasyonbilgioz", (req, res) => {
  const özellik = req.body.odaoz;

  tarih = ""
  ilktarih = özellik.giristarih;
  ikincitarih = özellik.cikistarih;
  ilktarih = "'" + ilktarih + "'";
  ikincitarih = "'" + ikincitarih + "'";

  if (özellik.giristarih == '' && özellik.cikistarih == '') {
    tarih = " AND cikis_tarih > CURDATE()";
  } else {
    if (özellik.giristarih == '' && özellik.cikistarih != '') {
      tarih = " AND cikis_tarih > CURDATE() AND giris_tarih < " + ikincitarih;
    }
    if (özellik.giristarih != '' && özellik.cikistarih == '') {
      tarih = " AND cikis_tarih > " + ilktarih;
    }
    if (özellik.giristarih != '' && özellik.cikistarih != '') {
      tarih = " AND cikis_tarih > " + ilktarih + " AND giris_tarih < " + ikincitarih;
    }
  }

  ariza = "";
  if (özellik.arizayok == "arizayok") {
    ariza = " and (oda_arizadurum in ('saglam')"
    if (özellik.arizavar == "arizavar") {
      ariza = ariza + " or oda_arizadurum not in ('saglam'))"
    } else {
      ariza = ariza + ")"
    };
  } else {
    if (özellik.arizavar == "arizavar") {
      ariza = " and oda_arizadurum not in ('saglam')"
    };
  };

  sorgu = "SELECT rezervasyon.id, rezervasyon.oda_no, rezervasyon.kullanici_adsoyad, rezervasyon.kullanici_tel, rezervasyon.kisi_sayisi, rezervasyon.giris_tarih, rezervasyon.cikis_tarih, oda.buyukluk_mt2, oda.oda_tipi, oda.oda_kat, oda.oda_yon, oda.oda_arizadurum, oda.oda_sikayet";
  sorgu = sorgu + " FROM otel.rezervasyon LEFT JOIN otel.oda ON otel.rezervasyon.oda_no = otel.oda.oda_no ";
  sorgu = sorgu + "WHERE oda_tipi in ('" + özellik.standart + "','" + özellik.dublex + "') and oda_yon in ('" + özellik.dogu + "','" + özellik.bati + "','" + özellik.kuzey + "','" + özellik.guney + "') and oda_kat in ('" + özellik.kat1 + "','" + özellik.kat2 + "','" + özellik.kat3 + "') " + ariza;
  sorgu = sorgu + tarih + " ORDER BY rezervasyon.oda_no , giris_tarih ";
  db.query(sorgu,
    (err2, result2) => {
      if (err2) {
        console.log(err2);
      } else {
        res.send(result2);
      }
    });

});


















app.get("/rezervasyonyapbilgi", (req, res) => {

  db.query("SELECT oda_no FROM otel.rezervasyon WHERE  (giris_tarih < CURDATE() + INTERVAL 1 DAY AND cikis_tarih > CURDATE()) ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      ara = JSON.stringify(result);
      ara = ara.replace('[', "").replaceAll('{"oda_no":', "").replaceAll('}', "").replace(']', "");
      ara = ara.split(",");
      ara = ara.filter((item, index) => ara.indexOf(item) === index);
      ara = ara.toString();
      if (ara == '') {
        ara = '""';
      };
      db.query("SELECT rezervasyon.id, rezervasyon.oda_no, rezervasyon.giris_tarih, rezervasyon.cikis_tarih, oda.buyukluk_mt2, oda.oda_tipi, oda.oda_kat, oda.oda_yon, oda.oda_arizadurum, oda.oda_sikayet" +
        " FROM otel.rezervasyon LEFT JOIN otel.oda ON otel.rezervasyon.oda_no = otel.oda.oda_no WHERE rezervasyon.oda_no not in (" + ara
        + ") and oda.oda_no not in (" + ara + ") and  not (giris_tarih < CURDATE() + INTERVAL 1 DAY AND cikis_tarih > CURDATE()) ORDER BY rezervasyon.oda_no , giris_tarih ",
        (err2, result2) => {
          if (err2) {
            console.log(err2);
          } else {
            res.send(result2);
          }
        });
    }
  });
});

app.post("/rezervasyonyapbilgino", (req, res) => {

  const oda_no = req.body.oda_no;

  giristarih = oda_no.giristarih;
  cikistarih = oda_no.cikistarih;
  giristarih = "'" + giristarih + "'";
  cikistarih = "'" + cikistarih + "'";

  if (oda_no.giristarih == '' || oda_no.cikistarih == '') {
    giristarih = "CURDATE()";
    cikistarih = "CURDATE() + INTERVAL 1 DAY"
  };

  db.query("SELECT oda_no FROM otel.rezervasyon WHERE oda_no = ? AND (giris_tarih < " + cikistarih + " AND cikis_tarih > " + giristarih + ") ", [oda_no.odano], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      ara = JSON.stringify(result);
      ara = ara.replace('[', "").replaceAll('{"oda_no":', "").replaceAll('}', "").replace(']', "");
      ara = ara.split(",");
      ara = ara.filter((item, index) => ara.indexOf(item) === index);
      ara = ara.toString();
      if (ara == '') {
        ara = '""';
      };
      db.query("SELECT rezervasyon.id, rezervasyon.oda_no, rezervasyon.giris_tarih, rezervasyon.cikis_tarih, oda.buyukluk_mt2, oda.oda_tipi, oda.oda_kat, oda.oda_yon, oda.oda_arizadurum, oda.oda_sikayet" +
        " FROM otel.rezervasyon LEFT JOIN otel.oda ON otel.rezervasyon.oda_no = otel.oda.oda_no WHERE rezervasyon.oda_no = ? AND rezervasyon.oda_no not in (" + ara
        + ") and oda.oda_no not in (" + ara + ") and  not (giris_tarih < " + cikistarih + " AND cikis_tarih > " + giristarih + ") ORDER BY rezervasyon.oda_no , giris_tarih ", [oda_no.odano],
        (err2, result2) => {
          if (err2) {
            console.log(err2);
          } else {
            res.send(result2);
          }
        });
    }
  });
});

app.post("/rezervasyonyapbilgioz", (req, res) => {
  const özellik = req.body.odaoz;
  ariza = "";
  if (özellik.arizayok == "arizayok") {
    ariza = "and (oda_arizadurum in ('saglam')"
    if (özellik.arizavar == "arizavar") {
      ariza = ariza + "or oda_arizadurum not in('saglam'))"
    } else {
      ariza = ariza + ")"
    };
  } else {
    if (özellik.arizavar == "arizavar") {
      ariza = "and oda_arizadurum not in('saglam')"
    };
  };

  giristarih = özellik.giristarih;
  cikistarih = özellik.cikistarih;
  giristarih = "'" + giristarih + "'";
  cikistarih = "'" + cikistarih + "'";

  if (özellik.giristarih == '' || özellik.cikistarih == '') {
    giristarih = "CURDATE()";
    cikistarih = "CURDATE() + INTERVAL 1 DAY"
  };

  db.query("SELECT oda_no FROM otel.rezervasyon WHERE (giris_tarih < " + cikistarih + " AND cikis_tarih > " + giristarih + ") ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      ara = JSON.stringify(result);
      ara = ara.replace('[', "").replaceAll('{"oda_no":', "").replaceAll('}', "").replace(']', "");
      ara = ara.split(",");
      ara = ara.filter((item, index) => ara.indexOf(item) === index);
      ara = ara.toString();
      if (ara == '') {
        ara = '""';
      };
      sorgu = "SELECT rezervasyon.id, rezervasyon.oda_no, rezervasyon.giris_tarih, rezervasyon.cikis_tarih, oda.buyukluk_mt2, oda.oda_tipi, oda.oda_kat, oda.oda_yon, oda.oda_arizadurum, oda.oda_sikayet";
      sorgu = sorgu + " FROM otel.rezervasyon LEFT JOIN otel.oda ON otel.rezervasyon.oda_no = otel.oda.oda_no ";
      sorgu = sorgu + "WHERE oda_tipi in ('" + özellik.standart + "','" + özellik.dublex + "') and oda_yon in ('" + özellik.dogu + "','" + özellik.bati + "','" + özellik.kuzey + "','" + özellik.guney + "') and oda_kat in ('" + özellik.kat1 + "','" + özellik.kat2 + "','" + özellik.kat3 + "')" + ariza;
      sorgu = sorgu + " AND rezervasyon.oda_no not in (" + ara + ") and oda.oda_no not in (" + ara + ") and  not (giris_tarih < " + cikistarih + " AND cikis_tarih > " + giristarih + ") ORDER BY rezervasyon.oda_no , giris_tarih ";
      db.query(sorgu,
        (err2, result2) => {
          if (err2) {
            console.log(err2);
          } else {
            res.send(result2);
          }
        });
    }
  });
});

app.post("/rezervasyonyap", (req, res) => {
  const rez = req.body.rezervasyonoda;
  console.log(rez)
  db.query(
    "INSERT INTO rezervasyon ( oda_no, kullanici_adsoyad, kullanici_tel, giris_tarih, cikis_tarih, kisi_sayisi, aciklama) VALUES ( ?,?,?,?, ?, ?,?)",
    [rez.rezodano, rez.rezisimsoyisim, rez.reztel, rez.giristarih, rez.cikistarih,rez.rezkisisayisi, rez.rezaciklama],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});


app.post("/rezervasyoniptalbilgi", (req, res) => {
  const rez = req.body.odarez;
  sorgu = "SELECT * FROM rezervasyon WHERE kullanici_adsoyad = ? or kullanici_tel = ?";
  db.query(sorgu, [rez.isim_soyisim, rez.telefon_no],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.delete("/deleterez/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM rezervasyon WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});









app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server calışıyor port: 3001");

});