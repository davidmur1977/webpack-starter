import '../css/componentes.css';

//export se pone para indicar que puedo usar la funcion en otros modulos
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');

    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);
}