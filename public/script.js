const boton = document.getElementById("cargar");
const lista = document.getElementById("lista");

boton.addEventListener("click", async() =>{
    //El cliente pide los datos al servidor
    const respuesta = await fetch('/api/cursos');
    //La respuesta se convierte en un arreglo de objetos
    //await espera la respuesta sin congelar la pantalla
    const cursos = await respuesta.json();
    //Se muestran la lista de cursos
    lista.innerHTML = "";
    //Recorre la lista de cursos y crea un <li> para cada uno
    cursos.forEach(curso => {
        lista.innerHTML += `<li>${curso.nombre} - ${curso.creditos} créditos</li>`
    });
})