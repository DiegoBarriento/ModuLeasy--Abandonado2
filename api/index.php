<?php
// 1. Garante que os cabeçalhos de resposta padrão e CORS sejam processados antes de qualquer saída
header('Content-Type: application/json; charset=utf-8');

// 2. Importa as configurações globais, Autoloader e Inicialização da Sessão via Supabase
// (Ajuste o caminho abaixo para apontar para o seu arquivo de configuração que estruturamos)
require_once dirname(__DIR__) . '/config.php'; 

$endpoint = $_GET['endpoint'] ?? '';
if (
    !is_string($endpoint)
    || !preg_match('/^[A-Za-z0-9_-]+\.php$/', $endpoint)
    || in_array(strtolower($endpoint), ['config.php', 'cors.php', 'index.php'], true) // Protege também contra variações de maiúsculas
) {
    http_response_code(404);
    echo json_encode(['status' => 'false', 'mensagem' => 'Endpoint não encontrado']);
    exit();
}

$apiDirectory = dirname(__DIR__) . '/backend-api';
$endpointFile = $apiDirectory . '/' . $endpoint;
if (!is_file($endpointFile)) {
    http_response_code(404);
    echo json_encode(['status' => 'false', 'mensagem' => 'Endpoint não encontrado']);
    exit();
}

set_include_path($apiDirectory . PATH_SEPARATOR . get_include_path());

// 3. Importa o endpoint usando require_once para evitar redefinições acidentais
require_once $endpointFile;
