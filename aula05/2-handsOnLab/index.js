// salvar um usuario no ./data/usuarios.json com a criptografia
// como salvar o dado no arquivo
// como resgartar esse dado do arquivo
// como fazer o input do dado
// { usuario: "mariana@teste.com", senha: "xablau123" }
// ao receber um usuario com nome e senha, deve validar se a senha enviada, confere com a senha do "DB"

const fs = require("fs");
const crypto = require("crypto");

const lerArquivo = async () => {
  try {
    let resultado = await fs.promises.readFile("./data/usuarios.json", "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  } catch (error) {
    console.log("Error", error);
  }
};

const gravarDados = async (dados) => {
  try {
    const dataToSave = JSON.stringify(dados);
    await fs.promises.writeFile("./data/usuarios.json", dataToSave);
  } catch (error) {
    console.log("Error", error);
  }
};

const salvarUsuario = async (usuario) => {
  try {
    const listaUsuarios = await lerArquivo();
    console.log(usuario.senha);

    usuario.senha = crypto
      .createHash("sha256")
      .update(usuario.senha)
      .digest("hex");
    listaUsuarios.push(usuario);
    await gravarDados(listaUsuarios);
  } catch (error) {
    console.log(error);
  }
};

const validarUsuario = async (usuario) => {
  try {
    const listaUsuarios = await lerArquivo();
    const usuarioEncontrado = listaUsuarios.find((u) => {
      return u.usuario === usuario.usuario;
    });

    const senhaCriptografada = crypto
      .createHash("sha256")
      .update(usuario.senha)
      .digest("hex");

    console.log;
    if (usuarioEncontrado.senha === senhaCriptografada) {
      console.log("Usuario Logado");
    } else {
      console.log("Usuario nao logado");
    }

    return usuarioEncontrado;
  } catch (error) {}
};

const main = async () => {
  // await salvarUsuario({ usuario: "camila@teste.com", senha: "xablau123" });
  // const senha = "xablau123";
  //const teste = crypto.createHash("sha256").update(senha).digest("hex");
  //console.log({ senha, teste });
  const user = await validarUsuario({
    usuario: "pedro@teste.com",
    senha: "xablau123",
  });
  //console.log(user);
};

main();
