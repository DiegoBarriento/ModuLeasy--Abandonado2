import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Cadastro(){
    return(
        <>
            <main className={`${styles.pagina_login} ${styles.telas_sem_menu}`}>
                <div className={styles.visual_login}>
                    <Link className={styles.login_marca} to="/">
                        <img className="logo_completa_menor" src="/images/logo.png" />
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
                                    <span className={styles.tipo_usuario_escolha}>Quero me cadastrar como</span>

                                    <div className={styles.alternar_tipo_usuario}>
                                        <button className={styles.selecionado}>Locatário</button>
                                        <button>Locador</button>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Email</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">mail</span>
                                        <input type="email" placeholder="voce@exemplo.com" />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Senha</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">lock</span>
                                        <input type="password" placeholder="••••••••" />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Confirme a senha</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">lock</span>
                                        <input type="password" placeholder="••••••••" />
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>CPF / CNPJ</label>

                                    <div className={styles.campo_icone}>
                                        <span className="material-symbols-outlined">credit_card</span>
                                        <input type="text" placeholder="000.000.000-00" />
                                    </div>
                                </div>

                                <button className="botao botao_escuro completo">Criar conta</button>
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