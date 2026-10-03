<?php 
class ParcelaAluguel extends Banco {
	public $DtAbertura;
	public $Locatario;
	public $Conteiner;
	public $DtCriacaoContrato;
	public $IcParcelaPaga;
	public $DtVencimento;
	public $Valor;
	public $DtPagamento;

	
	public function __construct($dtAbertura = null, $locatario = null, $conteiner = null, $dtCriacaoContrato = null, $icParcelaPaga = null, $dtVencimento = null, $valor = null, $dtPagamento = null) {
		$this->DtAbertura = $dtAbertura;
		$this->Locatario = $locatario;
		$this->Conteiner = $conteiner;
		$this->DtCriacaoContrato = $dtCriacaoContrato;
		$this->IcParcelaPaga = $icParcelaPaga;
		$this->DtVencimento = $dtVencimento;
		$this->Valor = $valor;
		$this->DtPagamento = $dtPagamento;
	}

	public static function listarParcelasContrato($conteiner, $locatario, $dtCriacao){
		$parametros = [
			'pConteiner' => $conteiner,
			'pLocatario' => $locatario,
			'pDtCriacao' => $dtCriacao
		];
		return self::Consultar('listarParcelasContrato', $parametros);
	}
}
?>