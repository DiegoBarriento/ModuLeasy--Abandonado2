# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy na Vercel

O projeto usa Vite. A Vercel deve executar `npm run build` e publicar a pasta `dist`. O arquivo `vercel.json` direciona as rotas do React Router para `index.html`, permitindo abrir e atualizar páginas internas diretamente.

Configure a variável de ambiente `VITE_API_BASE_URL` na Vercel com a URL pública da pasta `api` do backend, por exemplo `https://api.exemplo.com/api`. O valor deve terminar em `/api` e não deve conter uma barra no final.

O frontend é estático: os arquivos PHP deste repositório não são executados pelo build do Vite nem por esta configuração da Vercel. Para login, cadastro e demais operações funcionarem em produção, hospede o backend PHP e o banco em um serviço compatível e permita as origens e credenciais do domínio da Vercel no CORS.

Em desenvolvimento local, a URL padrão da API é `http://localhost/ModuLeasy/api`. Para sobrescrevê-la, defina `VITE_API_BASE_URL` no ambiente do Vite.
