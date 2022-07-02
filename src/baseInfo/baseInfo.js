import img1 from "./imgBase/play4.webp";
import img2 from "./imgBase/play5.webp";
import img3 from "./imgBase/xboxS.jpg";
import img4 from "./imgBase/xboxX.jpg";
const productos= [ 
    {
        id:1,
        name: "PlayStation 5",
        img: img1 ,
        cantidad:10,
        precio: "15,000",
    }
    ,
    {
        id:2,
        name: "PlayStation 4",
        img: img2 ,
        cantidad:10,
        precio: "6,000",
    }
    ,
    {
        id:3,
        name: "Xbox Series S",
        img: img3 ,
        cantidad:10,
        precio: "7,000",
    }
    ,
    {
        id:4,
        name: "Xbox Series X",
        img: img4 ,
        cantidad:10,
        precio: "12,000",
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