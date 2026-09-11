import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import de Css
import '../public/CSS/cadastrar_conteiner.css'
import '../public/CSS/detalhes_locacao.css'
import '../public/CSS/estilo_cadastro&login.css'
import '../public/CSS/estilo_geral.css'
import '../public/CSS/deposito.css'
import '../public/CSS/locacoes_locatario.css'
import '../public/CSS/catalogo_locatario.css'
// import de Css

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
