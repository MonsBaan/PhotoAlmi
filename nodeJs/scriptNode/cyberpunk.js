var personajes = [
    //Nombre, Apellidos, Clase (Solo, Tech, Netrunner), LVLCaracteristicas (CON, INT, TEM, TEC, REF), Equipo
    {
        "nombre": "Eles",
        "apellido1": "Nmuy",
        "apellido2": "Nuevo",
        "clase": "Netrunner",
        "caracteristicas":
        {
            "constitucion": 0,
            "inteligencia": 0,
            "temple": 0,
            "tecnica": 0,
            "reflejos": 0
        },
        "equipo":
        {

            "armas":
                [
                    {
                        "tipo": "Pistola",
                        "daño": 0,
                        "cargador": 0,
                        "calibre": 0
                    },

                ],


            "blindaje":
                [
                    {
                        "zona": "Cabeza",
                        "proteccion": 0
                    },
                    {
                        "zona": "Pecho",
                        "proteccion": 0
                    },
                    {
                        "zona": "Piernas",
                        "proteccion": 0
                    }
                ],


            "otros":
                [
                    {
                        "nombre": "Botella",
                        "descripcion": "Es una botella de agua vacia"
                    },
                    {
                        "nombre": "Gancho",
                        "descripcion": "Es una gancho"
                    },
                    {
                        "nombre": "Cura",
                        "descripcion": "Es una pincho que cura"
                    }
                ]


        }
    },
    {
        "nombre": "Richard",
        "apellido1": "Alvarez",
        "apellido2": "Fances",
        "clase": "Techie",
        "caracteristicas":
        {
            "constitucion": 5,
            "inteligencia": 7,
            "temple": 6,
            "tecnica": 8,
            "reflejos": 4
        },
        "equipo":
            [
                {
                    "armas":
                        [
                            {
                                "tipo": "Subfusil",
                                "daño": 5,
                                "cargador": 25,
                                "calibre": 9
                            },

                        ],
                },
                {
                    "blindaje":
                        [
                            {
                                "zona": "Cabeza",
                                "proteccion": 0
                            },
                            {
                                "zona": "Pecho",
                                "proteccion": 10
                            },
                            {
                                "zona": "Piernas",
                                "proteccion": 7
                            }
                        ]
                },
                {
                    "otros":
                        [
                            {
                                "nombre": "Botella",
                                "descripcion": "Es una botella de agua vacia"
                            },
                            {
                                "nombre": "Gancho",
                                "descripcion": "Es una gancho"
                            },
                            {
                                "nombre": "Cura",
                                "descripcion": "Es una pincho que cura"
                            }
                        ]
                }

            ]
    },
    {
        "nombre": "Albert",
        "apellido1": "Furlge",
        "apellido2": "Grutel",
        "clase": "Solo",
        "caracteristicas":
        {
            "constitucion": 8,
            "inteligencia": 5,
            "temple": 7,
            "tecnica": 4,
            "reflejos": 9
        },
        "equipo":
            [
                {
                    "armas":
                        [
                            {
                                "tipo": "Escopeta",
                                "daño": 14,
                                "cargador": 7,
                                "calibre": 12
                            },

                        ],
                },
                {
                    "blindaje":
                        [
                            {
                                "zona": "Cabeza",
                                "proteccion": 5
                            },
                            {
                                "zona": "Pecho",
                                "proteccion": 15
                            },
                            {
                                "zona": "Piernas",
                                "proteccion": 7
                            }
                        ]
                },
                {
                    "otros":
                        [
                            {
                                "nombre": "Botella",
                                "descripcion": "Es una botella de agua vacia"
                            },
                            {
                                "nombre": "Gancho",
                                "descripcion": "Es una gancho"
                            },
                            {
                                "nombre": "Cura",
                                "descripcion": "Es una pincho que cura"
                            }
                        ]
                }

            ]
    },
    {
        "nombre": "Bruces",
        "apellido1": "Mayles",
        "apellido2": "Frailes",
        "clase": "Netrunner",
        "caracteristicas":
        {
            "constitucion": 3,
            "inteligencia": 10,
            "temple": 12,
            "tecnica": 6,
            "reflejos": 5
        },
        "equipo":
            [
                {
                    "armas":
                        [
                            {
                                "tipo": "Pistola",
                                "daño": 10,
                                "cargador": 7,
                                "calibre": 10
                            },
                            {
                                "tipo": "Escopeta",
                                "daño": 20,
                                "cargador": 7,
                                "calibre": 22
                            },
                            {
                                "tipo": "Fusil",
                                "daño": 2,
                                "cargador": 100,
                                "calibre": 1
                            },
                        ],
                },
                {
                    "blindaje":
                        [
                            {
                                "zona": "Cabeza",
                                "proteccion": 2
                            },
                            {
                                "zona": "Pecho",
                                "proteccion": 7
                            },
                            {
                                "zona": "Piernas",
                                "proteccion": 2
                            }
                        ]
                },
                {
                    "otros":
                        [
                            {
                                "nombre": "Botella",
                                "descripcion": "Es una botella de agua vacia"
                            },
                            {
                                "nombre": "Gancho",
                                "descripcion": "Es una gancho"
                            },
                            {
                                "nombre": "Cura",
                                "descripcion": "Es una pincho que cura"
                            }
                        ]
                }

            ]
    },
    {
        "nombre": "Grender",
        "apellido1": "Linder",
        "apellido2": "Fender",
        "clase": "Solo",
        "caracteristicas":
        {
            "constitucion": 7,
            "inteligencia": 6,
            "temple": 6,
            "tecnica": 4,
            "reflejos": 10
        },
        "equipo":
            [
                {
                    "armas":
                        [
                            {
                                "tipo": "Fusil",
                                "daño": 20,
                                "cargador": 30,
                                "calibre": 15
                            },

                        ],
                },
                {
                    "blindaje":
                        [
                            {
                                "zona": "Cabeza",
                                "proteccion": 7
                            },
                            {
                                "zona": "Pecho",
                                "proteccion": 10
                            },
                            {
                                "zona": "Piernas",
                                "proteccion": 2
                            }
                        ]
                },
                {
                    "otros":
                        [
                            {
                                "nombre": "Botella",
                                "descripcion": "Es una botella de agua vacia"
                            },
                            {
                                "nombre": "Gancho",
                                "descripcion": "Es una gancho"
                            },
                            {
                                "nombre": "Cura",
                                "descripcion": "Es una pincho que cura"
                            }
                        ]
                }

            ]
    },
    {
        "nombre": "Jhon",
        "apellido1": "Burden",
        "apellido2": "Alfred",
        "clase": "Techie",
        "caracteristicas":
        {
            "constitucion": 4,
            "inteligencia": 6,
            "temple": 4,
            "tecnica": 9,
            "reflejos": 7
        },
        "equipo":
            [
                {
                    "armas":
                        [
                            {
                                "tipo": "Pistola",
                                "daño": 5,
                                "cargador": 12,
                                "calibre": 9
                            },

                        ],
                },
                {
                    "blindaje":
                        [
                            {
                                "zona": "Cabeza",
                                "proteccion": 3
                            },
                            {
                                "zona": "Pecho",
                                "proteccion": 4
                            },
                            {
                                "zona": "Piernas",
                                "proteccion": 5
                            }
                        ]
                },
                {
                    "otros":
                        [
                            {
                                "nombre": "Botella",
                                "descripcion": "Es una botella de agua vacia"
                            },
                            {
                                "nombre": "Gancho",
                                "descripcion": "Es una gancho"
                            },
                            {
                                "nombre": "Cura",
                                "descripcion": "Es una pincho que cura"
                            }
                        ]
                }

            ]
    },
    {
        "nombre": "Win",
        "apellido1": "Dows",
        "apellido2": "NoMola",
        "clase": "Solo",
        "caracteristicas":
        {
            "constitucion": 9,
            "inteligencia": 2,
            "temple": 8,
            "tecnica": 3,
            "reflejos": 7
        },
        "equipo":
            [
                {
                    "armas":
                        [
                            {
                                "tipo": "Arma Pesada",
                                "daño": 20,
                                "cargador": 100,
                                "calibre": 50
                            },

                        ],
                },
                {
                    "blindaje":
                        [
                            {
                                "zona": "Cabeza",
                                "proteccion": 10
                            },
                            {
                                "zona": "Pecho",
                                "proteccion": 15
                            },
                            {
                                "zona": "Piernas",
                                "proteccion": 10
                            }
                        ]
                },
                {
                    "otros":
                        [
                            {
                                "nombre": "Botella",
                                "descripcion": "Es una botella de agua vacia"
                            },
                            {
                                "nombre": "Gancho",
                                "descripcion": "Es una gancho"
                            },
                            {
                                "nombre": "Cura",
                                "descripcion": "Es una pincho que cura"
                            }
                        ]
                }

            ]
    },
];

db = connect("localhost:27017/admin");
db.auth('almi', 'Almi123');
db = db.getSiblingDB('Cyberpunk');

db.personajes.insert(personajes);
