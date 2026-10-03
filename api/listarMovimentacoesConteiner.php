<?php
require_once('cors.php');
require_once('config.php');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo != 'GET') 
{ 
	http_response_code(400); 
	echo json_encode(['mensagem' => 'Método Inválido']); 
	return;
}

if (!isset($_GET['conteiner']) || $_GET['conteiner'] == '') {
	http_response_code(400);
	echo json_encode(['mensagem' => 'Parâmetros obrigatórios insuficientes']);
	return;
}
$conteiner = $_GET['conteiner'];

try {
	$movimentacoes = Conteiner::listarMovimentacoesConteiner($conteiner);
	http_response_code(200);
	echo json_encode(['status' => 'true', 'movimentacoesConteiner' => $movimentacoes]);
} catch (Exception $erro) {
	http_response_code(500);
	echo json_encode(['status' => 'false', 'mensagem' => $erro->GetMessage()]);
}