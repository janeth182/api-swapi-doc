'use strict';


/**
 * Registrar Nuevo Producto
 *
 * body Body  (optional)
 * no response value expected for this operation
 **/
exports.agregarProductoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Permite obtener listado de naves de la pelicula StarWars
 *
 * id BigDecimal codigo de la nave
 * returns List
 **/
exports.navesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "clase_nave_estelar" : "clase_nave_estelar",
  "velocidad_max_atmosferica" : 1.4658129805029452,
  "peliculas" : "peliculas",
  "pasajeros" : 5.962133916683182,
  "nombre" : "nombre",
  "modelo" : "modelo",
  "url" : "url",
  "costo_en_credito" : 0.8008281904610115,
  "pilotos" : "pilotos",
  "capacidad_carga" : 5.637376656633329,
  "mglt" : 2.3021358869347655,
  "longitud" : 6.027456183070403,
  "creado" : "creado",
  "editado" : "editado",
  "calificacion_hiperimpulsor" : "calificacion_hiperimpulsor",
  "fabricante" : "fabricante",
  "mensaje" : "mensaje",
  "tripulacion" : "tripulacion",
  "consumibles" : "consumibles"
}, {
  "clase_nave_estelar" : "clase_nave_estelar",
  "velocidad_max_atmosferica" : 1.4658129805029452,
  "peliculas" : "peliculas",
  "pasajeros" : 5.962133916683182,
  "nombre" : "nombre",
  "modelo" : "modelo",
  "url" : "url",
  "costo_en_credito" : 0.8008281904610115,
  "pilotos" : "pilotos",
  "capacidad_carga" : 5.637376656633329,
  "mglt" : 2.3021358869347655,
  "longitud" : 6.027456183070403,
  "creado" : "creado",
  "editado" : "editado",
  "calificacion_hiperimpulsor" : "calificacion_hiperimpulsor",
  "fabricante" : "fabricante",
  "mensaje" : "mensaje",
  "tripulacion" : "tripulacion",
  "consumibles" : "consumibles"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite obtener listado de las peliculas de StarWars
 *
 * id BigDecimal codigo de la pelicula
 * returns List
 **/
exports.peliculasIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "episodio_id" : 0.8008281904610115,
  "planetas" : [ ],
  "fecha_lanzamiento" : "fecha_lanzamiento",
  "director" : "director",
  "especies" : [ ],
  "titulo" : "titulo",
  "naves" : [ ],
  "vehiculos" : [ ],
  "url" : "url",
  "rastreo_apertura" : "rastreo_apertura",
  "productora" : "productora",
  "creado" : "creado",
  "personajes" : [ ],
  "editado" : "editado",
  "mensaje" : "mensaje"
}, {
  "episodio_id" : 0.8008281904610115,
  "planetas" : [ ],
  "fecha_lanzamiento" : "fecha_lanzamiento",
  "director" : "director",
  "especies" : [ ],
  "titulo" : "titulo",
  "naves" : [ ],
  "vehiculos" : [ ],
  "url" : "url",
  "rastreo_apertura" : "rastreo_apertura",
  "productora" : "productora",
  "creado" : "creado",
  "personajes" : [ ],
  "editado" : "editado",
  "mensaje" : "mensaje"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite obtener listado de los personajes de la pelicula StarWars
 *
 * id BigDecimal codigo del personaje
 * returns List
 **/
exports.personasIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "mundo_natal" : "mundo_natal",
  "peliculas" : [ ],
  "color_ojos" : "color_ojos",
  "especies" : [ ],
  "color_pelo" : "color_pelo",
  "nave_estelar" : [ ],
  "alto" : 0.8008281904610115,
  "vehiculo" : [ ],
  "anio_nacimiento" : 1.4658129805029452,
  "nombre" : "nombre",
  "url" : "url",
  "masa" : 6.027456183070403,
  "creado" : "creado",
  "editado" : "editado",
  "genero" : "genero",
  "mensaje" : "mensaje"
}, {
  "mundo_natal" : "mundo_natal",
  "peliculas" : [ ],
  "color_ojos" : "color_ojos",
  "especies" : [ ],
  "color_pelo" : "color_pelo",
  "nave_estelar" : [ ],
  "alto" : 0.8008281904610115,
  "vehiculo" : [ ],
  "anio_nacimiento" : 1.4658129805029452,
  "nombre" : "nombre",
  "url" : "url",
  "masa" : 6.027456183070403,
  "creado" : "creado",
  "editado" : "editado",
  "genero" : "genero",
  "mensaje" : "mensaje"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite obtener listado de los planetas de la pelicula StarWars
 *
 * id BigDecimal codigo del planeta
 * returns List
 **/
exports.planetasIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "diametro" : 1.4658129805029452,
  "peliculas" : [ ],
  "nombre" : "nombre",
  "periodo_rotacion" : 0.8008281904610115,
  "url" : "url",
  "residentes" : [ ],
  "gravedad" : "gravedad",
  "creado" : "creado",
  "editado" : "editado",
  "superficie_agua" : 5.962133916683182,
  "periodo_orbital" : 6.027456183070403,
  "poblacion" : 5.637376656633329,
  "terreno" : "terreno"
}, {
  "diametro" : 1.4658129805029452,
  "peliculas" : [ ],
  "nombre" : "nombre",
  "periodo_rotacion" : 0.8008281904610115,
  "url" : "url",
  "residentes" : [ ],
  "gravedad" : "gravedad",
  "creado" : "creado",
  "editado" : "editado",
  "superficie_agua" : 5.962133916683182,
  "periodo_orbital" : 6.027456183070403,
  "poblacion" : 5.637376656633329,
  "terreno" : "terreno"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite obtener el listado de los productos
 *
 * returns List
 **/
exports.productosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_proveedor" : 0.8008281904610115,
  "precio" : 1.4658129805029452,
  "estado" : 5.637376656633329,
  "id_categoria" : 6.027456183070403,
  "nombre_producto" : "nombre_producto",
  "fecha_actualizacion" : "fecha_actualizacion",
  "stock" : 5.962133916683182,
  "fecha_creacion" : "fecha_creacion",
  "idproducto" : "idproducto"
}, {
  "id_proveedor" : 0.8008281904610115,
  "precio" : 1.4658129805029452,
  "estado" : 5.637376656633329,
  "id_categoria" : 6.027456183070403,
  "nombre_producto" : "nombre_producto",
  "fecha_actualizacion" : "fecha_actualizacion",
  "stock" : 5.962133916683182,
  "fecha_creacion" : "fecha_creacion",
  "idproducto" : "idproducto"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite obtener el listado de los recursos relacionados a la pelicula StarWars
 *
 * returns List
 **/
exports.recursosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "planetas" : "planetas",
  "naves_estelares" : "naves_estelares",
  "peliculas" : "peliculas",
  "especies" : "especies",
  "mensaje" : "mensaje",
  "personas" : "personas",
  "vehiculos" : "vehiculos"
}, {
  "planetas" : "planetas",
  "naves_estelares" : "naves_estelares",
  "peliculas" : "peliculas",
  "especies" : "especies",
  "mensaje" : "mensaje",
  "personas" : "personas",
  "vehiculos" : "vehiculos"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

