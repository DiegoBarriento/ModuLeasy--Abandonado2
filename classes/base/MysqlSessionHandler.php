<?php
class MysqlSessionHandler implements SessionHandlerInterface
{
	private PDO $conexao;

	public function __construct()
	{
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
			throw new RuntimeException('Configure as variáveis DB_* antes de iniciar a sessão.');
		}

		$opcoes = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
		$certificadoSsl = getenv('DB_SSL_CA');
		if ($certificadoSsl && defined('PDO::MYSQL_ATTR_SSL_CA')) {
			$opcoes[PDO::MYSQL_ATTR_SSL_CA] = $certificadoSsl;
		}

		$this->conexao = new PDO(
			"mysql:host=$host;port=$port;dbname=$database;charset=utf8mb4",
			$username,
			$password,
			$opcoes
		);
	}

	public function open(string $path, string $name): bool
	{
		return true;
	}

	public function close(): bool
	{
		return true;
	}

	public function read(string $id): string|false
	{
		$consulta = $this->conexao->prepare(
			'SELECT session_data FROM moduleasy_sessions WHERE session_id = :id AND expires_at > :now'
		);
		$consulta->execute(['id' => $id, 'now' => time()]);
		$dados = $consulta->fetchColumn();

		return $dados === false ? '' : (string) $dados;
	}

	public function write(string $id, string $data): bool
	{
		$expira = time() + (int) ini_get('session.gc_maxlifetime');
		$consulta = $this->conexao->prepare(
			'INSERT INTO moduleasy_sessions (session_id, session_data, expires_at)
			 VALUES (:id, :data, :expires_at)
			 ON DUPLICATE KEY UPDATE session_data = :updated_data, expires_at = :updated_expires_at'
		);

		return $consulta->execute([
			'id' => $id,
			'data' => $data,
			'expires_at' => $expira,
			'updated_data' => $data,
			'updated_expires_at' => $expira,
		]);
	}

	public function destroy(string $id): bool
	{
		$consulta = $this->conexao->prepare('DELETE FROM moduleasy_sessions WHERE session_id = :id');
		return $consulta->execute(['id' => $id]);
	}

	public function gc(int $max_lifetime): int|false
	{
		$consulta = $this->conexao->prepare('DELETE FROM moduleasy_sessions WHERE expires_at <= :now');
		$consulta->execute(['now' => time()]);
		return $consulta->rowCount();
	}
}