import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from './pages/Landing';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MenuLateral from "./components/MenuLateral";
import Catalogo from "./pages/Catalogo";
import MeusConteineres from "./pages/MeusConteineres";
import CadastrarConteiner from "./pages/CadastrarConteiner";
import DetalhesConteinerCatalogo from "./pages/DetalhesConteinerCatalogo";
import Pagamento from "./pages/Pagamento";
import VerConteiner from "./pages/VerConteiner";
import VerLocacao from "./pages/VerLocacao";
import MinhasLocacoes from "./pages/MinhasLocacoes";

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route element={<MenuLateral/>}>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/meus_conteineres' element={<MeusConteineres/>}/>
            <Route path='/cadastrar_conteiner' element={<CadastrarConteiner/>}/>
            <Route path='/detalhes_conteiner_catalogo' element={<DetalhesConteinerCatalogo/>}/>
            <Route path='/pagamento' element={<Pagamento/>}/>
            <Route path='/ver_conteiner' element={<VerConteiner/>}/>
            <Route path='/ver_locacao' element={<VerLocacao/>}></Route>
            <Route path='/minhas_locacoes' element={<MinhasLocacoes/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}