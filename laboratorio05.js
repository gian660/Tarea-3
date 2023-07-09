/* Definiar una clase */
class Veterinaria {

    /* Declarar atributos */
    cantidad = 1;
    catBaño = "Solo baño";
    catPelaje = "Rizado";
    catTamaño = "Mini";

    /* Definir métodos */
    pago1() {
        let pagoBaño;
        switch (this.catBaño) {
            case "btnBaño":
                pagoBaño = 30;
                break;
            case "btnBañoCorte":
                pagoBaño = 50;
                break;
            default:
                pagoBaño = 0;
                break;
        }
        return pagoBaño;
    }

    pago2() {
        let pagoTamaño;
        switch (this.catTamaño) {
            case "Mini":
                pagoTamaño = 0;
                break;
            case "Pequeño":
                pagoTamaño = 5;
                break;
            case "Mediano":
                pagoTamaño = 10;
                break;
            case "Grande":
                pagoTamaño = 15;
                break;
            case "Muy_grande":
                pagoTamaño = 20;
                break;
            default:
                pagoTamaño = 0;
                break;
        }
        return pagoTamaño;
    }

    calcularTotal() {
        let total = 0;

        if (this.catPelaje == "btnRizado") {
            total = (this.pago1() + this.pago2()) * 1.05;
        } else if (this.catPelaje == "btnLargo") {
            total = (this.pago1() + this.pago2()) * 1.02;
        } else {
            total = (this.pago1() + this.pago2());
        }

        return total * this.cantidad;
    }
}

/* Añadir función al botón enviar */
$(document).ready(function () {
    $("#btnEnviar").click(function () {
        let veterinaria = new Veterinaria();
        veterinaria.cantidad = parseInt($("#txtNumber").val());
        veterinaria.catBaño = $("input[name='btnradio1']:checked").next("label").text();
        veterinaria.catPelaje = $("input[name='btnradio']:checked").next("label").text();
        veterinaria.catTamaño = $("#txtMascota").val();
        alert("Detalle del baño:\n**Cantidad de perros: " + veterinaria.cantidad + "\n**Tipo de baño: " + veterinaria.catBaño + "\n**Tipo de pelaje: " + veterinaria.catPelaje + "\n**Tamaño: " + veterinaria.catTamaño + "\n-----TOTAL A PAGAR ES: " + veterinaria.calcularTotal());
    });
});