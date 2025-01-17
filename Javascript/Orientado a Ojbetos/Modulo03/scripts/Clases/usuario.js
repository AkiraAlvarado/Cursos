export default class Usuario {
  constructor(nombres, apellidos, correo, activo) {
    this.nombres = nombres,
      this.apellidos = apellidos,
      this.correo = correo,
      this.activo = activo
  }
  presentarse() {
    return `Hola , soy ${this.nombres} y mi correo es : ${this.activo.correo}`
  }

  getNombres() {
    return this.nombres
  }
  getApellidos() {
    return this.apellidos
  }

  getCorreo() {
    return this.correo
  }
  gettipoUsuario() {
    return this.tipoUsuario
  }

  setApellidos(nuevosApellidos) {
    this.apellidos = nuevosApellidos
  }
}