const links = document.querySelectorAll('.mainNav a');
const secciones = document.querySelectorAll('.seccionDeContenido');

let seccionActual = document.querySelector('.seccion-activa');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.getAttribute('href');
    const nuevaSeccion = document.querySelector(id);

    if (nuevaSeccion === seccionActual)
      return;

    seccionActual.classList.remove('seccion-activa');
    seccionActual.classList.add('seccion-saliendo');

    setTimeout(() => {
      seccionActual.classList.remove('seccion-saliendo');

      nuevaSeccion.classList.add('seccion-activa');
      nuevaSeccion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      seccionActual = nuevaSeccion;
    }, 400);
  });
});



const inicioRelacion = new Date("2025-08-01T16:44:44");

const mesesEl = document.getElementById("meses");
const semanaEl = document.getElementById("semanas");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - inicioRelacion;

  const totalSegundos = Math.floor(diferencia / 1000);
  const totalMinutos = Math.floor(totalSegundos / 60);
  const totalHoras = Math.floor(totalMinutos / 60);
  const totalDias = Math.floor(totalHoras / 24);
  const semanas = Math.floor(totalDias / 7);
  let meses =
    (ahora.getFullYear() - inicioRelacion.getFullYear()) * 12 +
    (ahora.getMonth() - inicioRelacion.getMonth());

  if (ahora.getDate() < inicioRelacion.getDate()) {
    meses--;
  }

  mesesEl.textContent = meses;
  semanaEl.textContent = semanas;
  diasEl.textContent = totalDias;
  horasEl.textContent = totalHoras % 24;
  minutosEl.textContent = totalMinutos % 60;
  segundosEl.textContent = totalSegundos % 60;
}

actualizarContador();
setInterval(actualizarContador, 1000);


const botonesSorpresa = document.querySelectorAll(".btn-sorpresa");
const overlay = document.getElementById("overlay");
const cerrar = document.getElementById("cerrarSorpresa");
const contenido = document.getElementById("contenidoSorpresa");

const sorpresas = {
  casa: `
    <h3>¿Dijiste casa?</h3>
    <p>Mañana te casaaaaaaaas. Conmigo poque soy tu novio y te amo demasiadooooo.</p>
    <p>Aun me parece increíble que nuestro primer mensaje fue ese... Que loco no? </p>
    <p>La que lea esto se ganó una promoción de besitos de 5x1</p>
    <img src="img/Cupon.jpg" style="width:100%; border-radius:5px;">
  `,
  click: `
    <img src="img/cuestion.png" style="width:100%; border-radius:5px;">
    <h3>Si crees que tú me amas más?</h3>
    <p>Yo te gano. Y aquí salvo que le des ctrl u y edites esto no vas a poder cambiarlo, aunque ni así se puede</p>
    <p>Aqui directamente no hay hoja. Solo hay un archivo que no vas a poder ver así que tendrás que aceptar mi victoria</p>
  `,
  sorpresa: `
    <h3>Esta sorpresa es una sorpresa dentro de la sorpresa</h3>
    <h3>En 14 días, habrá algo en esta sección...</h3>   
    <h3>Mientras tanto, te dejo con lo que sueña todas las noches el constructor de este lugar</h3>
    <video controls style="width:100%; max-height:300px;margin-top:10px;">
      <source src="img/parque.mp4" type="video/mp4">
    </video>

  `
};

botonesSorpresa.forEach(boton => {
  boton.addEventListener("click", () => {
    const tipo = boton.dataset.sorpresa;
    contenido.innerHTML = sorpresas[tipo];
    overlay.classList.add("activo");
  });
});

cerrar.addEventListener("click", () => {
  overlay.classList.remove("activo");
});
window.addEventListener("load", () => {

  /* ===== MAPA ===== */

  const hilo = document.getElementById("hilo");
  if (hilo) {
    hilo.style.animation = "dibujar 3s ease forwards";
  }

  const puntos = document.querySelectorAll(".punto circle");
  puntos.forEach((punto, i) => {
    setTimeout(() => {
      punto.style.opacity = 1;
    }, 600 + i * 400);
  });

  const tarjetas = document.querySelectorAll(".tarjeta");

  function ocultarTarjetas() {
    tarjetas.forEach(t => t.style.opacity = 0);
  }

  document.querySelectorAll(".punto").forEach(punto => {
    const id = punto.dataset.lugar;
    const tarjeta = document.getElementById(id);

    punto.addEventListener("click", (e) => {
      e.stopPropagation();
      ocultarTarjetas();
      tarjeta.style.opacity = 1;
    });
  });

  document.addEventListener("click", () => {
    ocultarTarjetas();
  });

});


function cerrarOverlay() {
  overlay.classList.remove("activo");
}

cerrar.addEventListener("click", cerrarOverlay);

document.querySelectorAll(".mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".tarjeta").forEach(t => {
      t.style.opacity = 0;
    });
  });
});

