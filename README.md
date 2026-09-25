# Chrome Extension - Highlight Paragraphs

Extensão para navegadores baseados em Chromium que destaca todos os parágrafos (`<p>`) da página atual quando o usuário clica no ícone da extensão.

## Stack

- Node.js
- npm
- TypeScript
- Chrome Extension APIs
- Manifest V3

## Setup

O projeto utiliza TypeScript para o código-fonte e gera JavaScript compatível com o navegador na pasta `dist`.

A estrutura principal é:

- `src/background.ts`: escuta o clique no ícone da extensão;
- `src/content/highlight.ts`: encontra e destaca os parágrafos da página;
- `src/manifest.json`: configura a extensão com Manifest V3;
- `scripts/clean.mjs`: remove a build anterior;
- `scripts/copy-static.mjs`: copia arquivos estáticos para `dist`;
- `dist/`: contém a versão pronta para ser carregada no navegador.

## Instalação

Instale as dependências:

`npm install`

## Build

Execute:

`npm run build`

O processo de build:

1. remove a pasta `dist` anterior;
2. compila TypeScript para JavaScript;
3. copia o `manifest.json`;
4. gera a extensão pronta na pasta `dist`.

## Google Chrome

1. Acesse `chrome://extensions`;
2. ative o Modo do desenvolvedor;
3. clique em **Carregar sem compactação**;
4. selecione a pasta `dist`;
5. abra uma página web;
6. clique em **Highlight Paragraphs**.

## Microsoft Edge

1. Acesse `edge://extensions`;
2. ative o Modo do desenvolvedor;
3. clique em **Carregar sem pacote**;
4. selecione a pasta `dist`;
5. abra uma página web;
6. clique em **Highlight Paragraphs**.

## Funcionamento

Ao clicar no ícone da extensão, o `background.js` utiliza `chrome.scripting.executeScript` para executar `content/highlight.js` na aba ativa.

O script procura os elementos `<p>` da página e adiciona o destaque visual.

## Compatibilidade testada

- Google Chrome
- Microsoft Edge