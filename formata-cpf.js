const inseriPontoCpf = (cpfcnpj) => {
    if (temAQuantidade(cpfcnpj, 11)) {
      return formatarCPF(cpfcnpj)
    } else if (temAQuantidade(cpfcnpj, 14)) {
      return formatarCNPJ(cpfcnpj)
    } else {
      console.log("Documento digitado incorretamente");
    }
  }
  
  const temAQuantidade = (dado, quantidade) => {
    const regexp = new RegExp("\\d{11}", "g")
    return regexp.test(dado)
  } 
  
  const formatarCPF = (cpf) => {
    const regexp = /([\d]{3})([\d]{3})([\d]{3})([\d]{2})/g;
    return cpf.replace(regexp, "$1.$2.$3-$4");
  }
  
  const formatarCNPJ = (cnpj) => {
    const regexp = /([\d]{2})([\d]{3})([\d]{3})([\d]{4})([\d]{2})/g;
    return cnpj.replace(regexp, "$1.$2.$3/$4-$5");
  }