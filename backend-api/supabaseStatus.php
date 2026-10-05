<?php
require_once dirname(__DIR__) . '/classes/base/SupabaseClient.php';
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
	http_response_code(405);
	header('Allow: GET');
	echo json_encode(['status' => 'false', 'mensagem' => 'Método não permitido.']);
	exit();
}

try {
	$supabase = new SupabaseClient();
	$supabase->verificarBanco();
	echo json_encode(['status' => 'true', 'mensagem' => 'Conexão com o Supabase estabelecida.']);
} catch (RuntimeException $erro) {
	error_log('[supabaseStatus] ' . $erro->getMessage());
	http_response_code(503);
	echo json_encode(['status' => 'false', 'mensagem' => 'Não foi possível conectar ao Supabase. Verifique a configuração do servidor.']);
}
?>
