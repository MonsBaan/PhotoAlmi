var contenido = [
    {
        "titulo":"DocumentAlmi",
        "tipo":"Documental",
        "descripcion":"Es un documental basado en el centro de estudios almi",
        "valoraciones": [
            {
                "nick": "Eghds",
                "puntuacion": 6,
                "comentario": "Me parece bien"
            }
        ],
        "generos":["Accion","Drama"],
        "reproducciones":6473,
        "premios":["Almi3000",],
        "duracion":120,
        "director":"Ander Almi",
        "expertos":[
            {
                "nombre":"Arnold",
                "apellido1":"Schwarzenagger",
                "apellido2":"DeMiCasa",
                "cargo": "Hombre Musculoso"
            },
        ]
    },
    {
        "titulo":"Chaka-Pang el Documental",
        "tipo":"Documental",
        "descripcion":"El galardonado juego chaka-pang hace un documental sobre su historia",
        "valoraciones": [
            {
                "nick": "NoEsIbai",
                "puntuacion": 10,
                "comentario": "10/10"
            }
        ],
        "generos":["Accion","Aventura"],
        "reproducciones":5256,
        "premios":["MalMi12",],
        "duracion":200,
        "director":"Ibai Marin",
        "expertos":[
            {
                "nombre":"Ibai",
                "apellido1":"Marin",
                "apellido2":"Muñoz",
                "cargo": "Creador de Chaka-Pang"
            },
        ]
    }

];


db = connect("localhost:27017/admin");
db.auth('almi', 'Almi123');
db = db.getSiblingDB('NetAlmix');

db.contenido.insert(contenido);




/*
    {
        "titulo":"",
        "tipo":"Documental",
        "descripcion":"",
        "valoraciones": [
            {
                "nick": "",
                "puntuacion": 0,
                "comentario": ""
            }
        ],
        "generos":["",],
        "reproducciones":0,
        "premios":["",],
        "duracion":0,
        "director":"",
        "expertos":[
            {
                "nombre":"",
                "apellido1":"",
                "apellido2":"",
                "cargo": ""
            },
        ]
    }


*/