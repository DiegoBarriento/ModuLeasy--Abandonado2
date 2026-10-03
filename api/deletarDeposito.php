<?php
require_once('cors.php');
require_once('config.php');
header('Access-Control-Allow-Methods: DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(200);
	exit();
}

$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo != 'DELETE') 
{ 
	http_response_code(400); 
	echo json_encode(['mensagem' => 'Método Inválido']); 
	return;
}

if (!isset($_GET['deposito']) || $_GET['deposito'] == '') {
	http_response_code(400);
	echo json_encode(['mensagem' => 'Parâmetros obrigatórios insuficientes']);
	return;
}
$deposito = $_GET['deposito'];

try {
	DepositoController::deletarDeposito($deposito);
	http_response_code(200);
	echo json_encode(['status' => 'true']);
} catch (Exception $erro) {
	http_response_code(500);
	echo json_encode(['status' => 'false', 'mensagem' => $erro->GetMessage()]);
}