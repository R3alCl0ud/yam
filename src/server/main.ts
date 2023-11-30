import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json())

const api = express();

api.get('/test', (req, res) => {
  // console.log(req.body);
  res.json({test:"test object"});
});

api.post('/testPost', (req, res) => {
  console.log(req.body);
  res.json({yourContent:req.body});
});


app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});


app.use('/api',api);


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
