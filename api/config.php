<?php
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
			break;
		}
	}
});

if (session_status() !== PHP_SESSION_ACTIVE) {
	if (getenv('VERCEL') === '1' || getenv('SESSION_DRIVER') === 'mysql') {
		require_once dirname(__DIR__) . '/classes/base/MysqlSessionHandler.php';
		session_set_save_handler(new MysqlSessionHandler(), true);
	}

	$isHttps = (!empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) !== 'off')
		|| getenv('VERCEL') === '1';
	session_set_cookie_params([
		'lifetime' => 0,
		'path' => '/',
		'secure' => $isHttps,
		'httponly' => true,
		'samesite' => 'Lax',
	]);
	session_start();
}

date_default_timezone_set('America/Sao_Paulo');
?>