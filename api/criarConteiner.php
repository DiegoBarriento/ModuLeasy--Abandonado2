<?php

require_once('cors.php');
require_once('config.php');

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(200);
	exit();
}

$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo != 'POST') 
{ 
	http_response_code(400); 
	echo json_encode(['mensagem' => 'Método Inválido']); 
	return;
}

$corpo = $_POST;

$chaves = [
	'locador',
	'dtfabricacaoconteiner',
	'bicconteiner',
	'taraconteiner',
	'cargamaximaconteiner',
	'tipoconteiner',
	'tamanhoconteiner',
	'deposito',
	'fabricante'
];

if (!validaChaves($corpo, $chaves)) {
	return;
}

$locador = $corpo['locador'];
$dtfabricacaoconteiner = $corpo['dtfabricacaoconteiner'];
$bicconteiner = $corpo['bicconteiner'];
$taraconteiner = $corpo['taraconteiner'];
$cargamaximaconteiner = $corpo['cargamaximaconteiner'];
$tipoconteiner = $corpo['tipoconteiner'];
$tamanhoconteiner = $corpo['tamanhoconteiner'];
$deposito = $corpo['deposito'];
$fabricante = $corpo['fabricante'];

try {

	$resultado = ConteinerController::criarConteiner(
		$locador,
		$dtfabricacaoconteiner,
		$bicconteiner,
		$taraconteiner,
		$cargamaximaconteiner,
		$tipoconteiner,
		$tamanhoconteiner,
		$deposito,
		$fabricante
	);

	$cdConteiner = $resultado['cd_conteiner'];
	

	$pasta = __DIR__ . '/../uploads/conteineres/';

	$quantidadeFotos = 0;

	if (isset($_FILES['fotos'])) {

		foreach ($_FILES['fotos']['tmp_name'] as $indice => $arquivoTemporario) {

			if ($_FILES['fotos']['error'][$indice] !== UPLOAD_ERR_OK) {
				continue;
			}

			$nomeOriginal = $_FILES['fotos']['name'][$indice];
			$extensao = strtolower(pathinfo($nomeOriginal, PATHINFO_EXTENSION));

			$nomeArquivo = $cdConteiner . '_' . ($indice + 1) . '.' . $extensao;

			$caminho = $pasta . $nomeArquivo;

			if (move_uploaded_file($arquivoTemporario, $caminho)) {
				$quantidadeFotos++;
			}
		}
	}

	http_response_code(200);

	echo json_encode([
    'status' => 'true',
    'mensagem' => 'Contêiner cadastrado com sucesso!',
    'cd_conteiner' => $cdConteiner,
    'dados' => [
        'locador' => $locador,
        'data_fabricacao' => $dtfabricacaoconteiner,
        'bic' => $bicconteiner,
        'tara' => $taraconteiner,
        'carga_maxima' => $cargamaximaconteiner,
        'tipo' => $tipoconteiner,
        'tamanho' => $tamanhoconteiner,
        'deposito' => $deposito,
        'fabricante' => $fabricante
    ]
]);

} catch (Exception $erro) {

	http_response_code(500);

	echo json_encode([
		'status' => 'false',
		'mensagem' => $erro->GetMessage()
	]);
}

function validaChaves($corpo, $campos) {

	for ($i = 0; $i < count($campos); $i++) { 

		if (!array_key_exists($campos[$i], $corpo))
		{
			http_response_code(400);
			echo json_encode([
				'mensagem' => 'Dados incorretos. Verifique a documentação da API e tente novamente!'
			]);
			return false;
		}

		if ($corpo[$campos[$i]] == '')
		{
			http_response_code(400);
			echo json_encode([
				'mensagem' => 'Dados incorretos. Verifique a documentação da API e tente novamente!'
			]);
			return false;
		}
	}

	return true;
}

?>