const fakerBr = require('faker-br');

function generateUserData() {
  const nome = fakerBr.name.firstName();
  const sobrenome = fakerBr.name.lastName();
  const email = fakerBr.internet.email(nome.toLowerCase(), sobrenome.toLowerCase());
  const senha = fakerBr.internet.password(12);
  const cpf = fakerBr.br.cpf();
  const dataNascimento = fakerBr.date.past(30, new Date(1990, 0, 1));
  const telefone = fakerBr.phone.phoneNumber();

  return {
    nome,
    sobrenome,
    email,
    senha,
    cpf,
    dataNascimento: dataNascimento.toLocaleDateString('pt-BR'),
    telefone
  };
}

module.exports = generateUserData;
