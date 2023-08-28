import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import LayoutPadrao from "./pages/layout/Layout";
import CadastroPessoaFisica from "./pages/components/Cadastros/PessoaFisica/CadastroPessoaFisica";
import Dashboard from "./pages/components/Dashboard/Dashboard";
import CadastroPessoaJuridica from "./pages/components/Cadastros/Pessoa Juridica/CadastroPessoaJuridica";
import DepositoDeDinheiro from "./pages/components/ControleDeCaixa/DepositoDeDinheiro/DepositoDeDinheiro";
import RetiradadDeDinheiro from "./pages/components/ControleDeCaixa/RetiradaDeDinheiro/RetiradaDeDinheiro";
import Balancete from "./pages/components/Financeiro/Balancete/Balancete";
import Crediario from "./pages/components/Financeiro/Crediario/Crediario";
import UsuariosAdmin from "./pages/components/Admin/Usuarios/UsuariosAdmin";
import PermissoesAdmin from "./pages/components/Admin/Permissoes/Permissoes";
function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState();
  const router = createBrowserRouter([
    { element: <LoginPage setUsuarioAutenticado={setUsuarioAutenticado} />, path: "/", errorElement: <><a href="/">Pagina não encontrada (Click para voltar)</a></> },
    {
      element: usuarioAutenticado ? <LayoutPadrao  setUsuarioAutenticado={setUsuarioAutenticado} usuarioAutenticado={usuarioAutenticado}/> : <LoginPage setUsuarioAutenticado={setUsuarioAutenticado} />,
      children: [
        {
          path: "/cadastropessoafisica",
          element: <CadastroPessoaFisica />,
        },
        {
          path: "/cadastropessoajuridica",
          element: <CadastroPessoaJuridica />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/depositodedinheiro",
          element: <DepositoDeDinheiro />,
        },
        {
          path: "/retiradadedinheiro",
          element: <RetiradadDeDinheiro />,
        },
        {
          path: "/balancete",
          element: <Balancete />,
        },
        {
          path: "/crediario",
          element: <Crediario />,
        },
        {
          path: "/usuariosadmin",
          element:  <UsuariosAdmin />,
        },
        {
          path: "/permissoes",
          element: <PermissoesAdmin />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
