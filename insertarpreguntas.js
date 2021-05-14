
var preguntas = [
    {
        "categoria": "fol",
        "preguntas":
            [
                {
                    "imagen": "gatito.png",
                    "pregunta": "¿que son los equipos de proteccion individual?",

                    "respuestas": [
                        {
                            "respuesta": "epi y blas",
                            "correcta": false,
                        },
                        {
                            "respuesta": "epis",
                            "correcta": true,
                        },
                        {
                            "respuesta": "api",
                            "correcta": false
                        }
                    ],
                    "correccion": "equpos de protecion individual E.P.I.S, tontito",
                    "numAciertos": 50,
                    "numFallos": 20,
                },
                {
                    "imagen": "gatito2.jpg",
                    "pregunta": "que es el metodo cremallera?",
                    "categoria": "fol",
                    "respuestas": [
                        {
                            "respuesta": "sistema de salida de emergencia",
                            "correcta": true
                        },
                        {
                            "respuesta": "lo que llevan las chaquetas",
                            "correcta": false
                        },
                        {
                            "respuesta": "algun grupo de rock suave",
                            "correcta": false
                        }
                    ],
                    "correccion": "es un sistema de salida organiza en caso de emergencia",
                    "numAciertos": 50,
                    "numFallos": 20,
                },
                {
                    "imagen": "gatito3.jpg",
                    "pregunta": "en caso de incendio?",
                    "categoria": "fol",
                    "respuestas": [
                        {
                            "respuesta": "seguir a jon que sabe lo que hace",
                            "correcta": false
                        },
                        {
                            "respuesta": "no seguir a jon que es terrorista",
                            "correcta": false
                        },
                        {
                            "respuesta": "jon terrorista",
                            "correcta": true
                        }
                    ],
                    "correccion": "es un sistema de salida organiza en caso de emergencia",
                    "numAciertos": 50,
                    "numFallos": 20,
                }
            ]
    },
    {
        "categoria": "terrorismo",
        "preguntas":
            [
                {
                    "imagen": "gatito.png",
                    "pregunta": "¿que son los equipos de proteccion individual?",

                    "respuestas": [
                        {
                            "respuesta": "epi y blas",
                            "correcta": false,
                        },
                        {
                            "respuesta": "epis",
                            "correcta": true,
                        },
                        {
                            "respuesta": "api",
                            "correcta": false
                        }
                    ],
                    "correccion": "equpos de protecion individual E.P.I.S, tontito",
                    "numAciertos": 50,
                    "numFallos": 20,
                },
                {
                    "imagen": "gatito2.jpg",
                    "pregunta": "que es el metodo cremallera?",
                    "categoria": "fol",
                    "respuestas": [
                        {
                            "respuesta": "sistema de salida de emergencia",
                            "correcta": true
                        },
                        {
                            "respuesta": "lo que llevan las chaquetas",
                            "correcta": false
                        },
                        {
                            "respuesta": "algun grupo de rock suave",
                            "correcta": false
                        },
                        {
                            "respuesta": "seguir a jon que sabe lo que hace",
                            "correcta": false
                        },
                    ],
                    "correccion": "es un sistema de salida organiza en caso de emergencia",
                    "numAciertos": 50,
                    "numFallos": 20,
                },
                {
                    "imagen": "gatito3.jpg",
                    "pregunta": "en caso de incendio?",
                    "categoria": "fol",
                    "respuestas": [
                        
                        {
                            "respuesta": "no seguir a jon que es terrorista",
                            "correcta": false
                        },
                        {
                            "respuesta": "jon terrorista",
                            "correcta": true
                        }
                    ],
                    "correccion": "es un sistema de salida organiza en caso de emergencia",
                    "numAciertos": 50,
                    "numFallos": 20,
                }
            ]
    },

];
var puntuacion = [
    {
        'nick':'el pepe',
        'puntuacion':10000
    },
    {
        'nick':'el pepi',
        'puntuacion':9000
    },
    {
        'nick':'el pepo',
        'puntuacion':7000
    },
    {
        'nick':'el pipo',
        'puntuacion':8000
    },
    {
        'nick':'el pipi',
        'puntuacion':6000
    },
    {
        'nick':'el papa',
        'puntuacion':1000
    },
    {
        'nick':'el popo',
        'puntuacion':4000
    },
    {
        'nick':'el pepe',
        'puntuacion':2000
    },
    {
        'nick':'el papu',
        'puntuacion':3000
    },
    {
        'nick':'el pupu',
        'puntuacion':5000
    },
];

db = connect("localhost:27017/admin");
db.auth('Almi', 'Almi123');
db = db.getSiblingDB('kalmihoott');
db.preguntas.insert(preguntas);
db.puntuacion.insert(puntuacion);
