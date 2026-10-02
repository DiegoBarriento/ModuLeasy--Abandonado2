import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './index.module.css';
import axios from 'axios';

export default function Cadastro(){

    const [tipoUsuario, setTipoUsuario] = useState('locatario');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [nome, setNome] = useState('');

    function btnCriarClick(){
        if(email === ""){
            return alert('O campo de email é obrigatório!')
        }

        if(senha === ""){
            return alert('O campo de senha é obrigatório!')
        }

        if(confirmarSenha === ""){
            return alert('O campo de confirmar senha é obrigatório!')
        }

        if(cpfCnpj === ""){
            return alert('O campo de CPF/CNPJ é obrigatório!')
        }
        if(senha !== confirmarSenha){
            return alert('As senhas não coincidem!')
        }

        if(tipoUsuario === 'locatario'){
            axios.post("http://localhost/ModuLeasy/api/criarLocatario.php", 
            {
                /* conteudo do corpo JSON da requisicão */
                'email': email,
                'cnpj/cpf': cpfCnpj,
                'nome': nome,
                'senha': senha
            },
            {
                withCredentials: true,
            }
            ).then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                // A resposta veio SEM erros
            } 
            })
            .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
            })
            .finally(function () {
            // O que fazer independente de ter dado erro ou não
            });
        }
        else if(tipoUsuario === 'locador'){
            axios.post("http://localhost/ModuLeasy/api/criarLocador.php", 
            {
                /* conteudo do corpo JSON da requisicão */
                'email': email,
                'cnpj': cpfCnpj,
                'nome': nome,
                'senha': senha
            },
            {
                withCredentials: true,
            }
            ).then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                // A resposta veio SEM erros
            } 
            })
            .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
            })
            .finally(function () {
            // O que fazer independente de ter dado erro ou não
            });
        }


    }

    return(
        <>
            <main className={`${styles.pagina_login} ${styles.telas_sem_menu}`}>
                <div className={styles.visual_login}>
                    <Link className={styles.login_marca} to="/">
                        <img className="logo_completa_menor" src="public/images/logo.png" />
                    </Link>

                    <div className={styles.login_slogan}>
                        <span>Espaços sem limites</span>
                        <h1 className={styles.slogan}>Um novo espaço.<br />Novas possibilidades.</h1>
                        <p>Encontre o módulo ideal para o seu próximo passo.</p>
                    </div>

                    <p className={styles.rodape_login}>© 2026 ModuLeasy · Feito para ir além.</p>
                </div>

                <div className={styles.formulario_login}>
                    <div className={styles.caixa_login}>

                        <div className={styles.linha_login}>
                            <span className={styles.icone_login}>
                                <span className="material-symbols-outlined">person_add</span>
                            </span>

                            <div>
                                <h1>Crie sua conta</h1>
                                <p>Escolha como você quer usar o ModuLeasy.</p>
                            </div>
                        </div>

                        <div className={styles.cartao_login}>
                            <button className={`botao botao_borda ${styles.botao_google}`}>
                                <span className={styles.g_simbolo}>G</span>
                                Continuar com Google
                            </button>

                            <div className={styles.divisor_ou}>
                                <div></div>
                                <span>ou</span>
                                <div></div>
                            </div>

                            <div className={styles.espaco_form}>
                                <div className="campo">
                                    <span className={styles.tipo_usuario_escolha} id="tipo-usuario-label">Quero me cadastrar como</span>

                                    <fieldset className={styles.alternar_tipo_usuario} aria-labelledby="tipo-usuario-label" role="radiogroup" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
                                        <label>
                                            <input type="radio" name="tipoUsuario" value="locatario" defaultChecked />
                                            <span>Locatário</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="tipoUsuario" value="locador" />
                                            <span>Locador</span>
                                        </label>
                                    </fieldset>
                                </div>

                                <div className="campo">
                                    <label>Nome</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">mail</span>
                                        <input type="text" placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Email</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">mail</span>
                                        <input type="email" placeholder="voce@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Senha</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">lock</span>
                                        <input type="password" placeholder="••••••••" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Confirme a senha</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">lock</span>
                                        <input type="password" placeholder="••••••••" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>{ tipoUsuario === 'locatario' ? 'CPF/CNPJ' : 'CNPJ'}</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">credit_card</span>
                                        <input type="text" placeholder="000.000.000-00" value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />
                                    </div>
                                </div>

                                <button className="botao botao_escuro completo" onClick={btnCriarClick}>Criar conta</button>
                            </div>
                        </div>

                        <p className={styles.outra_pagina_login}>
                            Já tem uma conta? <Link to="/login">Entrar</Link>
                        </p>

                    </div>
                </div>
            </main>
        </>
    );
}