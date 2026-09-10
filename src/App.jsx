import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetalhesLocacao from './components/DetalhesLocacao';
import CadastrarContainer from './components/CadastrarContainer';
import CadastroLoginUsuario from './components/CadastroLoginUsuario';
import MinhasLocacoes from './components/MinhasLocacoes';
import BaseHeader from './components/BaseHeader';
import Catalogo from './components/Catalogo';
import Financeiro from './components/Financeiro';
import MeusConteiners from './components/MeusConteiners';
import MeusDepositos from './components/MeusDepositos';

export default function App() {
  const usuario = {tipoUsuario:'Locador', nome:'Juca Bala'}; // esses dadso depois vão ser pegos pelo local roste
  const tipoUsuario = usuario.tipoUsuario;
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro_login" element={<CadastroLoginUsuario />}/>
        <Route path="/" element={<BaseHeader />}>
          {tipoUsuario === "Locador" ? <Route index element={<Financeiro/>}/> : <Route index element={<Catalogo/>}/>}
          <Route path="detalhes_locacao" element={<DetalhesLocacao/>}/>
          <Route path="cadastro_container" element={<CadastrarContainer/>}/>
          <Route path="minhas_locacoes" element={<MinhasLocacoes/>}/>
          <Route path="meus_containers" element={<MeusConteiners/>}/>
          <Route path="meus_depositos" element={<MeusDepositos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}  
  
  
  
  
  
  
  
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <section id="center">
  //       <div className="hero">
  //         <img src={heroImg} className="base" width="170" height="179" alt="" />
  //         <img src={reactLogo} className="framework" alt="React logo" />
  //         <img src={viteLogo} className="vite" alt="Vite logo" />
  //       </div>
  //       <div>
  //         <h1>Get started</h1>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="counter"
  //         onClick={() => setCount((count) => count + 1)}
  //       >
  //         Count is {count}
  //       </button>
  //     </section>

  //     <div className="ticks"></div>

  //     <section id="next-steps">
  //       <div id="docs">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#documentation-icon"></use>
  //         </svg>
  //         <h2>Documentation</h2>
  //         <p>Your questions, answered</p>
  //         <ul>
  //           <li>
  //             <a href="https://vite.dev/" target="_blank">
  //               <img className="logo" src={viteLogo} alt="" />
  //               Explore Vite
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://react.dev/" target="_blank">
  //               <img className="button-icon" src={reactLogo} alt="" />
  //               Learn more
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div id="social">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#social-icon"></use>
  //         </svg>
  //         <h2>Connect with us</h2>
  //         <p>Join the Vite community</p>
  //         <ul>
  //           <li>
  //             <a href="https://github.com/vitejs/vite" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#github-icon"></use>
  //               </svg>
  //               GitHub
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://chat.vite.dev/" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#discord-icon"></use>
  //               </svg>
  //               Discord
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://x.com/vite_js" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#x-icon"></use>
  //               </svg>
  //               X.com
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://bsky.app/profile/vite.dev" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#bluesky-icon"></use>
  //               </svg>
  //               Bluesky
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>

  //     <div className="ticks"></div>
  //     <section id="spacer"></section>
  //   </>
  // )


