var juegos = [
  {
    "titulo":"Dark Souls",
    "descripcion":"Es un juego muy dificl",
    "fecha_lanzamiento":new Date("2012-11-25"),
    "genero":"RPG",
    "plataformas":["XBOX", "PC", "PlayStation"],
    "numVentas":8,
    "comentarios":["Maravilloso", "Demasiado Dificil", "Un poco Caro"]
  },
  {
    "titulo":"Skyrim",
    "descripcion":"Es un juego RPG de Bethesda",
    "fecha_lanzamiento":new Date("2012-07-14"),
    "genero":"RPG",
    "plataformas":["XBOX", "PC", "PlayStation"],
    "numventas":3,
    "comentarios":["Un rollo", "Dos Rollos", "Tres rollos"]
  },
  {
    "titulo":"FIFA 20",
    "descripcion":"Es un juego de deporte",
    "fecha_lanzamiento":new Date("2020-01-14"),
    "genero":"Deportes",
    "plataformas":["XBOX", "PlayStation"],
    "numventas":20,
    "comentarios":["Un rollo", "Dos Rollos", "Tres rollos"]
  },
  {
    "titulo":"Resident Evil 2",
    "descripcion":"Es un juego de miedo",
    "fecha_lanzamiento":new Date("2020-03-15"),
    "genero":"Accion",
    "plataformas":["PC", "PlayStation"],
    "numventas":20,
    "comentarios":["Un rollo", "Dos Rollos", "Tres rollos"]
  },
  {
    "titulo":"Megaman",
    "descripcion":"Es un juego de disparos",
    "fecha_lanzamiento":new Date("1987-03-15"),
    "genero":"Accion",
    "plataformas":["PC",],
    "numventas":6584,
    "comentarios":["Un rollo", "Dos Rollos", "Tres rollos"]
  },
  {
    "titulo":"SuperMan",
    "descripcion":"Es un juego de superman",
    "fecha_lanzamiento":new Date("1961-03-20"),
    "genero":"Accion",
    "plataformas":["Nintendo64",],
    "numventas":2,
    "comentarios":["Un rollo", "Dos Rollos", "Tres rollos"]
  },
  {
    "titulo":"Kirby",
    "descripcion":"Es un juego de Kirby",
    "fecha_lanzamiento":new Date("2004-05-15"),
    "genero":"Aventura",
    "plataformas":["Nintendo DS",],
    "numventas":56,
    "comentarios":["Un rollo", "Dos Rollos", "Tres rollos"]
  },
  {
    "titulo":"Warframe",
    "descripcion":"Es un juego de ninjas en el espacio",
    "fecha_lanzamiento":new Date("2014-07-21"),
    "genero":"Accion",
    "plataformas":["PC", "XBOX", "Plasytation"],
    "numventas":35618,
    "comentarios":["Es Gratis", "Muy gratis", "Puta mierda"]
  },
  {
    "titulo":"Chaka-Pang",
    "descripcion":"Es un juego creado por Ibai, una aventura epica con una historia unica",
    "fecha_lanzamiento":new Date("2021-03-08"),
    "genero":["Aventura", "Shooter", "Accion", "ASMR Visual"],
    "plataformas":["PC",],
    "numventas":1,
    "comentarios":["Juego Maravilloso", "Super divertido, jugabilidad e historia unica", "Puta mierda"]
  }
];

db = connect("localhost:27017/admin");
db.auth('almi', 'Almi123');
db = db.getSiblingDB('juegAlmi');

db.juegos.insert(juegos);
