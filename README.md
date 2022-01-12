# Crypto Dashboard

Confira o resultado em: [endereço]()  


# Sobre o projeto: Crypto Dashboard

Dashboard feita seguindo o tutorial do canal [Code with Ania Kubów](https://www.youtube.com/watch?v=WDwhJNbWka0&t=2997s) onde consumi informações de duas APIs do marketplace [RapidApi.com](http://rapidapi.com).
- Alpha Vantage: para converter as moedas com valores atualizados.  
  [link aqui]("https://rapidapi.com/alphavantage/api/alpha-vantage/")
- Crypto News: onde encontramos notícias do universo crypto.  
  [link aqui](https://rapidapi.com/enochmwanga@gmail.com/api/crypto-news15) 

Nessa aplicação simples podemos converter valores e ver as principais notícias do universo de crypto moedas.

## Tecnologias
[![ReactJs](https://img.shields.io/badge/-React-9cf)](https://pt-br.reactjs.org/)  
[![NodeJs](https://img.shields.io/badge/-NodeJs-green)](https://nodejs.org/en/)  


## Bibliotecas & Utilitários
  [![Axios](https://img.shields.io/badge/CientHTTP-Axios-blue)](https://axios-http.com/)  
  [![Express](https://img.shields.io/badge/Framework-Express-blue)](https://expressjs.com/)

# Como executar

### `npm i`
instale todas as dependências necessárias  


### arquivo `.env`
crie um arquivo `.env` no `root` do seu projeto e nele insira o seguinte código abaixo:
```bash
REACT_APP_RAPID_API_KEY={sua_chave_api_aqui}
```
sem essas informação seu código não conseguirá acessar as informações das APIs

### execute: `npm run start:frontend`
Comando roda o aplicativo no mode de desenvolvimento, acesse: http://localhost:3000 no navegador.

### execute: `npm run start:backend`
Comando inicia o servidor em http://localhost:8000


![Huann Almeida](https://raw.githubusercontent.com/huannvictor/huannvictor/main/assets/caracter2.png){:width="50%"}
