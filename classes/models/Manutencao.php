<?php 
class Manutencao extends Banco {
	public $Conteiner;
	public $Valor;
	public $Tipo;
	public $Status;
	public $DtTermino;
	public $DtInicio;

	
	public function __construct($conteiner = null, $valor = null, $tipo = null, $status = null, $dtTermino = null, $dtInicio = null) {
		$this->Conteiner = $conteiner;
		$this->Valor = $valor;
		$this->Tipo = $tipo;
		$this->Status = $status;
		$this->DtTermino = $dtTermino;
		$this->DtInicio = $dtInicio;
	}

	public static function criarManutencaosAntiga($conteiner, $valor, $tipo, $status, $dtTermino = null, $dtInicio = null){
		$parametros = [
			'pConteiner' => $conteiner,
			'pValor' => $valor,
			'pTipo' => $tipo,
			'pStatus' => $status,
			'pDtTermino' => $dtTermino,
			'pDtInicio' => $dtInicio
		];

		return self::Executar('criarManutencaoAntiga', $parametros);
	}

	public static function criarManutencaosAplicada($conteiner, $valor, $tipo){
		$parametros = [
			'pConteiner' => $conteiner,
			'pValor' => $valor,
			'pTipo' => $tipo,
		];

		return self::Executar('criarManutencaoAplicada', $parametros);
	}

	public static function atualizarManutencao($conteiner, $dtInicio, $valor, $tipo, $status, $dtTermino){
		$parametros = [
			'pConteiner' => $conteiner,
			'pDtInicio' => $dtInicio,
			'pValor' => $valor,
			'pTipo' => $tipo,
			'pStatus' => $status,
			'pDtTermino' => $dtTermino
		];

		return self::Executar('atualizarManutencao', $parametros);
	}

	public static function deletar($conteiner, $dtInicio){
		$parametros = [
			'pConteiner' => $conteiner,
			'pDtInicio' => $dtInicio
		];
		return self::Executar('deletarManutencao', $parametros);
	}
}
?>