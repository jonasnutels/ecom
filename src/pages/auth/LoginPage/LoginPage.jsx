import { LockOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { message, Tabs, notification, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../_auth/Supabase";

// eslint-disable-next-line
export default function LoginPage({ setUsuarioAutenticado }) {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("account");
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const [api, contextHolder] = notification.useNotification();

  const handleLogin = async () => {
    const { data } = await supabase
      .from("usuario")
      .select("*")
      .like("usuario", `%${usuario}%`);
    if (
      data.length > 0 &&
      usuario === data[0].usuario &&
      senha === data[0].senha
    ) {
      api.success({
        message: `Redirencionando`,
        description: "Usuário Autenticado ! (:",
      });
      setTimeout(() => {
        setUsuarioAutenticado({ data });
        navigate("/dashboard");
      }, 2000); // Atraso de 2 segundos
    } else {
      api.error({
        message: `Dados invalidos`,
        description: "Usuário ou Senha incorreto",
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "calc(100vh - 48px)",
        margin: -24,
      }}
    >
      {contextHolder}
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="src\assets\logo.jpg"
        title="SnapShop"
        subTitle="O Maior e-commerce não fiscal do mundo (:"
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          ></div>
        }
        submitter={{
          resetButtonProps: { type: "dashed" },
          submitButtonProps: { style: { display: "none" } },
        }}
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey)}
        >
          <Tabs.TabPane key={"account"} tab={"Login com conta"} />
          <Tabs.TabPane key={"phone"} tab={"Login com telefone"} />
        </Tabs>
        {loginType === "account" && (
          <>
            <ProFormText
              name="nomeDeUsuario"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixoIcone"} />,
              }}
              placeholder={"Nome de usuário: admin ou usuário"}
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome de usuário!",
                },
              ]}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <ProFormText.Password
              name="senha"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixoIcone"} />,
              }}
              placeholder={"Senha"}
              rules={[
                {
                  required: true,
                  message: "Por favor, insira a senha!",
                },
              ]}
              onChange={(e) => setSenha(e.target.value)}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <MobileOutlined className={"prefixoIcone"} />,
              }}
              name="telefone"
              placeholder={"Número de telefone"}
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o número de telefone!",
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "Formato de telefone inválido!",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixoIcone"} />,
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder={"Insira o código de verificação"}
              captchaTextRender={(tempo, contagem) => {
                if (tempo) {
                  return `${contagem} ${"Obter código"}`;
                }
                return "Obter código";
              }}
              name="verificacao"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o código de verificação!",
                },
              ]}
              onGetCaptcha={async () => {
                message.success(
                  "Código de verificação obtido com sucesso! Código: 1234"
                );
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="loginAutomatico">
            Login automático
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            Esqueceu a senha
          </a>
        </div>
        <Button type="primary" onClick={handleLogin} style={{ width: "100%" }}>
          Entrar
        </Button>
      </LoginFormPage>
    </div>
  );
}
