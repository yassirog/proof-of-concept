import express from "express";
import fetchJson from "./helpers/fetch-json.js";

const app = express();
const apiUrl = 'https://fdnd-agency.directus.app/items',
    dpiData = await fetchJson(apiUrl + '/DPI_TNO?fields=*.*.*.*')

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Hier de get route van de index
app.get('/', function (request, response) {
  response.render('index', {
      tno: dpiData.data
  })
});

// Stel het poortnummer in waar express naar moet gaan luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  console.log(`Website gestart op http://localhost:${app.get("port")} !`);
});
