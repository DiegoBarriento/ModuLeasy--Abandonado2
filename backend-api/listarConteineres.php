<?php
require_once('cors.php');
require_once('config.php');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo === 'OPTIONS') {
	http_response_code(204);
	return;
}

if ($metodo !== 'GET') {
	header('Allow: GET, OPTIONS');
	http_response_code(405);
	echo json_encode(['status' => 'false', 'mensagem' => 'Método não permitido']);
	return;
}

try {
	$conteineres = ConteinerController::listarConteineres();
	http_response_code(200);
	echo json_encode(['status' => 'true', 'conteineres' => $conteineres]);
} catch (Exception $erro) {
	error_log($erro->getMessage());
	http_response_code(500);
	echo json_encode(['status' => 'false', 'mensagem' => $erro->GetMessage()]);
}