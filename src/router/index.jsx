import LoginPage from "../pages/auth/LoginPage/LoginPage";
import LayoutPadrao from '../pages/layout/Layout'
import CadastroPessoaFisica from '../pages/components/Cadastros/PessoaFisica/CadastroPessoaFisica';
import Dashboard from '../pages/components/Dashboard/Dashboard'
import CadastroPessoaJuridica from '../pages/components/Cadastros/Pessoa Juridica/CadastroPessoaJuridica';

const myRoutes = [
  {
    element: <LayoutPadrao />,
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
    ],
  },
  {
    element: <LoginPage />,
    path: "/",
  },
];

export default myRoutes;
