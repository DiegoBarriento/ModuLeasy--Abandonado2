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

O Vite publica o frontend em `dist`; o runtime comunitário `vercel-php` configurado em `vercel.json` executa os arquivos `api/*.php` como funções. O rewrite final mantém as rotas do React Router funcionando. Em produção, a URL da API usa `/api` no mesmo domínio por padrão.

As funções precisam de um MySQL acessível pela internet. Cadastre nas variáveis de ambiente do projeto Vercel `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` e `DB_PASSWORD`. Se o provedor exigir um certificado CA, configure também `DB_SSL_CA`. Não use `localhost` para o banco na Vercel.

No banco remoto, aplique os scripts nesta ordem: `db/moduleasy_script.sql`, `db/stp_moduleasy.sql`, `db/mdt_moduleasy.sql` e `db/001_moduleasy_sessions.sql`. O primeiro script recria o schema; não o execute em um banco existente com dados que queira preservar. As sessões PHP passam a ser armazenadas no MySQL quando executadas na Vercel.

Defina `CORS_ALLOWED_ORIGINS` com os domínios frontend permitidos, separados por vírgula. Como o frontend e `/api` usam o mesmo domínio, chamadas normais são same-origin; mantenha a allowlist para previews ou frontends hospedados em outro domínio. O `VITE_API_BASE_URL` pode ficar sem definir na Vercel; localmente, o `.env.example` aponta para o backend Docker.

O filesystem das funções Vercel é temporário. As fotos enviadas por `criarConteiner.php` precisam ser movidas para um storage persistente (por exemplo, S3 compatível) antes de depender delas em produção.

## API com Docker

A Vercel executa os endpoints PHP como funções; o Compose é uma opção separada para desenvolvimento local ou para hospedar a API em um servidor Docker.

1. Copie `.env.example` para `.env` e troque as senhas de exemplo.
2. Inicie a API e o banco com `docker compose up --build -d`.
3. Inicie o frontend com `npm run dev` e abra `http://localhost:5173`.

A API local fica em `http://localhost:8080/api`. Os scripts do banco e os dados iniciais são carregados apenas quando o volume MySQL é criado pela primeira vez; banco e uploads ficam em volumes Docker persistentes.

Para usar o Compose em produção em vez das funções PHP da Vercel, publique o serviço `api` em um servidor Docker com HTTPS e configure `VITE_API_BASE_URL` na Vercel para a URL pública da API. Nesse caso, configure também `CORS_ALLOWED_ORIGINS` no servidor.
