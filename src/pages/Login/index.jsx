import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Login(){
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
                                <span className="material-symbols-outlined">login</span>
                            </span>

                            <div>
                                <h1>Bem-vindo de volta</h1>
                                <p>Entre na sua conta e continue de onde parou.</p>
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

                                    <div className={styles.link_direita}>
                                        <Link to="/esqueci-senha">Esqueceu a senha?</Link>
                                    </div>
                                </div>

                                <button className="botao botao_escuro completo">Entrar</button>
                            </div>
                        </div>

                        <p className={styles.outra_pagina_login}>
                            Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                        </p>

                    </div>
                </div>
            </main>
        </>
    );
}