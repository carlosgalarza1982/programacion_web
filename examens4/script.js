function nPromedio() {
    //NOTAS PARA EL P1
    const n1P1 = parseFloat(document.getElementById("n1P1").value);
    const n2P1 = parseFloat(document.getElementById("n2P1").value);
    const n3P1 = parseFloat(document.getElementById("n3P1").value);
  
    //NOTAS PARA EL P2
    const n1P2 = parseFloat(document.getElementById("n1P2").value);
    const n2P2 = parseFloat(document.getElementById("n2P2").value);
    const n3P2 = parseFloat(document.getElementById("n3P2").value);
  
    //NOTA EXAM FINAL
    const nFinal = parseFloat(document.getElementById("nFinal").value);
  
  

    //CALCULO PROMEDIO
    const promedio = (n1P1 + n2P1 + n3P1 + n1P2 + n2P2 + n3P2 + nFinal) / 7;
  //CONDICIONAL
    let resultado = "";
    if (promedio >= 9.5) {
      resultado = "EXONERADO";
    } else if (promedio >= 7) {
      resultado = "APROBADO";
    } else if (promedio >= 4) {
      resultado = "DEBE RENDIR SUPLETORIO";
    } else {
      resultado = "REPROBADO";
    }
  //CONDICIONAL PARA INGRESO DE VVARIABLES
  
    document.getElementById("resultado").innerText = `Promedio: ${promedio.toFixed(2)} - ${resultado}`;
  }
  