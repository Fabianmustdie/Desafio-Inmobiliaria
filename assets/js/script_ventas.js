const propiedades_ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    bathroom: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    bathroom: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    bathroom: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna de 2 pisos",
    src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Amplia casa con diseño moderno a 20 min de la ciudad. Espacios abiertos y detalles modernos para una experiencia única.",
    ubicacion: "Silva enrique 741, Rancagua",
    habitaciones: 1,
    bathroom: 2,
    costo: 6000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa de madera con patio traseo",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Elegante casa de madera con un patio amplio. Detalles arquitectónicos y comodidades modernas en nuevo barrio residencial.",
    ubicacion: "Monte verde 569, Talagante",
    habitaciones: 4,
    bathroom: 3,
    costo: 4500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa amplia en medio del bosque",
    src: "https://images.unsplash.com/photo-1525076244739-73fddefacc38?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Casa con 6 habitaciones y con impresionantes vistas a la montaña. Diseño acorde al ambiente que lo rodea con acogedor y amplio living.",
    ubicacion: "Parcela 54, Temuco",
    habitaciones: 6,
    bathroom: 5,
    costo: 4900,
    smoke: false,
    pets: true,
  },
];

const sectionAlquiler = document.getElementById("sectionVentas");

const showCards = (elementId, propiedades) => {
  propiedades.forEach((i) => {
    const card = document.createElement("div");
    card.className = `col-md-4 mb-4`;
    card.innerHTML = `
      <div class="card">
        <img src=${i.src} />
        <div class="card-body">
          <h5 class="card-title">${i.nombre}</h5>
          <p class="card-text">
            ${i.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${i.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i>${i.habitaciones} |
            <i class="fas fa-bath"></i>${i.bathroom}
          </p>
          <p><i class="fas fa-dollar-sign"></i>${i.costo}</p>
            ${
              i.smoke
                ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            }
            ${
              i.pets
                ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
            }
        </div>
      </div>
      `;

    elementId.appendChild(card);
  });
};

showCards(sectionVentas, propiedades_ventas);
