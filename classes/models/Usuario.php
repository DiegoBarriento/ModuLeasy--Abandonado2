<?php 
class Usuario extends Banco {

	
	public function __construct() {
	}

	public static function acessarConta($email, $senha){
		$parametros = [
			'pEmail' => $email,
			'pSenha' => $senha
		];
		return self::Consultar('obterUsuario', $parametros);
	}
}
?>