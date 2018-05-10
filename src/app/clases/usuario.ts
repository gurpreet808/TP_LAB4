export class Usuario {
    public id:number;
    public nombre:string;
    public apellido:string;
    public sexo:string;
    public nombreUsuario:string;
    public email:string;
    private clave:string;
    public fechaRegistro:string;

    constructor(nombreParam?:string, apellidoParam?:string, sexoParam?:string, nombreUsuarioParam?:string, emailParam?:string, claveParam?:string, fechaRegistroParam?:string){
        if (nombreParam) {
            this.nombre = nombreParam;            
        }
        if (apellidoParam) {
            this.apellido = apellidoParam;            
        }
        if (sexoParam) {
            this.sexo = sexoParam;            
        }
        if (nombreUsuarioParam) {
            this.nombreUsuario = nombreUsuarioParam;            
        }
        if (emailParam) {
            this.email = emailParam;            
        }
        if (claveParam) {
            this.clave = claveParam;            
        }
    }
}
