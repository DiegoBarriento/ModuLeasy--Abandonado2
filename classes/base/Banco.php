<?php
class Banco
{
	private static $conexao = null;

	private static function Conectar()
	{
		if (self::$conexao !== null) {
			return;
		}

		try {
			$isVercel = getenv('VERCEL') === '1';
			$host = getenv('DB_HOST') ?: ($isVercel ? '' : 'localhost');
			$port = getenv('DB_PORT') ?: '3306';
			$database = getenv('DB_NAME') ?: 'moduleasy';
			$username = getenv('DB_USER') ?: ($isVercel ? '' : 'root');
			$password = getenv('DB_PASSWORD');
			if ($password === false && !$isVercel) {
				$password = 'root';
			}
			if ($host === '' || $username === '' || $password === false) {
				throw new Exception('Configure DB_HOST, DB_USER e DB_PASSWORD no ambiente.');
			}

			$opcoes = [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES => false,
			];
			$certificadoSsl = getenv('DB_SSL_CA');
			if ($certificadoSsl && defined('PDO::MYSQL_ATTR_SSL_CA')) {
				$opcoes[PDO::MYSQL_ATTR_SSL_CA] = $certificadoSsl;
			}

			self::$conexao = new PDO(
				"mysql:host=$host;port=$port;dbname=$database;charset=utf8mb4", $username, $password,
				$opcoes
			);
		} catch (PDOException $Erro) {
			throw new Exception('Erro ao conectar ao Servidor.');
		}
	}

	protected static function Consultar($nomeProcedure, $parametros = [])
	{
		self::Conectar();

		$placeholders = [];
		foreach ($parametros as $chave => $valor) {
			$placeholders[] = ':' . $chave;
		}

		$sql = 'CALL ' . $nomeProcedure;
		if ($placeholders) {
			$sql .= '(' . implode(', ', $placeholders) . ')';
		}

		$cSQL = self::$conexao->prepare($sql);

		foreach ($parametros as $chave => $valor) {
			$cSQL->bindValue(':' . $chave, $valor);
		}

		$cSQL->execute();
		$dados = $cSQL->fetchAll(PDO::FETCH_ASSOC);

		$cSQL->closeCursor();

		return $dados;
	}

	protected static function Executar($nomeProcedure, $parametros = [])
	{
		self::Conectar();

		$placeholders = [];
		foreach ($parametros as $chave => $valor) {
			$placeholders[] = ':' . $chave;
		}

		$sql = 'CALL ' . $nomeProcedure;
		if ($placeholders) {
			$sql .= '(' . implode(', ', $placeholders) . ')';
		}

		$cSQL = self::$conexao->prepare($sql);

		foreach ($parametros as $chave => $valor) {
			$cSQL->bindValue(':' . $chave, $valor);
		}

		$cSQL->execute();

		$cSQL->closeCursor();
	}

	protected static function ExecutarRetorno($nomeProcedure, $parametros = [])
	{
		self::Conectar();

		$placeholders = [];

		foreach ($parametros as $chave => $valor) {
			$placeholders[] = ':' . $chave;
		}

		$sql = 'CALL ' . $nomeProcedure;

		if ($placeholders) {
			$sql .= '(' . implode(', ', $placeholders) . ')';
		}

		$cSQL = self::$conexao->prepare($sql);

		foreach ($parametros as $chave => $valor) {
			$cSQL->bindValue(':' . $chave, $valor);
		}

		$cSQL->execute();

		$dados = $cSQL->fetch(PDO::FETCH_ASSOC);

		$cSQL->closeCursor();

		return $dados;
	}
}
?>