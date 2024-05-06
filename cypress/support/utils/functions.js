export function createRamdomEmail() {
    const numberRandom = Math.floor(Math.random() * 1000) + 1;
    const names = ["john", "emma", "alex", "sophia", "mike", "lucy", "david", "olivia"];
    const randomNames = names[Math.floor(Math.random() * names.length)];
    const randomUserName = randomNames + numberRandom + '@yopmail.com'
    return randomUserName;
}


export function listNameUser() {
    const nombres = [
        "Juan Carlos", "Yan Harold", "María José", "Luis Miguel", "Ana María",
        "Carlos Andrés", "Laura Sofía", "Diego Alejandro", "Paula Andrea", "José Luis",
        "Camila Fernanda", "Andrés Felipe", "Valentina Isabel", "Pedro Antonio", "Daniela Alejandra",
        "Javier Eduardo", "Sara Daniela", "Felipe Ignacio", "Natalia Patricia", "Juan Sebastián",
        "Marcela Beatriz", "Mateo Esteban", "Mónica Marcela", "Julio César", "Carolina Andrea",
        "Miguel Ángel", "Isabela Sofía", "Germán Alonso", "Verónica Lucía", "Gabriel Alejandro",
        "Adriana Carolina", "Hernando José", "Diana Marcela", "Manuel José", "Erika Paola",
        "Jorge Iván", "Fabiola Patricia", "Ricardo Antonio", "Lina María", "Mario Alberto",
        "Lucía Fernanda", "Santiago Andrés", "Martha Elena", "César Augusto", "Clara Isabel",
        "Fernando José", "Paulina Andrea", "Alberto Enrique", "Estefanía Alejandra", "Cristian David"
    ];

    const randomName = nombres[Math.floor(Math.random() * nombres.length)];
    const randomNameUser = randomName;
    return randomNameUser;
}

export function listLastnameUser() {
    const apellidos = [
        "García López", "Rodríguez Martínez", "Fernández Pérez", "González Sánchez", "Martínez López",
        "Sánchez Pérez", "Pérez Gómez", "López Martínez", "Martín Sánchez", "Serrano Gutiérrez",
        "Romero Alonso", "Suárez Díaz", "Torres Ramos", "Díaz Ruiz", "Pérez Muñoz",
        "Gil Romero", "Jiménez Navarro", "Ruiz Vázquez", "Vázquez Guerrero", "Santos Castillo",
        "Castro Rubio", "Herrera Molina", "Molina Gómez", "Ortega Delgado", "Reyes Romero",
        "Ramírez Medina", "Navarro Prieto", "Gutiérrez Ruiz", "Vidal Cabrera", "Cabrera Cruz",
        "Cruz Santos", "Sanchez Navarro", "Prieto Ortega", "Iglesias Vidal", "Cabrera Díaz",
        "Delgado Serrano", "Reyes López", "Gómez Ramírez", "Cruz Castro", "Blanco Herrera",
        "Méndez Castro", "Vázquez Jiménez", "Flores Iglesias", "Pascual Méndez", "Vega Blanco",
        "Soto Flores", "Hernández Vega", "Muñoz Pascual", "Fuentes Soto"
    ];
    const randomLastname = apellidos[Math.floor(Math.random() * apellidos.length)]
    const randomLastnameUser = randomLastname;
    return randomLastnameUser;
}