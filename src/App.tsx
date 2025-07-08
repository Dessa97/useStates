import { useState } from "react";

/*useState serve para ter algo dinamico/mutavel dentro da aplicação*/

/*Criando um objeto*/
interface AlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  /*Criando um useState texto que começa vazio (Pode ou não começar vazio)
  nome = acessa o valor ("") de useState
  setNome = Para trocar o valor de "nome"*/
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  /* usar"<>" para definir os tipos de dados aceitos no useState
  /*useState que recebe um objeto, e exibe as informações do aluno na tela*/
  const [aluno, setAluno] = useState<AlunoProps>();

  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setAluno({
      nome: nome,
      idade: idade,
    });
  }

  function aumentar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }
    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <div>
      <h1> Conhecendo useState</h1>
      <input
        placeholder="Digite o nome"
        /*Atribuindo o useState{nome} ao input do HTML*/
        value={nome}
        /*Quando digitar um valor no campo de input, o onChange é disparado e 
        atraves do setNome o valor é passado para o useState("")*/
        onChange={(e) => setNome(e.target.value)}
      />
      <br /> <br />
      <input
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br /> <br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr />
      <h3>Bem vindo: {aluno?.nome}</h3>
      <h4>Idade: {aluno?.idade}</h4>
      <hr />
      <br />
      <h1>Contador com useState</h1>
      <button onClick={aumentar}>+</button> {contador}{" "}
      <button onClick={diminuir}>-</button>
    </div>
  );
}
