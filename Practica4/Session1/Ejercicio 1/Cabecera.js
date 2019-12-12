function persona (nombre, apellidos, edad, email){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.email = email;
}
alejandro = new persona("Alejandro", "Matas Sánchez", 20, "UO264255");

function info  (asignatura, titulacion, centro, universidad, curso, estudiante){
    this.asignatura = asignatura;
    this.titulacion = titulacion;
    this.centro = centro;
    this.universidad = universidad;
    this.curso = curso;
    this.estudiante = estudiante
    this.getAsignatura = getAsignatura;
    this.getTitulacion = getTitulacion;
    this.getCentro = getCentro;
    this.getUniversidad = getUniversidad;
    this.getCurso = getCurso;
    this.getEstudiante = getEstudiante;
}

infoCabecera = new info("SEW", "Ingeniera de Software", "EII", "Universidad de Oviedo", "3ero", alejandro);

function getAsignatura(){
    return this.asignatura;
}

function getTitulacion(){
    return this.titulacion;
}

function getCentro(){
    return this.centro;
}

function getUniversidad(){
    return this.universidad;
}

function getCurso(){
    return this.curso;
}

function getEstudiante(){
    return estudiante;
}