const express = require('express');
const app = express();
const port = 3000;

const catalogoAutos = [
  {
    marca: "Mazda",
    modelo: "CX-5",
    año: 2026,
    precio: 599000,
    color: "Rojo"
  },
  {
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2026,
    precio: 600000,
    color: "Gris"
  },
  {
    marca: "Kia",
    modelo: "Sportage",
    año: 2026,
    precio: 640000,
    color: "Verde"
  },
  {
    marca: "Volkswagen",
    modelo: "Taos",
    año: 2026,
    precio: 500000,
    color: "Azul"
  },
  {
    marca: "Nissan",
    modelo: "X-Trail",
    año: 2026,
    precio: 615000,
    color: "Blanco"
  },
  {
    marca: "Peugeot",
    modelo: "2008",
    año: 2026,
    precio: 450000,
    color: "Naranja"
  }
];

app.get('/autos', (req, res) => {
  res.json(catalogoAutos);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});