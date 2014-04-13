JavaScript de 0 a 100
=====================

Objetos
-------

### Herencia de objetos e introducción de canvas&video tags

El objetivo de este ejercicio es crear un tipo de referencia (BWFilter) que herede de una clase ya implementada y sobreescriba su método ApplyFilter de modo que la copia del vídeo se visualice en blanco y negro.

### ¿Cómo?

Basandonos en el patrón básico de herencia (transparencias de la segunda sesión) realizaremos la herencia prototipada e implementaremos el método ApplyFilter.

**Nota:** La idea es completar solo el archivo ejercicio.js, aunque no vendría nada mal echar un ojo al objeto VideoFilter. VideoFilter se encuentra implementado, pero suele ser mejor conocer la totalidad del programa.

### QUIETOPARAO

En este ejercicio usamos un vídeo de ejemplo. Muchos navegadores lanzarán una excepción de seguridad si intentamos modificar los datos del vídeo (Unable to get image data from canvas because the canvas has been tainted by cross-origin data) **para evitar esto podemos hospedar el ejercicio en cualquier servidor http (incluso servidor local), o podemos desactivar temporalmente la seguridad de nuestro chrome

	chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

	chromium-browser --disable-web-security

O similar...


### ¿Dónde?

Como explicamos en la raiz de este repositorio puedes hacerlo de muchas maneras: con git, descargando un .zip

### Te puede venir bien

[Algoritmo básico de blanco y negro](http://spyrestudios.com/html5-canvas-image-effects-black-white/), [mina de oro para todos estos temas](http://chimera.labs.oreilly.com/books/1234000001654/ch06.html)

