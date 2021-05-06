#Hola
IP Inicial: 192.168.6.151
IP Final: 192.168.6.160

IP IBAI : 192.168.6.151
IP JON : 192.168.6.152
IP AITOR : 192.168.6.155
IP C con H: 192.168.6.154
IP C con _: 192.168.6.153
Colores:
  Base: #241121
  Contorno: #210C1F
  Relleno: #F2BC3F 

MySql: Control de Usuarios y Login de la Pagina Web
Usuarios
 ->Id_usuario
 ->Nombre
 ->DNI
 ->Imagen
 ->Contraseña (procedimiento creación contraseña al inicar sesión la primera vez)
 ->HorasTrabajadas (Reset mensual)
            ->TiempoTrabajo (procedimiento horas trabajo)

Puestos
 ->Id_puestos
 ->Cargo
 ->Salario (función caálculo de salario)

 

Mongo: 2 Colecciones
    Pregunta:  
    {
        Imagen: File,
        Pregunta: String,
        Categoria: String,
        Respuestas: 
        [{
                     respuesta: String,
                     correcta: boolean
        },
        {
                     respuesta: String,
                     correcta: boolean
        }],
        Correccion: String,
        NumAciertos: Number,
        NumFallos: Number
   }
               
   Puntuaciones: 
   {
        Nick: String,
        Puntuacion: Number,
	Dificultad: String
   }
   


   

