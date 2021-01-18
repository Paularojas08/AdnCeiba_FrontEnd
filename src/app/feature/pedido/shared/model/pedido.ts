import { DetallePedido } from "./detalle-pedido";

export class Pedido {
    id: number;
    identificadorSeguimiento: string;
    fechaPedido: Date
    fechaEnvio: Date
    precioTotal: number;
    estado: string;
    cedula: string;
    direccion: string;
    idUsuario: number;
    detallePedido: DetallePedido[];
}