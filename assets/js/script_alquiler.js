const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bathroom: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    bathroom: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bathroom: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Acogedora casa dentro del bosque",
    src: "https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Casa acogedora y tranquila, con patio y áreas verdes. Perfecto para descansar y vivir al mismo tiempo.",
    ubicacion: "Pasaje luna, Pueblo Alegre",
    habitaciones: 1,
    bathroom: 1,
    costo: 1200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casas Rústica y tranquila",
    src: "https://images.unsplash.com/photo-1510568192-5cd6e7a47edd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Casa Rústica ubicado lejos de la ciudad. Diseño moderno, acceso a rios y parques nacionales.",
    ubicacion: "Calle nueva 88, Valdivia",
    habitaciones: 2,
    bathroom: 3,
    costo: 1800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna y amplia",
    src: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Casa moderna con piscina. Perfecta para aquellos que buscan pasar el tiempo con la familia y la naturaleza.",
    ubicacion: "Isla moche 497, Algarrobo",
    habitaciones: 5,
    bathroom: 6,
    costo: 3000,
    smoke: true,
    pets: false,
  },
];

const sectionAlquiler = document.getElementById("sectionAlquiler");

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

showCards(sectionAlquiler, propiedades_alquiler);
