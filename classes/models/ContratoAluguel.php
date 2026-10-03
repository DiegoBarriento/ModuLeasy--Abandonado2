<?php 
class ContratoAluguel extends Banco {
	public $EnderecoEntrega;
	public $Locatario;
	public $Conteiner;
	public $EnderecoRetorno;
	public $DtEntrega;
	public $DtRetorno;
	public $Duracao;
	public $TipoAluguel;
	public $DtCriacao;
	public $Deposito;

	
	public function __construct($enderecoEntrega = null, $locatario = null, $conteiner = null, $enderecoRetorno = null, $dtEntrega = null, $dtRetorno = null, $duracao = null, $tipoAluguel = null, $dtCriacao = null, $deposito = null) {
		$this->EnderecoEntrega = $enderecoEntrega;
		$this->Locatario = $locatario;
		$this->Conteiner = $conteiner;
		$this->EnderecoRetorno = $enderecoRetorno;
		$this->DtEntrega = $dtEntrega;
		$this->DtRetorno = $dtRetorno;
		$this->Duracao = $duracao;
		$this->TipoAluguel = $tipoAluguel;
		$this->DtCriacao = $dtCriacao;
		$this->Deposito = $deposito;
	}

	public static function criarContrato($conteiner, $locatario, $enderecoEntrega, $tipoAluguel, $duracao){
		$parametros = [
			'pConteiner' => $conteiner,
			'pLocatario' => $locatario,
			'pEnderecoEntrega' => $enderecoEntrega,
			'pTipoAluguel' => $tipoAluguel,
			'pQtDuracao' => $duracao
		];
		self::Executar('criarContrato', $parametros);
	}

	public static function definirRetornoContrato($conteiner, $locatario, $dtCriacao, $nmEnderecoRetorno, $deposito){
		$parametros = [
			'pConteiner' => $conteiner,
			'pLocatario' => $locatario,
			'pDtCriacao' => $dtCriacao,
			'pNmEnderecoRetorno' => $nmEnderecoRetorno,
			'pDeposito' => $deposito
		];
		return self::Executar('definirRetornoContrato', $parametros);
	}

	public static function iniciarContrato($conteiner, $locatario, $dtCriacao){
		$parametros = [
			'pConteiner' => $conteiner,
			'pLocatario' => $locatario,
			'pDtCriacaoContrato' => $dtCriacao
		];
		return self::Executar('iniciarContrato', $parametros);
	}
}
?>