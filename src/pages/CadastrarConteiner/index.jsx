import { Link } from 'react-router-dom';
import styles from './index.module.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { apiUrl } from '../../api';

export default function CadastrarConteiner() {

    // =========================
    // DADOS DO CONTÊINER
    // =========================

    const [codigoBic, setCodigoBic] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [cnpjFabricante, setCnpjFabricante] = useState('');
    const [dataFabricacao, setDataFabricacao] = useState('');
    const [tipo, setTipo] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [cargaMaxima, setCargaMaxima] = useState('');
    const [tara, setTara] = useState('');

    // =========================
    // OPÇÕES VINDAS DO BANCO
    // =========================

    const [tiposConteiner, setTiposConteiner] = useState([]);
    const [tamanhosConteiner, setTamanhosConteiner] = useState([]);
    const [componentesConteiner, setComponentesConteiner] = useState([]);
    const [finalidades, setFinalidades] = useState([]);
    const [tiposAluguel, setTiposAluguel] = useState([]);

    // =========================
    // COMPONENTES
    // =========================

    const [componentesSelecionados, setComponentesSelecionados] = useState([]);
    const [selectedComponente, setSelectedComponente] = useState('');
    const [nomeComponente, setNomeComponente] = useState('');

    // =========================
    // FINALIDADES
    // =========================

    const [selectedFinalidades, setSelectedFinalidades] = useState([]);

    // =========================
    // ALUGUEL
    // =========================

    const [tipoAluguelSelect, setTipoAluguelSelect] = useState('');
    const [termosAluguel, setTermosAluguel] = useState([]);
    const [valorConteiner, setValorConteiner] = useState('');
    const [multa, setMulta] = useState('');

    // =========================
    // FOTOS
    // =========================

    const [fotos, setFotos] = useState([]);

    // =========================
    // MENSAGEM
    // =========================

    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');

    // =========================
    // REFS
    // =========================

    const codigoBicRef = useRef(null);
    const fabricanteRef = useRef(null);
    const cnpjFabricanteRef = useRef(null);
    const dataFabricacaoRef = useRef(null);
    const tipoRef = useRef(null);
    const tamanhoRef = useRef(null);
    const cargaMaximaRef = useRef(null);
    const taraRef = useRef(null);
    const finalidadesRef = useRef(null);
    const inputFotosRef = useRef(null);

    // =========================
    // MENSAGEM
    // =========================

    function mostrarMensagem(texto, tipo = 'erro') {

        setMensagem(texto);
        setTipoMensagem(tipo);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // =========================
    // FORMATAR CNPJ
    // =========================

    function formatarCnpj(valor) {

        valor = valor.replace(/\D/g, '');

        valor = valor.substring(0, 14);

        valor = valor.replace(
            /^(\d{2})(\d)/,
            '$1.$2'
        );

        valor = valor.replace(
            /^(\d{2})\.(\d{3})(\d)/,
            '$1.$2.$3'
        );

        valor = valor.replace(
            /\.(\d{3})(\d)/,
            '.$1/$2'
        );

        valor = valor.replace(
            /(\d{4})(\d)/,
            '$1-$2'
        );

        return valor;
    }

    // =========================
    // FORMATAR BIC
    // =========================

    function formatarBic(valor) {

        valor = valor
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, '');

        return valor.substring(0, 11);
    }

    // =========================
    // PERMITIR NÚMEROS
    // =========================

    function permitirNumero(valor) {

        valor = valor.replace(',', '.');

        valor = valor.replace(/[^0-9.]/g, '');

        const partes = valor.split('.');

        if (partes.length > 2) {

            valor =
                partes[0] +
                '.' +
                partes.slice(1).join('');
        }

        if (valor.includes('.')) {

            const [inteiro, decimal] =
                valor.split('.');

            valor =
                inteiro +
                '.' +
                decimal.substring(0, 2);
        }

        return valor;
    }

    // =========================
    // CARREGAR DADOS DO BANCO
    // =========================

    useEffect(() => {

        axios.get(
            apiUrl('listarTiposConteiner.php'),
            {
                withCredentials: true
            }
        )
        .then((resposta) => {
            console.log('Tipos de contêiner carregados:', resposta.data);

            setTiposConteiner(
                resposta.data.tiposConteiner
            );

        })
        .catch((erro) => {

            console.log('Erro ao carregar tipos:', erro);

        });


        axios.get(
            apiUrl('listarTamanhos.php'),
            {
                withCredentials: true
            }
        )
        .then((resposta) => {

            setTamanhosConteiner(
                resposta.data.tamanhosConteiner
            );

        })
        .catch((erro) => {

            console.log('Erro ao carregar tamanhos:', erro);

        });


        axios.get(
            apiUrl('listarCategoriasComponente.php'),
            {
                withCredentials: true
            }
        )
        .then((resposta) => {

            setComponentesConteiner(
                resposta.data.categorias
            );

        })
        .catch((erro) => {

            console.log('Erro ao carregar componentes:', erro);

        });


        axios.get(
            apiUrl('listarFinalidades.php'),
            {
                withCredentials: true
            }
        )
        .then((resposta) => {

            setFinalidades(
                resposta.data.finalidades
            );

        })
        .catch((erro) => {

            console.log('Erro ao carregar finalidades:', erro);

        });


        axios.get(
            apiUrl('listarTiposAluguel.php'),
            {
                withCredentials: true
            }
        )
        .then((resposta) => {

            console.log(
                'Tipos de aluguel carregados:',
                resposta.data
            );

            setTiposAluguel(
                resposta.data.tiposAluguel
            );

        })
        .catch((erro) => {

            console.log(
                'Erro ao carregar tipos de aluguel:',
                erro
            );

        });

    }, []);

    // =========================
    // FOTOS
    // =========================

    function adicionarFotos(event) {

        const arquivos =
            Array.from(event.target.files);

        const imagens =
            arquivos.filter(
                (arquivo) =>
                    arquivo.type.startsWith('image/')
            );

        if (imagens.length !== arquivos.length) {

            mostrarMensagem(
                'Somente arquivos de imagem podem ser adicionados.',
                'erro'
            );
        }

        if (imagens.length > 0) {

            setFotos((fotosAtuais) => [
                ...fotosAtuais,
                ...imagens
            ]);
        }

        event.target.value = '';
    }

    function removerFoto(index) {

        setFotos((fotosAtuais) =>
            fotosAtuais.filter(
                (_, i) => i !== index
            )
        );
    }

    // =========================
    // COMPONENTES
    // =========================

    function adicionarComponente() {

        if (
            selectedComponente === '' ||
            nomeComponente.trim() === ''
        ) {

            mostrarMensagem(
                'Selecione o tipo e informe o nome do componente.',
                'erro'
            );

            return;
        }

        const componente =
            componentesConteiner.find(
                (item) =>
                    item.Codigo == selectedComponente
            );

        if (!componente) {

            mostrarMensagem(
                'Componente selecionado inválido.',
                'erro'
            );

            return;
        }

        setComponentesSelecionados(
            (componentesAtuais) => [
                ...componentesAtuais,
                {
                    codigo: componente.Codigo,
                    tipo: componente.Nome,
                    nome: nomeComponente.trim()
                }
            ]
        );

        setSelectedComponente('');
        setNomeComponente('');
    }

    function removerComponente(index) {

        setComponentesSelecionados(
            (componentesAtuais) =>
                componentesAtuais.filter(
                    (_, i) => i !== index
                )
        );
    }

    // =========================
    // FINALIDADES
    // =========================

    function alternarFinalidade(valor) {

        setSelectedFinalidades(
            (selecionadas) =>
                selecionadas.includes(valor)
                    ? selecionadas.filter(
                        (finalidade) =>
                            finalidade !== valor
                    )
                    : [
                        ...selecionadas,
                        valor
                    ]
        );
    }

    // =========================
    // TERMOS DE ALUGUEL
    // =========================

    function adicionarTermoAluguel() {

        if (
            tipoAluguelSelect === '' ||
            valorConteiner.trim() === '' ||
            multa.trim() === ''
        ) {

            mostrarMensagem(
                'Preencha todos os campos do termo de aluguel.',
                'erro'
            );

            return;
        }

        const tipoSelecionado =
            tiposAluguel.find(
                (tipo) =>
                    tipo.Codigo == tipoAluguelSelect
            );

        if (!tipoSelecionado) {

            mostrarMensagem(
                'Tipo de aluguel inválido.',
                'erro'
            );

            return;
        }

        // =========================
        // CORREÇÃO
        // Usa os mesmos campos
        // utilizados no SELECT:
        // Codigo e Nome
        // =========================

        setTermosAluguel(
            (termosAtuais) => [
                ...termosAtuais,
                {
                    codigo: tipoSelecionado.Codigo,
                    tipo: tipoSelecionado.Nome,
                    valor: valorConteiner,
                    multa: multa
                }
            ]
        );

        setTipoAluguelSelect('');
        setValorConteiner('');
        setMulta('');
    }

    function removerTermo(index) {

        setTermosAluguel(
            (termosAtuais) =>
                termosAtuais.filter(
                    (_, i) => i !== index
                )
        );
    }

    // =========================
    // CADASTRAR CONTÊINER
    // =========================

    async function cadastrarConteiner() {

        setMensagem('');
        setTipoMensagem('');

        // =========================
        // VALIDAÇÕES
        // =========================

        if (!codigoBic.trim()) {

            mostrarMensagem(
                'Informe o código BIC.',
                'erro'
            );

            codigoBicRef.current?.focus();

            return;
        }

        if (
            !/^[A-Z]{4}\d{7}$/.test(
                codigoBic
            )
        ) {

            mostrarMensagem(
                'O código BIC deve ter 4 letras e 7 números.',
                'erro'
            );

            codigoBicRef.current?.focus();

            return;
        }

        if (!fabricante.trim()) {

            mostrarMensagem(
                'Informe o fabricante.',
                'erro'
            );

            fabricanteRef.current?.focus();

            return;
        }

        if (
            cnpjFabricante.length !== 18
        ) {

            mostrarMensagem(
                'Informe um CNPJ completo.',
                'erro'
            );

            cnpjFabricanteRef.current?.focus();

            return;
        }

        if (!dataFabricacao) {

            mostrarMensagem(
                'Informe a data de fabricação.',
                'erro'
            );

            dataFabricacaoRef.current?.focus();

            return;
        }

        if (!tipo) {

            mostrarMensagem(
                'Selecione o tipo de contêiner.',
                'erro'
            );

            tipoRef.current?.focus();

            return;
        }

        if (!tamanho) {

            mostrarMensagem(
                'Selecione o tamanho do contêiner.',
                'erro'
            );

            tamanhoRef.current?.focus();

            return;
        }

        if (
            !cargaMaxima ||
            Number(cargaMaxima) <= 0
        ) {

            mostrarMensagem(
                'Informe uma carga máxima válida.',
                'erro'
            );

            cargaMaximaRef.current?.focus();

            return;
        }

        if (
            !tara ||
            Number(tara) <= 0
        ) {

            mostrarMensagem(
                'Informe uma tara válida.',
                'erro'
            );

            taraRef.current?.focus();

            return;
        }

        if (
            Number(tara) >=
            Number(cargaMaxima)
        ) {

            mostrarMensagem(
                'A tara deve ser menor que a carga máxima.',
                'erro'
            );

            taraRef.current?.focus();

            return;
        }

        if (
            selectedFinalidades.length === 0
        ) {

            mostrarMensagem(
                'Selecione pelo menos uma finalidade.',
                'erro'
            );

            finalidadesRef.current?.focus();

            return;
        }

        if (
            componentesSelecionados.length === 0
        ) {

            mostrarMensagem(
                'Adicione pelo menos um componente.',
                'erro'
            );

            return;
        }

        if (fotos.length === 0) {

            mostrarMensagem(
                'Adicione pelo menos uma foto.',
                'erro'
            );

            return;
        }

        if (termosAluguel.length === 0) {

            mostrarMensagem(
                'Adicione pelo menos um termo de aluguel.',
                'erro'
            );

            return;
        }

        // =========================
        // FORMDATA
        // =========================

        const formData =
            new FormData();

        // =========================
        // DADOS PRINCIPAIS
        // =========================

        formData.append(
            'locador',
            'contato@modularsantos.com.br'
        );

        formData.append(
            'dtfabricacaoconteiner',
            dataFabricacao
        );

        formData.append(
            'bicconteiner',
            codigoBic
        );

        formData.append(
            'taraconteiner',
            tara
        );

        formData.append(
            'cargamaximaconteiner',
            cargaMaxima
        );

        formData.append(
            'tipoconteiner',
            tipo
        );

        formData.append(
            'tamanhoconteiner',
            tamanho
        );

        formData.append(
            'deposito',
            '1'
        );

        formData.append(
            'fabricante',
            cnpjFabricante.replace(/\D/g, '')
        );

        // =========================
        // FINALIDADES
        // =========================

        selectedFinalidades.forEach(
            (finalidade) => {

                formData.append(
                    'finalidades[]',
                    finalidade
                );
            }
        );

        // =========================
        // COMPONENTES
        // =========================

        componentesSelecionados.forEach(
            (componente) => {

                formData.append(
                    'componentes[]',
                    JSON.stringify(componente)
                );
            }
        );

        // =========================
        // TERMOS
        // =========================

        termosAluguel.forEach(
            (termo) => {

                formData.append(
                    'termos[]',
                    JSON.stringify(termo)
                );
            }
        );

        // =========================
        // FOTOS
        // =========================

        fotos.forEach(
            (foto) => {

                formData.append(
                    'fotos[]',
                    foto
                );
            }
        );

        // =========================
        // ENVIAR PARA O PHP
        // =========================

        try {

            const resposta =
                await axios.post(
                    apiUrl('criarConteiner.php'),
                    formData,
                    {
                        withCredentials: true
                    }
                );

            console.log(resposta.data);

            // =========================
            // SUCESSO
            // =========================

            mostrarMensagem(
                resposta.data?.mensagem ||
                'Contêiner cadastrado com sucesso!',
                'sucesso'
            );

            // =========================
            // LIMPAR TUDO
            // =========================

            setCodigoBic('');
            setFabricante('');
            setCnpjFabricante('');
            setDataFabricacao('');
            setTipo('');
            setTamanho('');
            setCargaMaxima('');
            setTara('');

            setSelectedFinalidades([]);

            setComponentesSelecionados([]);
            setSelectedComponente('');
            setNomeComponente('');

            setTipoAluguelSelect('');
            setValorConteiner('');
            setMulta('');
            setTermosAluguel([]);

            setFotos([]);

        } catch (erro) {

            console.error(
                'Erro ao cadastrar contêiner:',
                erro
            );

            mostrarMensagem(
                erro.response?.data?.mensagem ||
                'Não foi possível cadastrar o contêiner.',
                'erro'
            );
        }
    }

    return (
        <>
            <main>

                <div className="conteudo">

                    <Link
                        to="/meus_conteineres"
                        className="voltar"
                    >
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>

                        Voltar para Meus Contêineres
                    </Link>

                    <div className="cabecalho">

                        <h1>
                            Cadastrar contêiner
                        </h1>

                        <p className="descricao_cabecalho">
                            Apresente seu espaço com todos os detalhes.
                        </p>

                    </div>

                    {/* MENSAGEM */}

                    {mensagem && (

                        <div
                            className={`${styles.mensagem} ${styles[tipoMensagem]}`}
                        >
                            {mensagem}
                        </div>

                    )}

                    <div
                        className={
                            styles.pagina_cadastrar_conteiner
                        }
                    >

                        {/* ========================= */}
                        {/* ESPECIFICAÇÕES */}
                        {/* ========================= */}

                        <section className="painel">

                            <div className="secao_titulo">

                                <span className="icone_secao">
                                    <span className="material-symbols-outlined">
                                        straighten
                                    </span>
                                </span>

                                <h2>
                                    Especificações técnicas
                                </h2>

                            </div>

                            <div className="form_grid tres">

                                <div className="campo">

                                    <label>
                                        Código BIC
                                    </label>

                                    <input
                                        ref={codigoBicRef}
                                        type="text"
                                        placeholder="Ex.: ABCD1234567"
                                        value={codigoBic}
                                        maxLength={11}
                                        onChange={(event) =>
                                            setCodigoBic(
                                                formatarBic(
                                                    event.target.value
                                                )
                                            )
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label>
                                        Nome do fabricante
                                    </label>

                                    <input
                                        ref={fabricanteRef}
                                        type="text"
                                        placeholder="Ex.: ModuLeasy Indústria"
                                        maxLength={100}
                                        value={fabricante}
                                        onChange={(event) =>
                                            setFabricante(
                                                event.target.value
                                            )
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label>
                                        CNPJ do fabricante
                                    </label>

                                    <input
                                        ref={cnpjFabricanteRef}
                                        type="text"
                                        placeholder="00.000.000/0000-00"
                                        maxLength={18}
                                        value={cnpjFabricante}
                                        onChange={(event) =>
                                            setCnpjFabricante(
                                                formatarCnpj(
                                                    event.target.value
                                                )
                                            )
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label>
                                        Data de fabricação
                                    </label>

                                    <input
                                        ref={dataFabricacaoRef}
                                        type="date"
                                        value={dataFabricacao}
                                        onChange={(event) =>
                                            setDataFabricacao(
                                                event.target.value
                                            )
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label>
                                        Tipo de contêiner
                                    </label>

                                    <div className="input_geral">

                                        <select
                                            ref={tipoRef}
                                            value={tipo}
                                            onChange={(event) =>
                                                setTipo(
                                                    event.target.value
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione o tipo
                                            </option>

                                            {tiposConteiner.map(
                                                (item) => (

                                                    <option
                                                        key={
                                                            item.Codigo
                                                        }
                                                        value={
                                                            item.Codigo
                                                        }
                                                    >
                                                        {item.Nome}
                                                    </option>

                                                )
                                            )}

                                        </select>

                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>

                                    </div>

                                </div>

                                <div className="campo">

                                    <label>
                                        Tamanho
                                    </label>

                                    <div className="input_geral">

                                        <select
                                            ref={tamanhoRef}
                                            value={tamanho}
                                            onChange={(event) =>
                                                setTamanho(
                                                    event.target.value
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione o tamanho
                                            </option>

                                            {tamanhosConteiner.map(
                                                (item) => (

                                                    <option
                                                        key={
                                                            item.Codigo
                                                        }
                                                        value={
                                                            item.Codigo
                                                        }
                                                    >
                                                        {item.Nome}
                                                    </option>

                                                )
                                            )}

                                        </select>

                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>

                                    </div>

                                </div>

                                <div className="campo">

                                    <label>
                                        Carga máxima (kg)
                                    </label>

                                    <input
                                        ref={cargaMaximaRef}
                                        type="text"
                                        inputMode="decimal"
                                        placeholder="Ex.: 28200"
                                        value={cargaMaxima}
                                        onChange={(event) =>
                                            setCargaMaxima(
                                                permitirNumero(
                                                    event.target.value
                                                )
                                            )
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label>
                                        Tara (kg)
                                    </label>

                                    <input
                                        ref={taraRef}
                                        type="text"
                                        inputMode="decimal"
                                        placeholder="Ex.: 2230"
                                        value={tara}
                                        onChange={(event) =>
                                            setTara(
                                                permitirNumero(
                                                    event.target.value
                                                )
                                            )
                                        }
                                    />

                                </div>

                                <div
                                    className="campo"
                                    ref={finalidadesRef}
                                >

                                    <label>
                                        FINALIDADES
                                    </label>

                                    <details
                                        className={
                                            styles.multiselect
                                        }
                                    >

                                        <summary
                                            className={
                                                styles.multiselect_titulo
                                            }
                                        >

                                            <span>
                                                {selectedFinalidades.length === 0
                                                    ? ''
                                                    : `${selectedFinalidades.length} ${
                                                        selectedFinalidades.length === 1
                                                            ? 'finalidade escolhida'
                                                            : 'finalidades escolhidas'
                                                    }`
                                                }
                                            </span>

                                            <span className="material-symbols-outlined">
                                                add
                                            </span>

                                        </summary>

                                        <div
                                            className={
                                                styles.multiselect_opcoes
                                            }
                                        >

                                            {finalidades.map(
                                                (finalidade) => (

                                                    <label
                                                        key={
                                                            finalidade.Codigo
                                                        }
                                                    >

                                                        <input
                                                            type="checkbox"
                                                            name="finalidades[]"
                                                            value={
                                                                finalidade.Codigo
                                                            }
                                                            checked={
                                                                selectedFinalidades.includes(
                                                                    finalidade.Codigo
                                                                )
                                                            }
                                                            onChange={() =>
                                                                alternarFinalidade(
                                                                    finalidade.Codigo
                                                                )
                                                            }
                                                        />

                                                        {finalidade.Nome}

                                                    </label>

                                                )
                                            )}

                                        </div>

                                    </details>

                                </div>

                            </div>

                        </section>

                        {/* ========================= */}
                        {/* COMPONENTES */}
                        {/* ========================= */}

                        <section className="painel">

                            <div className="secao_titulo">

                                <span className="icone_secao">

                                    <span className="material-symbols-outlined">
                                        inventory
                                    </span>

                                </span>

                                <h2>
                                    Componentes do espaço
                                </h2>

                            </div>

                            <div
                                className={
                                    styles.linha_adicionar
                                }
                            >

                                <div className="campo">

                                    <label>
                                        Tipo
                                    </label>

                                    <div className="input_geral">

                                        <select
                                            value={
                                                selectedComponente
                                            }
                                            onChange={(event) =>
                                                setSelectedComponente(
                                                    event.target.value
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione o tipo do componente
                                            </option>

                                            {componentesConteiner.map(
                                                (componente) => (

                                                    <option
                                                        key={
                                                            componente.Codigo
                                                        }
                                                        value={
                                                            componente.Codigo
                                                        }
                                                    >
                                                        {componente.Nome}
                                                    </option>

                                                )
                                            )}

                                        </select>

                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>

                                    </div>

                                </div>

                                <div className="campo">

                                    <label>
                                        Nome
                                    </label>

                                    <input
                                        type="text"
                                        maxLength={100}
                                        placeholder="Ex.: Isolamento térmico"
                                        value={nomeComponente}
                                        onChange={(event) =>
                                            setNomeComponente(
                                                event.target.value
                                            )
                                        }
                                    />

                                </div>

                                <button
                                    type="button"
                                    className="botao botao_escuro botao_adicionar"
                                    onClick={
                                        adicionarComponente
                                    }
                                >

                                    <span className="material-symbols-outlined">
                                        add
                                    </span>

                                    Adicionar

                                </button>

                            </div>

                            <ul
                                className={
                                    styles.resultados_adicionar
                                }
                            >

                                {componentesSelecionados.map(
                                    (componente, index) => (

                                        <li key={index}>

                                            <div>

                                                <p className="etiqueta">
                                                    {componente.tipo}
                                                </p>

                                                <strong>
                                                    {componente.nome}
                                                </strong>

                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removerComponente(
                                                        index
                                                    )
                                                }
                                            >

                                                <span
                                                    className={`${styles.excluir_adicionar} material-symbols-outlined`}
                                                >
                                                    close
                                                </span>

                                            </button>

                                        </li>

                                    )
                                )}

                            </ul>

                        </section>

                        {/* ========================= */}
                        {/* FOTOS */}
                        {/* ========================= */}

                        <section className="painel">

                            <div className="secao_titulo">

                                <span className="icone_secao">

                                    <span className="material-symbols-outlined">
                                        photo_camera
                                    </span>

                                </span>

                                <h2>
                                    Fotos do contêiner
                                </h2>

                            </div>

                            <label
                                className={
                                    styles.zona_upload
                                }
                            >

                                <span className="material-symbols-outlined">
                                    photo_camera
                                </span>

                                <strong>
                                    Adicione fotos do contêiner
                                </strong>

                                <span>
                                    Selecione imagens do contêiner
                                </span>

                                <input
                                    ref={inputFotosRef}
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={
                                        adicionarFotos
                                    }
                                />

                            </label>

                            <div
                                className={
                                    styles.grade_fotos
                                }
                            >

                                {fotos.map(
                                    (foto, index) => (

                                        <div
                                            className={
                                                styles.miniatura_foto
                                            }
                                            key={index}
                                        >

                                            <img
                                                src={
                                                    URL.createObjectURL(
                                                        foto
                                                    )
                                                }
                                                alt={
                                                    `Foto ${index + 1}`
                                                }
                                            />

                                            <button
                                                type="button"
                                                className={
                                                    styles.remover_foto
                                                }
                                                onClick={() =>
                                                    removerFoto(
                                                        index
                                                    )
                                                }
                                            >

                                                <span className="material-symbols-outlined">
                                                    close
                                                </span>

                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </section>

                        {/* ========================= */}
                        {/* TERMOS DE ALUGUEL */}
                        {/* ========================= */}

                        <section className="painel">

                            <div className="secao_titulo">

                                <span className="icone_secao">

                                    <span className="material-symbols-outlined">
                                        description
                                    </span>

                                </span>

                                <h2>
                                    Termos de aluguel
                                </h2>

                            </div>

                            <div
                                className={`${styles.linha_adicionar} ${styles.quatro}`}
                            >

                                <div className="campo">

                                    <label>
                                        Tipo de aluguel
                                    </label>

                                    <div className="input_geral">

                                        <select
                                            value={
                                                tipoAluguelSelect
                                            }
                                            onChange={(event) =>
                                                setTipoAluguelSelect(
                                                    event.target.value
                                                )
                                            }
                                        >

                                            <option value="">
                                                Selecione o tipo
                                            </option>

                                            {tiposAluguel.map(
                                                (tipoAluguel) => (

                                                    <option
                                                        key={
                                                            tipoAluguel.Codigo
                                                        }
                                                        value={
                                                            tipoAluguel.Codigo
                                                        }
                                                    >
                                                        {
                                                            tipoAluguel.Nome
                                                        }
                                                    </option>

                                                )
                                            )}

                                        </select>

                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>

                                    </div>

                                </div>

                                <div className="campo">

                                    <label>
                                        Valor (R$)
                                    </label>

                                    <input
                                        type="text"
                                        inputMode="decimal"
                                        placeholder="Ex.: 1890"
                                        value={
                                            valorConteiner
                                        }
                                        onChange={(event) =>
                                            setValorConteiner(
                                                permitirNumero(
                                                    event.target.value
                                                )
                                            )
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label>
                                        Multa por quebra (%)
                                    </label>

                                    <input
                                        type="text"
                                        inputMode="decimal"
                                        placeholder="Ex.: 10"
                                        value={multa}
                                        onChange={(event) =>
                                            setMulta(
                                                permitirNumero(
                                                    event.target.value
                                                )
                                            )
                                        }
                                    />

                                </div>

                                <button
                                    type="button"
                                    className="botao botao_escuro botao_adicionar"
                                    onClick={
                                        adicionarTermoAluguel
                                    }
                                >

                                    <span className="material-symbols-outlined">
                                        add
                                    </span>

                                    Adicionar

                                </button>

                            </div>

                            <ul
                                className={
                                    styles.resultados_adicionar
                                }
                            >

                                {termosAluguel.map(
                                    (termo, index) => (

                                        <li key={index}>

                                            <div>

                                                <p className="etiqueta">
                                                    {termo.tipo}
                                                </p>

                                                <strong>
                                                    R$ {termo.valor} · {termo.multa}%
                                                </strong>

                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removerTermo(
                                                        index
                                                    )
                                                }
                                            >

                                                <span
                                                    className={`${styles.excluir_adicionar} material-symbols-outlined`}
                                                >
                                                    close
                                                </span>

                                            </button>

                                        </li>

                                    )
                                )}

                            </ul>

                        </section>

                        {/* ========================= */}
                        {/* CADASTRAR */}
                        {/* ========================= */}

                        <button
                            type="button"
                            className="botao botao_claro botao_grande completo"
                            onClick={
                                cadastrarConteiner
                            }
                        >
                            Cadastrar contêiner
                        </button>

                    </div>

                </div>

            </main>

            <footer className="rodape">

                <p>
                    © 2026 ModuLeasy
                </p>

                <p>
                    Espaços que se adaptam a você.
                </p>

            </footer>
        </>
    );
}