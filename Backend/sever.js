const express = require("express");
const mysql = require("mysql");
const db = require("./db");
const {
  createDatabaseQuery,
  useDatabaseQuery,
    highendcouture,
    books,
    jewelry,
    boykids,
    girlkids,
    twinnings,
    dresses,
    lehenga,
    sarees
  } = require("./queries");
const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(express.json());

db.query(createDatabaseQuery, (err) => {
  if (err) throw err;

  db.query(useDatabaseQuery, (err) => {
    if (err) throw err;
    db.query(highendcouture, (err) => {
      if (err) throw err;
      db.query(books, (err) => {
        if (err) throw err;
        db.query(jewelry, (err) => {
          if (err) throw err;
          db.query(boykids, (err) => {
            if (err) throw err;
            db.query(girlkids, (err) => {
              if (err) throw err;

              db.query(twinnings, (err) => {
                if (err) throw err;

                db.query(dresses, (err) => {
                  if (err) throw err;

                  db.query(lehenga, (err) => {
                    if (err) throw err;

                      db.query(sarees, (err) => {
                        if (err) throw err;

                        console.log("Database and tables created successfully");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  app.post("/addproducts", (req, res) => {
    const sql = "INSERT INTO sarees (`saree_name`,`saree_description`,`saree_image`,`saree_location`,`saree_color`,`saree_alteration`,`saree_size`,`saree_measurements`,`saree_worn`,`saree_price`) VALUES (?)";
    const values = [
      req.body.productname,
      req.body.productdescription,
      req.body.productimageurl,
      req.body.location,
      req.body.color,
      req.body.alteration,
      req.body.size,
      req.body.measurements,
      req.body.worn,
      req.body.price,
    ];
    db.query(sql, [values], (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error");
      }
      console.log("data added successfully");
      return res.json(data);
    });
  });

app.get('/highendcouture',(req,res) => {
  const sql = "SELECT * FROM highendcouture";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/sarees',(req,res) => {
  const sql = "SELECT * FROM sarees";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/lehenga',(req,res) => {
  const sql = "SELECT * FROM lehenga";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/dresses',(req,res) => {
  const sql = "SELECT * FROM dresses";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/twinnings',(req,res) => {
  const sql = "SELECT * FROM twinnings";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/girlkids',(req,res) => {
  const sql = "SELECT * FROM girlkids";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/boykids',(req,res) => {
  const sql = "SELECT * FROM boykids";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/jewelry',(req,res) => {
  const sql = "SELECT * FROM jewelry";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/books',(req,res) => {
  const sql = "SELECT * FROM books";
  db.query(sql,(err,data)=>{
    if(err){
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

  app.listen(8080, () => {
    console.log("listening");
  });
  