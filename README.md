# S206

Repositório para qualidade de software

--Dentro da Aula_cypress

para abrir o cypress:
npm run cy:open

para gerar o reports:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

--PROVA LABORATÓRIO

comando para rodar os testes de cypress e gerar o relatório:

no diretório Prova_laboratório/Cypress:
npx cypress run

comando para rodar o script de testes do newman:
no diretório Prova_laboratório/Postman:
newman run '.\Prova.postman_collection.json' -r htmlextra


