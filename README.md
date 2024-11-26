# S206

Repositório para qualidade de software

--LISTA_1

dentro do diretório Lista_1

para abrir o cypress:
npm run cy:open

para gerar o reports:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

--LISTA API

dentro do diretório Lista_Exercícios_API:
newman run '.\Lista.postman_collection.json' -r htmlextra

--PROVA LABORATÓRIO

A função criada está nos commands.

comando para rodar os testes de cypress e gerar o relatório:

no diretório Prova_laboratório/Cypress:
npx cypress run

comando para rodar o script de testes do newman:
no diretório Prova_laboratório/Postman:
newman run '.\Prova.postman_collection.json' -r htmlextra


