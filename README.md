# Portafolio Profesional 

Mi Portafolio personal, navegación lateral fija y layout de dos columnas en las secciones de educación y contacto.

## Estructura

```
portafolio/
├── index.html                
├── .nojekyll                   
├── README.md
└── assets/
    ├── css/
    │   ├── variables.css       
    │   ├── base.css            
    │   ├── nav.css            
    │   └── sections.css        
    ├── js/
    │   └── main.js             
    └── img/
        ├── foto-perfil.jpg     
        └── proyectos/
            ├── proyecto1.jpg
            ├── proyecto2.jpg
            └── proyecto3.jpg
```

## Layout por sección

| Sección | Estructura |
|---|---|
| Hero | Texto izquierda + avatar derecha |
| Sobre mí | Bio izquierda / Stats derecha |
| Habilidades | Pills agrupados por categoría |
| Experiencia | Lista compacta con período / detalle |
| Proyectos | Filas horizontales: thumbnail + info |
| Educación + Contacto | Dos columnas en una sola pantalla |

## Personalización rápida

### Colores (`variables.css`)
- Fondo base: `--bg-base: #0D0F14`
- Acento: `--cyan-bright: #18C8E0`
