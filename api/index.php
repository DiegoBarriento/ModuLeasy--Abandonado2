<?php
header('Content-Type: application/json; charset=utf-8');

$endpoint = $_GET['endpoint'] ?? '';
if (
    !is_string($endpoint)
    || !preg_match('/^[A-Za-z0-9_-]+\.php$/', $endpoint)
    || in_array($endpoint, ['config.php', 'cors.php'], true)
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
require $endpointFile;