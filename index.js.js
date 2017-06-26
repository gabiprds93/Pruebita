var assert = require("assert");

function ejercicio1(arr, num)
{
    function multiplicar(total, actual)
    {
        return total * actual;
    }
    var resultado = arr.reduce(multiplicar);
    if(!isNaN(num))
    {
        resultado = arr.reduce(multiplicar, num);        
    }    
    return resultado;
}

describe("Pruebas ejercicio 1", function(){
    it("multiplicar 4 * 4 * 5 * 12 y 9 debe dar 8640", function(){
        assert.equal(8640, ejercicio1([4, 4, 5, 12], 9));
    });
    it("multiplicar 4 * 4 * 5 * 12 y hola debe dar 960", function(){
        assert.equal(960, ejercicio1([4, 4, 5, 12], "hola"));
    });
});