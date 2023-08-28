import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button } from "antd";
import { Outlet, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

// eslint-disable-next-line
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Modulo ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

// eslint-disable-next-line
const App = ({ setUsuarioAutenticado, usuarioAutenticado }) => {
  const isAdmin = usuarioAutenticado && usuarioAutenticado.data && usuarioAutenticado.data[0].isAdmin;
  const AdminItems = [
    {
      key: "sub1",
      icon: <UserOutlined />,
      label: "Cadastro",
      type: "module",
      children: [
        {
          key: 1,
          label: <Link to={"/cadastropessoafisica"}> Pessoa Fisica</Link>,
        },
        {
          key: 2,
          label: <Link to={"/cadastropessoajuridica"}> Pessoa Juridica</Link>,
        },
      ],
    },
    {
      key: "sub2",
      icon: <LaptopOutlined />,
      label: "Controle de Caixa",
      type: "module",
      children: [
        {
          key: 5,
          label: <Link to={"/depositodedinheiro"}> Deposito de Dinheiro</Link>,
        },
        {
          key: 6,
          label: <Link to={"/retiradadedinheiro"}> Retirada de Dinheiro</Link>,
        },
      ],
    },
    {
      key: "sub3",
      icon: <NotificationOutlined />,
      label: "Financeiro",
      type: "module",
      children: [
        { key: 9, label: <Link to={"/balancete"}> Balancete</Link> },
        { key: 10, label: <Link to={"/crediario"}> Crediário</Link> },
      ],
    },
    {
      key: "sub4",
      icon: <SettingOutlined />,
      label: "Administrativo",
      type: "module",
      visible: 'false',
      children: [
        { key: 11, label: <Link to={"/usuariosadmin"}> Usuários</Link> },
        { key: 12, label: <Link to={"/permissoes"}> Permissões</Link> },
      ],
    },
  ];
  const UserItems = [
    {
      key: "sub1",
      icon: <UserOutlined />,
      label: "Cadastro",
      type: "module",
      children: [
        {
          key: 1,
          label: <Link to={"/cadastropessoafisica"}> Pessoa Fisica</Link>,
        },
        {
          key: 2,
          label: <Link to={"/cadastropessoajuridica"}> Pessoa Juridica</Link>,
        },
      ],
    },
    {
      key: "sub2",
      icon: <LaptopOutlined />,
      label: "Controle de Caixa",
      type: "module",
      children: [
        {
          key: 5,
          label: <Link to={"/depositodedinheiro"}> Deposito de Dinheiro</Link>,
        },
        {
          key: 6,
          label: <Link to={"/retiradadedinheiro"}> Retirada de Dinheiro</Link>,
        },
      ],
    },
    {
      key: "sub3",
      icon: <NotificationOutlined />,
      label: "Financeiro",
      type: "module",
      children: [
        { key: 9, label: <Link to={"/balancete"}> Balancete</Link> },
        { key: 10, label: <Link to={"/crediario"}> Crediário</Link> },
      ],
    }
  ];
  // eslint-disable-next-line
  const campos = usuarioAutenticado.data[0];
  const handleLogout = () => {
    setUsuarioAutenticado(false);
  };

  console.log(isAdmin);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh", margin: "0" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}> SnapShop</h1>
        <div style={{ marginLeft: "auto" }}>
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <p>
              Olá, <strong>{campos.nome}</strong>
            </p>
            <Menu
              mode="inline"
              style={{
                height: "100%",
              }}
              items={isAdmin ? AdminItems : UserItems}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
