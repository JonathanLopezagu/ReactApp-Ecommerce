import img1 from "./imgBase/play5.webp";
import img2 from "./imgBase/play4.webp";
import img3 from "./imgBase/xboxS.jpg";
import img4 from "./imgBase/xboxX.jpg";
import img5 from "./imgBase/controlplay.jpg";
import img6 from "./imgBase/controlxbox2.jpg";
import img7 from "./imgBase/controlxbox3.jpg";
import img8 from "./imgBase/volante.jpg";
import img9 from  "./imgBase/fifa22ps.jpg";

const productos = [{
    id: 1,
    categoria:'Consola',
    name: "PlayStation 5",
    img:img1,
    cantidad: 10,
    precio: 15000,
  },
  {
    id: 2,
    categoria:'Consola',
    name: "PlayStation 4",
    img: img2,
    cantidad: 10,
    precio: 6000,
  },
  {
    id: 3,
    categoria:'Consola',
    name: "Xbox Series S",
    img: img3,
    cantidad: 10,
    precio: 7000,
  },
  {
    id: 4,
    categoria: 'Consola',
    name: "Xbox Series X",
    img: img4,
    cantidad: 10,
    precio: 12000,
  },
  {
    id: 5,
    categoria: 'Controles',
    name: "Control Playstation 5",
    img: img5,
    cantidad: 10,
    precio: 1800,
  },
  {
    id: 6,
    categoria: 'Controles',
    name: "Control Xbox Series X",
    img: img6,
    cantidad: 10,
    precio: 1450,
  },
  {
    id: 7,
    categoria: 'Controles',
    name: "Control Xbox Series X",
    img: img7,
    cantidad: 10,
    precio: 1500,
  }
  ,
  {
    id: 8,
    categoria: 'Accesorios',
    name: "Volante Simulador",
    img: img8,
    cantidad: 5,
    precio: 4989,
  }
  ,
  {
    id: 9,
    categoria: 'Videojuegos',
    name: "Fifa 22 Playstation 5",
    img: img9,
    cantidad: 25,
    precio: 2400,
  }


];

export const gFetch = new Promise((resuelto, rechazado) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resuelto(productos);
    } else {
      rechazado("Error");
    }
  }, 2000);


});