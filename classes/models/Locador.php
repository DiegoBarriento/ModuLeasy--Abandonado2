<?php 
class Locador extends Banco {
	public $Email;
	public $Cnpj;
	public $Nome;
	public $TipoUsuario = 'Locador'; // ve depois

	public function __construct($email = null, $cnpj = null, $nome = null) {
		$this->Email = $email;
		$this->Cnpj = $cnpj;
		$this->Nome = $nome;
		$this->TipoUsuario = 'Locador';
	}

	public static function obterLocador($email, $senha){
		$parametros = [
			'pEmail' => $email,
			'pSenha' => $senha
		];
		return self::Consultar('obterLocador', $parametros);
	}

	public static function listarManutencoesLocador($locador){
		$parametros = [
			'pLocador' => $locador
		];
		return self::Consultar('listarManutencoesLocador', $parametros);
	}

	public static function listarContratosLocador($locador){
		$parametros = [
			'pLocador' => $locador
		];
		return self::Consultar('listarContratosLocador', $parametros);
	}

	public static function listarMovimentacoesLocador($locador){
		$parametros = [
			'pLocador' => $locador
		];
		return self::Consultar('listarMovimentacoesLocador', $parametros);
	}

	public static function listarDepositos($locador){
	$parametros = [
		'pLocador' => $locador
	];
	return self::Consultar('listarDepositosLocador', $parametros);
	}

	public static function criarLocador($email, $cnpj, $nome, $senha){
		$parametros = [
			'pEmail' => $email,
			'pCnpj' => $cnpj,
			'pNome' => $nome,
			'pSenha' => $senha
		];
		return self::Executar('criarLocador', $parametros);
	}

	public static function atualizarLocador($locador, $cnpj, $nome){
		$parametros = [
			'pLocador' => $locador,
			'pNvCnpjLocador' => $cnpj,
			'pNvNmLocador' => $nome
		];

		return self::Executar('atualizarLocador', $parametros);
	}

	public static function deletarContaLocador($locador){
		$parametros = [
			'pLocador' => $locador
		];
		self::Executar('deletarContaLocador', $parametros);
	}

	public static function listarConteineresLocador($locador){
		$parametros = [
			'pLocador' => $locador
		];
		return self::Consultar('listarConteineresLocador', $parametros);
	}
}
?>