export class Usuario {
    nombre: string;
    id: number;
    correo: string;

    constructor(id: number, nombre: string,correo:string) {
        this.id = id;
        this.nombre = nombre;
        this.correo=correo;
    }
}

