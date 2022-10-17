import Garagem from "./Componentes/Garagem";
import { GlobalStyled } from "./globalStyled";
import { useState } from "react";

export default function App() {
  //const nome = "Turma";
  const [nome, setNome] = useState("Turma")

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} 
      mensagemAprentacao={apresentaGaragem} 
      setNome = {setNome}/>
    </div>
  );
}
