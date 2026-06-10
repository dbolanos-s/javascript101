/**
 * TO-DO: 
 * Agregue "use strict"; al inicio de su archivo JavaScript para activar el modo estricto.
 * El modo estricto ayuda a detectar errores comunes y mejora la seguridad del código.
 * Referencia: https://javascript.info/strict-mode
 */
"use strict";



/** 
 * TO-DO: 
 * Importe la función setTitle desde el archivo functions.js.
 * Referencia: https://javascript.info/import-export
 */
import { setTitle } from "./functions.js";



/** 
 * TO-DO: 
 * Asigne a la variable local pageTitle (título de la página) con el valor: "Datos comparativos de frameworks JavaScript modernos"
 * Asigne a la variable local pageId (ID del elemento HTML donde se mostrará el título) con el valor: "title".
 * Referencia: https://javascript.info/variables
 */
const pageTitle = "Datos comparativos de frameworks JavaScript modernos";
const pageId = "title";



// TO-DO: Llama a la función setTitle para establecer el contenido del elemento HTML con el ID especificado
setTitle(pageId, pageTitle);