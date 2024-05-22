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

export function selectOrientedTo() {
    const listOrientedTo = ['Derechos humanos', 'Género', 'Orientaciones sexuales e identidad de género diversas',
        'Curso de la vida', 'Diferencial', 'Étnico', 'Interseccionalidad', 'Territorial', 'Fronterizo y migratorio', 'Criminológico']
    const indexOriented = listOrientedTo[Math.floor(Math.random() * listOrientedTo.length)];
    const randomOriented = indexOriented;
    return randomOriented;
}

export function selectTipeVictimary() {
    const listTypeVictimary = ['Persona', 'Organización', 'Red']
    const indexTypeVictymary = listTypeVictimary[Math.floor(Math.random() * listTypeVictimary.length)];
    const randomTypeVictimary = indexTypeVictymary;
    return randomTypeVictimary;
}

export function selectTipeServices() {
    const listTypeServices = ['Protección', 'Regulación – documentación', 'Repatriación', 'Comunicación (llamadas)', 'Traslado (transporte)',
        'Alojamiento', 'Kit de aseo', 'Kit de vestuario', 'Atención médica', 'Asistencia psicosocial',
        'Asistencia legal', 'Asistencia seguridad social', 'Programa de inclusión sobrevivientes'];
    const indexTypeServices = listTypeServices[Math.floor(Math.random() * listTypeServices.length)];
    const randomTypeServices = indexTypeServices;
    return randomTypeServices;
}

export function selectInstitutes(){
    const listInstitutes = ['Ministerio del trabajo', 'Consejería presidencial para la equidad de la mujer', 
        'Empresa privada - particular', 'Fundación - ongs',' Comité departamental de lucha contra la trata', 'Sijin', 
        'Secretaría de salud', 'Defensoría del pueblo', 'Instituto colombiano debienestar familiar', 
        'Comité municipal de lucha contra la trata', 'Ministerio de educación nacional', 'Procuraduría general de la nación', 
        'Ministerio de justicia y del derecho', 
        'Consulado', 'Ministerio del interior', 'Cancillería', 'Unidad de información y análisis financiero - uiaf', 
        'Interpol', 'Ministerio de defensa nacional', 'Migración colombia', 'Dijin', 'Policía nacional',
        'Fiscalía general de la nación', 
        'Consejería presidencial para los derechos humanos y asuntos internacionales', 
        'Ministerio de comercio', 'Industria y turismo', 'Ministerio de relaciones exteriores']
    const indexInstitutes = listInstitutes [Math.floor(Math.random(Math.random() * listInstitutes.length))];
    const randomInstitutes = indexInstitutes;
    return randomInstitutes;
}

export function selectTypeDocument() {
    const listTypeDocument = ['Cédula de Ciudadanía - CC',
        'Cédula de extranjería - CE',
        'Número Único de Identificación - NUIP',
        'Pasaporte - PAS',
        'Salvoconducto para refugiados - SVC',
        'Permiso Especial de Permanencia - PEP',
        'Permiso por Protección Temporal - PPT',
        'Sin documento - SD'];
    const indexTypeDocument = listTypeDocument[Math.floor(Math.random() * listTypeDocument.length)];
    const randomTypeDocumet = indexTypeDocument;
    return randomTypeDocumet;

}


export function selectRangeAllAges() {
    const listRangeAge = [
        '0-4', '5-9', '10-14', '15-19', '20-24',
        '25-29', '30-34', '35-39', '40-44', '45-49',
        '50-54', '55-59', '60-64', '65-69', '70-74',
        '75-79', '80-84', '85-89', '90-94', '95-99',
        '100+'
    ];
    const indexRangeAge = listRangeAge[Math.floor(Math.random() * listRangeAge.length)];
    const randomRangeAge = indexRangeAge;
    return randomRangeAge;
}


export function selectBirthDay() {
    const years = [
        '2024', '2023', '2022', '2021', '2020',
        '2019', '2018', '2017', '2016', '2015',
        '2014', '2013', '2012', '2011', '2010',
        '2009', '2008', '2007', '2006', '2005',
        '2004', '2003', '2002', '2001', '2000',
        '1999', '1998', '1997', '1996', '1995',
        '1994', '1993', '1992', '1991', '1990',
        '1989', '1988', '1987', '1986', '1985',
        '1984', '1983', '1982', '1981', '1980',
        '1979', '1978', '1977', '1976', '1975',
        '1974', '1973', '1972', '1971', '1970',
        '1969', '1968', '1967', '1966', '1965',
        '1964', '1963', '1962', '1961', '1960'
    ];
    const indexYear = years[Math.floor(Math.random() * years.length)]
    const ramdomyear = indexYear;

    const days = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28'
    ];
    const indexDays = days[Math.floor(Math.random() * days.length)]
    const randomDays = indexDays;

    const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12'
    ];
    const indexMonths = months[Math.floor(Math.random() * months.length)]
    const randomMonths = indexMonths;

    const randomDate = ramdomyear + '-' + randomMonths + '-' + randomDays;
    return randomDate;

}

export function selectCivilState() {

    const listCivilStates = [
        'Soltero(a)', 'Casado(a)', 'Pareja de hecho', 'Divorciado(a)', 'Viudo(a)'
    ];

    const indexState = listCivilStates[Math.floor(Math.random() * listCivilStates.length)];
    const ramdomState = indexState;
    return ramdomState;

}


export function selectIndentityGender() {
    const listIndentityGender = ['Femenino', 'Masculino', 'Cisgénero'];
    const indexGender = listIndentityGender[Math.floor(Math.random() * listIndentityGender.length)];
    const ramdomGender = indexGender;
    return ramdomGender;
}

export function selectSexualorientation() {
    const listSexualOrientation = ['Heterosexual', 'Gay', 'Otro'];
    const indexOrientation = listSexualOrientation[Math.floor(Math.random() * listSexualOrientation.length)];
    const ramdomorientation = indexOrientation;
    return ramdomorientation;
}

export function selectDisability() {
    const listDisabylity = ['Auditiva', 'Visual', 'Motora', 'Cognitiva', 'Múltiple', 'Ninguna'];
    const indexDisabilyty = listDisabylity[Math.floor(Math.random() * listDisabylity.length)];
    const randomDisability = indexDisabilyty;
    return randomDisability;
}
export function selectLanguage() {
    const listLanguage = [
        "Afrikáans", "Aimara", "Akan", "Albanés", "Alemán", "Amárico", "Árabe", "Armenio", "Asamés", "Azerbaiyano", "Bambara", "Bengalí", "Bhoyapurí", "Bielorruso", "Birmano", "Bosnio", "Búlgaro", "Canarés", "Catalán", "Cebuano", "Checo", "Chino", "Cingalés", "Coreano", "Corso", "Criollo haitiano", "Croata", "Danés", "Divehi", "Dogri", "Eslovaco", "Esloveno", "Español", "Esperanto", "Estonio", "Euskera", "Ewé", "Finés", "Francés", "Frisón occidental", "Gaélico escocés", "Galés", "Gallego", "Ganda", "Georgiano", "Goan Konkani", "Griego", "Guaraní", "Guyaratí", "Hausa", "Hawaiano", "Hebreo", "Hindi", "Hmong", "Húngaro", "Igbo", "Ilocano", "Indonesio", "Inglés", "Irlandés", "Islandés", "Italiano", "Japonés", "Javanés", "Jemer", "Kazajo", "Kinyarwanda", "Kirguís", "Krio", "Kurdo", "Kurdo sorani", "Lao", "Latín", "Letón", "Lingala", "Lituano", "Luxemburgués", "Macedonio", "Maithili", "Malayálam", "Malayo", "Malgache", "Maltés", "Manipurí (meitei)", "Maorí", "Maratí", "Mizo", "Mongol", "Neerlandés", "Nepalí", "Noruego", "Nyanja", "Oriya", "Oromo", "Pastún", "Persa", "Polaco", "Portugués", "Punyabí", "Quechua", "Rumano", "Ruso", "Samoano", "Sánscrito", "Serbio", "Shona", "Sindi", "Somalí", "Sotho meridional", "Sotho septentrional", "Suajili", "Sueco", "Sundanés", "Tagalo", "Tailandés", "Tamil", "Tártaro", "Tayiko", "Telugu", "Tigriña", "Tsonga", "Turco", "Turcomano", "Ucraniano", "Uigur", "Urdu", "Uzbeko", "Vietnamita", "Xhosa", "Yidis", "Yoruba", "Zulú"
    ]
    const indexLaguage = listLanguage[Math.floor(Math.random() * listLanguage.length)];
    const randomLanguage = indexLaguage;
    return randomLanguage;
}