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
			$host = getenv('DB_HOST') ?: 'localhost';
			$port = getenv('DB_PORT') ?: '3306';
			$database = getenv('DB_NAME') ?: 'moduleasy';
			$username = getenv('DB_USER') ?: 'root';
			$password = getenv('DB_PASSWORD');
			if ($password === false) {
				$password = 'root';
			}

			self::$conexao = new PDO(
				"mysql:host=$host;port=$port;dbname=$database;charset=utf8mb4", $username, $password,
				[
					PDO::ATTR_ERRMODE			=> PDO::ERRMODE_EXCEPTION,
					PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
					PDO::ATTR_EMULATE_PREPARES   => false,
					PDO::ATTR_PERSISTENT		 => true
				]
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