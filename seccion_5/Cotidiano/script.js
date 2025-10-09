let elementoEdad = document.getElementById("Edad");
let elementoTexto = document.getElementById("Recomendacion");


function Pelicula(Genero) {

    let Edad = parseInt(elementoEdad.value);
    let Pelicula = "";
    if (isNaN(Edad)) {
        alert("Ingresa su edad");
        return;
    }

    switch (Genero) {
        case 'Ciencia ficcion':
            if (Edad < 13) {
                Pelicula = "Star Wars";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "Transformers";
                } else
                    if (Edad >= 16) {
                        Pelicula = "El señor de los anillos";
                    } break;

        case 'Comedia':

            if (Edad < 13) {
                Pelicula = "Back to the Future";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "Son como niños";
                } else
                    if (Edad >= 16) {
                        Pelicula = "Y donde estan las rubias?";
                    } break;

        case 'Horror':

            if (Edad < 13) {
                Pelicula = "No hay opciones";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "Viernes 13";
                } else
                    if (Edad >= 16) {
                        Pelicula = "Terrifier";
                    } break;

        case 'Crimen':

            if (Edad < 13) {
                Pelicula = "No hay opciones";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "El Secreto de sus Ojos";
                } else
                    if (Edad >= 16) {
                        Pelicula = "The Godfather";
                    } break;
    }

    elementoTexto.textContent = "Recomendación: " + Pelicula;
}

function reiniciarRecomendacion() {
    elementoEdad.value = ""; // 
    elementoTexto.textContent = "Recomendación: "; 
}