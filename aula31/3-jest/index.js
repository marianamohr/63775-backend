function calcularImpostos(notaFiscal) {
    const { valorTotal, aliquotaImposto } = notaFiscal;
  
    if (!valorTotal && valorTotal !== 0 || !aliquotaImposto && aliquotaImposto !== 0) {
      throw new Error("A nota fiscal deve ter valorTotal e aliquotaImposto.");
    }
  
    const valorImposto = valorTotal * (aliquotaImposto / 100);
    const valorComImposto = valorTotal + valorImposto;
  
    return {
      valorImposto: parseFloat(valorImposto.toFixed(2)), // ajuste para precisão
      valorComImposto: parseFloat(valorComImposto.toFixed(2)), // ajuste para precisão
    };
  }
  
  module.exports = calcularImpostos;
  