const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);

  socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
  socket.on("cadastro_erro", () => alert("Erro ao cadastrar usuário!"));
  socket.on("usuario_ja_existente", () => alert("Nome de usuário já está em uso!"));
};

export { emitirCadastrarUsuario };
