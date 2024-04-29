# Testes Automatizados no site SwagLabs
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GiovanneSilva/testVia/blob/main/LICENSE) 

# Sobre o projeto

Este é um projeto de automação de testes desenvolvido com o objetivo de simular cenários de compra em um e-commerce. Utilizando a ferramenta Cypress, onde são executados testes automatizados para verificar o funcionamento das funcionalidades desde a criação de usuário, fluxo de compra etc.

# Tecnologias utilizadas
- javaScript
- Cypress
- Node.js
  
# Pré-requisitos
- Node.js (versão 12 ou superior)
- npm (Node Package Manager)
  
# Clonando o Repositório
- Abra o terminal.
- Navegue até o diretório onde deseja clonar o repositório.
- Execute o seguinte comando para clonar o repositório: git clone

# Instalando Dependências
- Navegue até o diretório recém-clonado
- Instale as dependências do projeto executando o seguinte comando: npm install

# Executar o projeto
- Após instalar as dependências, você pode executar os testes Cypress com o seguinte comando: npx cypress open

# Competências
- Blibioteca faker-br
- Padrão PageObjects 

# Cenários

Feature: Compra com Sucesso
  - Como cliente
  - Eu quero realizar uma compra bem-sucedida no site das Casas Bahia
  - Para receber os produtos que escolhi

Cenário: Realizar uma compra com sucesso
- Dado que o usuário está logado no site das Casas Bahia
- E selecionou um item desejado para a compra
- Quando o usuário segue o fluxo de compra, adicionando o item ao carrinho e fornecendo as informações necessárias
- Então o usuário deve receber uma confirmação da compra
- E o usuário deve visualizar a mensagem "Compra realizada com sucesso"

Feature: Aviso de Produto Indisponível
  - Como cliente
  - Eu quero receber um aviso quando um item desejado estiver indisponível no site das Casas Bahia
  - Para ser notificado quando o produto estiver de volta ao estoque

  Cenário: Receber aviso de produto indisponível
- Dado que o usuário está logado no site das Casas Bahia
- Quando o usuário pesquisa pelo item desejado
- E verifica que o item está indisponível
- E opta por receber um aviso quando o item estiver disponível
- Então o usuário deve visualizar a mensagem de confirmação do aviso de estoque

  # Automatizado
  - Validação do fluxo de compra pagamento com boleto


# Autor

Giovanne Silva Braz Barbosa

https://www.linkedin.com/in//giovanne-silva-3b91aa197/
