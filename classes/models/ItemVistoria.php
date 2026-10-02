<?php 
class ItemVistoria extends Banco {
	public $Codigo;
	public $Nome;
	public $IcResposta;
	public $Conteiner;

	
	public function __construct($codigo = null, $nome = null, $icResposta = null, $conteiner = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
		$this->IcResposta = $icResposta;
		$this->Conteiner = $conteiner;
	}

	public static function listarItensVistoria(){
		return self::Consultar('listarItensVistoria');
	}

	public static function listarRespostasItensVistoriaConteiner($conteiner, $dtVistoria){
		$parametros = [
			'pConteiner' => $conteiner,
			'pDtVistoria' => $dtVistoria
		];
		return self::Consultar('listarRespostasItensVistoria', $parametros);
	}
}
?>