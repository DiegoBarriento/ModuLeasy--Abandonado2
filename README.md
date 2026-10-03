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

Sem configuração, a URL da API em desenvolvimento é `http://localhost/ModuLeasy/api` (XAMPP). O `.env.example` usa `http://localhost:8080/api` para o backend Docker.

## API com Docker

A Vercel publica o frontend estático, mas não executa Docker Compose nem hospeda estes endpoints PHP. O Compose deste repositório executa Apache/PHP e MySQL em conjunto, para desenvolvimento local ou em um servidor que suporte Docker.

1. Copie `.env.example` para `.env` e troque as senhas de exemplo.
2. Inicie a API e o banco com `docker compose up --build -d`.
3. Inicie o frontend com `npm run dev` e abra `http://localhost:5173`.

A API local fica em `http://localhost:8080/api`. Os scripts do banco e os dados iniciais são carregados apenas quando o volume MySQL é criado pela primeira vez; banco e uploads ficam em volumes Docker persistentes.

Para produção, publique o serviço `api` deste Compose em um servidor Docker com HTTPS e configure `VITE_API_BASE_URL` nas variáveis da Vercel para a URL pública da API, terminando em `/api` (por exemplo, `https://api.seu-dominio.com/api`). Configure também `CORS_ALLOWED_ORIGINS` no servidor com `https://moduleasy.vercel.app`. Depois, faça um novo deploy do frontend.
