    console.group("Cuadrados");
    const ladoCuadro = 5;   
    console.log("los lados del cuadro miden:"+ladoCuadro);

    const perimetroCuadrado = (ladoCuadro) => ladoCuadro * 4 ;
    console.log("El perimetro es "+ perimetroCuadrado);

    const areaCuadrado = ladoCuadro * ladoCuadro;
    console.log("El area del Cuadrado es "+ areaCuadrado);
    console.groupEnd();

    
    function calcularPerimetroCuadrado(){

        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El input es " + value;
    }

