var auriculares = [
    //Marca, Modelo, Color, Potencia, Inalambrico o cableado, Version, Bluetooth, Alcance, Duracion Bateria
    {
        "marca":"Sony",
        "modelo":"Sony1",
        "color":"Negro",
        "potencia": 4,
        "inalambrico": true,
        "bluetooth": [3, ] ,
        "alcance": 12,
        "bateria": 6,
        "valoraciones": 
        [
        {
            "nick":"El Txema",
            "valoracion": 6,
            "comentario":" Van to flama"
        },
        {
            "nick":"S. Stallone",
            "valoracion": 10,
            "comentario":"GET TO THE CHOPPAH"
        }
        ]
    },
    {
        "marca":"Sony",
        "modelo":"Sony2",
        "color":"Azul",
        "potencia": 6,
        "inalambrico": true,
        "bluetooth": [4, 6],
        "alcance": 15,
        "bateria": 12,
        "valoraciones": 
        [
        {
            "nick":"Amber",
            "valoracion": 2,
            "comentario":"Huelen raro"
        },
        {
            "nick":"S. Stallone",
            "valoracion": 10,
            "comentario":"Rambo? Rambo's a pussy."
        }
        ]
    },
    {
        "marca":"Sony",
        "modelo":"Sony3",
        "color":"Negro",
        "potencia": 4,
        "inalambrico": false,
        "valoraciones": 
        [
        {
            "nick":"Fofer Fufer",
            "valoracion": 6,
            "comentario":"Servicio de limpieza pesimo, no los contrateis para limpiar sangre del suelo"
        },
        {
            "nick":"S. Stallone",
            "valoracion": 10,
            "comentario":"You're the disease, and I'm the cure."
        }
        ]
    },
    {
        "marca":"Panasonic",
        "modelo":"Panas1",
        "color":"Gris",
        "potencia": 8,
        "inalambrico": true,
        "bluetooth": [5, ],
        "alcance": 20,
        "bateria": 7,
        "valoraciones": 
        [
        {
            "nick":"Rubber Dubber",
            "valoracion": 7,
            "comentario":"Goma Bien"
        },
        {
            "nick":"Bin Bang",
            "valoracion": 2,
            "comentario":"No me gustaron nada"
        }
        ]
    },
    {
        "marca":"Panasonic",
        "modelo":"Panas2",
        "color":"Amarillo",
        "potencia": 3,
        "inalambrico": false,
        "valoraciones": 
        [
        {
            "nick":"Binder Banger",
            "valoracion": 10,
            "comentario":"Me gustaron los precios"
        },
        {
            "nick":"Hill Clinton",
            "valoracion": 4,
            "comentario":"No me gustaba como miraba bajo el escritorio"
        }
        ]
    },
    {
        "marca":"Panasonic",
        "modelo":"Panas3",
        "color":"Gris",
        "potencia": 8,
        "inalambrico": true,
        "bluetooth": [1, 3],
        "alcance": 20,
        "bateria": 7,
        "valoraciones": 
        [
        {
            "nick":"Ginger Cleaner",
            "valoracion": 8,
            "comentario":"Limpia jengibre perfectamente"
        },
        {
            "nick":"Mill Flinton",
            "valoracion": 6,
            "comentario":"Es bien"
        },
        {
            "nick":"S. Stallone",
            "valoracion": 10,
            "comentario":"Yo gustar"
        }
        ]
    },
    {
        "marca":"Bolgbi",
        "modelo":"Bolgbi1",
        "color":"Mesa",
        "potencia": 8,
        "inalambrico": true,
        "bluetooth": [4,],
        "alcance": 20,
        "bateria": 7,
        "valoraciones": 
        [
        {
            "nick":"Fl Flfls",
            "valoracion": 8,
            "comentario":"Fue una fuena confra"
        },
        {
            "nick":"Eau Ue Ueaoe",
            "valoracion": 2,
            "comentario":"No sigue las leyes de Fibonacci"
        },
        {
            "nick":"S. Stallone",
            "valoracion": 10,
            "comentario":"Yo gustar2"
        }
        ]
    },
    {
        "marca":"Somny",
        "modelo":"Somny12",
        "color":"Pared",
        "potencia": 8,
        "inalambrico": false,
        "valoraciones": 
        [
        {
            "nick":"Debimbo Bandebumbo",
            "valoracion": 7,
            "comentario":"Tengo un gatito en mi pecho"
        },
        ]
    },
    {
        "marca":"AKJ",
        "modelo":"AKJ3",
        "color":"Tierra",
        "potencia": 8,
        "inalambrico": true,
        "bluetooth": [4, 7, 9, 1],
        "alcance": 666,
        "bateria": 666,
        "valoraciones": 
        [
        {
            "nick":"Lou",
            "valoracion": 10,
            "comentario":"Facil de limpiar con la chorrimanguera"
        },
        ]
    }
  ];
  
  db = connect("localhost:27017/admin");
  db.auth('almi', 'Almi123');
  db = db.getSiblingDB('ElectronicAlmi');
  
  db.auriculares.insert(auriculares);
  