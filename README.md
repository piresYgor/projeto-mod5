Projeto do Módulo 5 do curso da resilia. O projeto consiste em uma barbearia fictícia, a principal ideia do projeto e colocar em prática tudo que foi ensinado e aprendido durante o curso. Nesse projeto você poderá criar agendamentos e tendo organização para atender os clientes. 
Nesse passo a passo ensinarei como baixar as dependências do projeto para que o mesmo seja aberto.

Tecnologia utilizadas nesse projeto. Node.js Xampp Workbench visual studio code HTML CSS JavaScript (node.js, handlebars, express, bcrypt...)

                         Tutorial para as instalações dos programas para a inicialização do projeto. 
                         
1º- Baixar o arquivo e extraí-lo para uma pasta.

2º- Abrir o arquivo dentro o visual studio code.

3º- Depois de aberto abrir o navegador do Google e baixar os seguintes aplicativos - Baixar o node.js ( https://nodejs.org/en/) - com esse aplicativo teremos o node a tecnologia em que foi utilizada nesse projeto., Worckbench(mysql0 https://dev.mysql.com/downloads/workbench/ ) esse aplicativo e o banco de dados da aplicação., Xampp com o xampp instalado sera possível abrir um servidor local para acessar o projeto na web.

4º- Depois de todos os aplicativos baixado e instalados, será necessário criar um banco de dados no workbench com o nome barbearia e iniciar o xampp com a porta aberta igual do workbench. Feito isso volte para o visual studio code.

5º- Abrir o terminal no visual studio code selecionando a pasta do projeto

6º- Com o terminal aberto dar os seguintes comandos - npm install bcryptjs cookie-parser cookie-session express express-flash express-handlebars express-session mysql2 nodemon sequelize session-file-store após instalar todos os requisitos dar outro comando, npm init -y depois desse comando ir no arquivo que foi criado chamado package.json e de baixo do script - (test) no final da linha adicionar uma vírgula e dar um enter para pular para a linah de baixo e colocar o seguinte codigo "start": "nodemon ./index.js localhost 3000" salvar e voltar para o terminal e dar o outro comando para iniciar o servidor, npm start, caso de tu certo o servidor sera aberto e se conectara ao banco de dados, muita atenção nessa parte. Feito os passos acima agora abra o navegador e digite localhost:3000 e o projeto ira aparecer.
