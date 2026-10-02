<?php 
class ParcelaAluguelController {
    public static function listarParcelasContrato($conteiner, $locatario, $dtCriacao){
        $dados = ParcelaAluguel::listarParcelasContrato($conteiner, $locatario, $dtCriacao);
        $parcelas = [];

        foreach($dados as $instancia){
            $parcela = new ParcelaAluguel($instancia['dt_abertura_parcela_aluguel'], $instancia['nm_email_locatario'], $instancia['cd_conteiner'],
            $instancia['dt_criacao_contrato_aluguel'], $instancia['ic_parcela_aluguel_paga'], $instancia['dt_vencimento_parcela_aluguel'], $instancia['vl_parcela_aluguel'],
            $instancia['dt_pagamento_parcela_aluguel']);
            array_push($parcelas, $parcela);
        }

        return $parcelas;
    }
}
?>