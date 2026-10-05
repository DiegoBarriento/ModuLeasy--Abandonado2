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

// 2. Configuração e Inicialização da Sessão
if (session_status() !== PHP_SESSION_ACTIVE) {
    $isHttps = (!empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) !== 'off') || getenv('VERCEL') === '1';

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => $isHttps,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);

    // Como está na Vercel com o Supabase, injetamos o Session Handler HTTP obrigatóriamente
    $sessionHandler = new SupabaseSessionHandler();
    session_set_save_handler($sessionHandler, true);

    session_start();
}

// 3. Configurações Regionais
date_default_timezone_set('America/Sao_Paulo');
?>
