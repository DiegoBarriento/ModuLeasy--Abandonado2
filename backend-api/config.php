<?php
// 1. Registro do Autoloader
spl_autoload_register(function ($nomeClasse) {
    $pastaClasses = dirname(__DIR__) . '/classes/';
    $possiveisPastas = [
        $pastaClasses,
        $pastaClasses . 'base/',
        $pastaClasses . 'models/',
        $pastaClasses . 'views/',
        $pastaClasses . 'controllers/'
    ];

    foreach ($possiveisPastas as $pasta) {
        $nomeCompletoArquivo = $pasta . $nomeClasse . '.php';
        if (file_exists($nomeCompletoArquivo)) {
            require_once $nomeCompletoArquivo;
            return;
        }
    }
});

// 2. Configuração e Inicialização da Sessão para Ambiente Serverless
if (session_status() !== PHP_SESSION_ACTIVE) {
    // Detecta automaticamente se está na Vercel ou usando HTTPS local
    $isHttps = (!empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) !== 'off') || getenv('VERCEL') === '1';

    // Configura os parâmetros do cookie de sessão ANTES de iniciar
    session_set_cookie_params([
        'lifetime' => 0, // Expira ao fechar o navegador
        'path' => '/',
        'secure' => $isHttps,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);

    // Sempre força o uso do banco de dados na Vercel para não perder a sessão
    if (getenv('VERCEL') === '1' || getenv('SESSION_DRIVER') === 'mysql' || getenv('SESSION_DRIVER') === 'postgres') {
        
        // Mapeia dinamicamente as variáveis que você configurou na Vercel para o seu manipulador
        $_ENV['DB_HOST']     = getenv('DB_HOST');
        $_ENV['DB_PORT']     = getenv('DB_PORT') ?: '5432';
        $_ENV['DB_DATABASE'] = getenv('DB_NAME');
        $_ENV['DB_USERNAME'] = getenv('DB_USER');
        $_ENV['DB_PASSWORD'] = getenv('DB_PASSWORD');

        // Instancia o seu manipulador de sessão customizado (ele vai persistir os dados no banco do Supabase)
        $sessionHandler = new MysqlSessionHandler(); 
        session_set_save_handler($sessionHandler, true);
    }

    session_start();
}

// 3. Configurações Regionais
date_default_timezone_set('America/Sao_Paulo');
?>
