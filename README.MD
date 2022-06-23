<h1>Typescript List</h1>

<p>Projeto feito em Typescript, utilizando npm e node.js</p>

<h2>Para executar o programa</h2>
<p>Primeiramente faça o clone do reposítório em uma pasta local para sua máquina com o comando</P><br>

```
git clone https://github.com/Thiagoojtds/ListasTypescript
```

<p>Para instalar o typescript no projeto você precisa ter o node.js instalado e usar os seguintes comandos em ordem em um terminal integrado na pasta raíz do projeto<br>
 
```
npm init
npm i typescript
npm i -g typescript (necessário permisão de superusuario)
npx tsc --init
npm i --save-dev @types/node
```
 
<p>Abrir o arquivo tsconfig.json gerado na pasta raíz do projeto e tirar o // (descomentar) o comando "outDir": "./dir", onde "./dir" será o diretório no qual será transpilado o código para Javascript.<br>
<p>E então no terminal na pasta raíz do projeto utilizar o comando: <code>npx tsc</code> para transpilar o código.</p><br>
<p>Agora você pode iniciar um servidor de preferência dentro da pasta do projeto e é só acessar com a url que será fornecida no terminal.</p><br>
<p>Obs: As listas da aplicação para vizualização estarão no console do navegodor.</p>

