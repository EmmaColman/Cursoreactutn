
const calculo = type =>{
    const val1 = parseInt (document.getElementById("val1").value)
    const val2 = parseInt (document.getElementById("val2").value)
    let resultado = 0
   
    if (type=='suma'){
        resultado = val1+val2 
        
    }
    else if (type=='resta'){
        resultado = val1-val2
    }
    else if (type=='multiplicacion'){
        resultado = val1*val2
    }
    else {
        resultado = val1/val2
    }

    console.log (resultado)

    document.getElementById("resultado").innerHTML = `resultado:  ${resultado}`;
}





