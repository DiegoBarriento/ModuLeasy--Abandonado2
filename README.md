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

O Vite publica o frontend em `dist`; o runtime comunitário `vercel-php` configurado em `vercel.json` executa um único dispatcher (`api/index.php`). Os endpoints individuais ficam em `backend-api/` e são carregados por esse dispatcher, mantendo o total em uma função PHP, abaixo do limite de 12. O rewrite `/api/:endpoint` preserva as URLs existentes e o rewrite final mantém as rotas do React Router. Em produção, a API usa `/api` no mesmo domínio Vercel; localmente, `VITE_API_BASE_URL` pode apontar para XAMPP ou Docker.

As funções precisam de um MySQL acessível pela internet. Cadastre nas variáveis de ambiente do projeto Vercel `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` e `DB_PASSWORD`. Se o provedor exigir um certificado CA, configure também `DB_SSL_CA`. Não use `localhost` para o banco na Vercel.

No banco remoto, aplique os scripts nesta ordem: `db/moduleasy_script.sql`, `db/stp_moduleasy.sql`, `db/mdt_moduleasy.sql` e `db/001_moduleasy_sessions.sql`. O primeiro script recria o schema; não o execute em um banco existente com dados que queira preservar. As sessões PHP passam a ser armazenadas no MySQL quando executadas na Vercel.

Defina `CORS_ALLOWED_ORIGINS` com os domínios frontend permitidos, separados por vírgula. Como o frontend e `/api` usam o mesmo domínio, chamadas normais são same-origin; mantenha a allowlist para previews ou frontends hospedados em outro domínio. A produção ignora `VITE_API_BASE_URL` e usa sempre `/api`; localmente, o `.env.example` aponta para o backend Docker.

### Supabase (etapa inicial)

O esquema PostgreSQL inicial está em `db/supabase_schema.sql`. Aplique-o no SQL Editor do projeto Supabase antes de verificar a conexão. Ele cria as tabelas do sistema com RLS habilitado e não apaga tabelas nem dados existentes.

Configure `SUPABASE_URL` e `SUPABASE_SECRET_KEY` como variáveis de ambiente **do servidor** no Vercel. A chave secreta é usada apenas pelo PHP e nunca deve receber o prefixo `VITE_` nem ser incluída no frontend. Depois de configurar, consulte `/api/supabaseStatus.php`; um retorno `status: true` confirma o acesso à tabela `locador` via Supabase REST.

Esta etapa adiciona a conexão e o esquema, mas ainda não migra as rotas de negócio: os endpoints atuais continuam usando procedures MySQL e exigem a configuração `DB_*` acima. A substituição completa do backend e do armazenamento de sessões requer portar essas procedures para PostgreSQL/RPC e atualizar os endpoints antes de remover o MySQL.

O filesystem das funções Vercel é temporário. As fotos enviadas por `criarConteiner.php` precisam ser movidas para um storage persistente (por exemplo, S3 compatível) antes de depender delas em produção.

## API com Docker

A Vercel executa os endpoints PHP como funções; o Compose é uma opção separada para desenvolvimento local ou para hospedar a API em um servidor Docker.

1. Copie `.env.example` para `.env` e troque as senhas de exemplo.
2. Inicie a API e o banco com `docker compose up --build -d`.
3. Inicie o frontend com `npm run dev` e abra `http://localhost:5173`.

A API local fica em `http://localhost:8080/api`. Os scripts do banco e os dados iniciais são carregados apenas quando o volume MySQL é criado pela primeira vez; banco e uploads ficam em volumes Docker persistentes.

Para usar o Compose em produção em vez das funções PHP da Vercel, publique o serviço `api` em um servidor Docker com HTTPS e configure `VITE_API_BASE_URL` na Vercel para a URL pública da API. Nesse caso, configure também `CORS_ALLOWED_ORIGINS` no servidor.
