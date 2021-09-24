var notaDoPrimeiroBimestre = 2;
var notaDoSegundoBimestre = 2;
var notaDoTerceiroBimestre = 1;
var notaDoQuartoBimestre = 5;
var notaFinal = (
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4
).toFixed(1);
console.log("Nota Final: " + notaFinal);
document.write("<h2>Nota Final: " + notaFinal + "</h2>");
//1. passou ou nao
if (notaFinal < 3) {
  console.log("Acertou Mizeravi!!");
  document.write("<h2>Acertou Mizeravi!!</h2>");
} else if (notaFinal > 3 && notaFinal < 5) {
  console.log("Passou, é mentira! Vai p REC");
} else if (notaFinal >= 5) {
  console.log("Passou");
}
