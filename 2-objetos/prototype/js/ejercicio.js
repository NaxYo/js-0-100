// Añade al objeto String el metodo espaciar() con la funcionalidad deseada

String.prototype.espaciar = function () {
    return (this.split("", this.length)).join(" ");
};

console.log('Esto es una prueba'.espaciar());
console.log(String('Y esto es otra prueba').espaciar());