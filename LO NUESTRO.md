IP Inicial: 192.168.6.151
IP Final: 192.168.6.160

Colores:
  Base: #241121
  Contorno: #210C1F
  Relleno: #F2BC3F 

MySql: Control de Usuarios y Login de la Pagina Web
 ->Id_usuario
 ->SuperUsuario(boolean)
 ->Nick
 ->Imagen
 ->Contraseña



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
   


   
