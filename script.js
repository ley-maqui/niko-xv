
// Fecha del evento
const fechaEvento = new Date("2026-08-08T17:00:00").getTime();

// Botón de bienvenida
const btnAbrir = document.getElementById("btnAbrir");

if (btnAbrir) {
    btnAbrir.addEventListener("click", () => {
        const evento = document.querySelector(".evento");

        if (evento) {
            evento.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Cuenta regresiva
function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) return;

    document.getElementById("dias").textContent =
        Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("horas").textContent =
        Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutos").textContent =
        Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("segundos").textContent =
        Math.floor((diferencia % (1000 * 60)) / 1000);

}

actualizarContador();
setInterval(actualizarContador,1000);

// ===============================
// Galería automática
// ===============================

const galeria=document.querySelector(".galeria-grid");

if(galeria){

    for(let i=1;i<=15;i++){

        const img=document.createElement("img");

        img.src=`imagenes/foto${i}.jpg`;

        img.alt=`Foto ${i}`;

        galeria.appendChild(img);

    }

}

// ===============================
// Carrusel
// ===============================

let posicion=0;

setInterval(()=>{

    if(!galeria) return;

    posicion+=300;

    if(posicion>=galeria.scrollWidth-galeria.clientWidth){

        posicion=0;

    }

    galeria.scrollTo({

        left:posicion,

        behavior:"smooth"

    });

},2500);

// ===============================
// Animación video
// ===============================

const video=document.querySelector(".video");

if(video){

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

video.classList.add("visible");

}

});

},{threshold:.3});

observer.observe(video);

}

// ===============================
// Modal Confirmación
// ===============================

const modal=document.getElementById("modalConfirmacion");

const cerrar=document.getElementById("cerrarModal");

const boton=document.querySelector(".confirmacion .btn-confirmar");

if(boton){

boton.addEventListener("click",(e)=>{

e.preventDefault();

modal.classList.add("activo");

});

}

if(cerrar){

cerrar.addEventListener("click",()=>{

modal.classList.remove("activo");

});

}

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("activo");

}

});
