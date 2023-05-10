import { definirCookie } from "../utils/cookies.js";

const socket = io();

export function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
};

socket.on("usuario_nao_encontrado", () => alert("Senha ou usuário não conferem!"));

socket.on("autenticacao_sucesso", (tokenJwt) => {
  definirCookie("tokenJwt", tokenJwt);

  alert("Usuário autenticado com sucesso!")
  window.location.href = "/";
});

socket.on("autenticacao_erro", () => alert("Erro na autenticação!"));


