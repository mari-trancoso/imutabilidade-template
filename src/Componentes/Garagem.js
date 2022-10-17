import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import { useState } from "react";

function Garagem(props) {

  const [automovel1, setAutomovel1] = useState({cor: "Vermelho", ano: 2022, flex:"sim"})

  const [automovel2, setAutomovel2] = useState({cor: "Vermelho", ano: 2022, flex:"sim"})

  const [automovel3, setAutomovel3] = useState({cor: "Vermelho", ano: 2022, flex:"sim"})

  const [automovel4, setAutomovel4] = useState({cor: "Vermelho", ano: 2022, flex:"sim"})

  const mudaNomeGaragem = () => {
    props.setNome("Ammal")
  }

  const trocaCarro1 = () => {
    const novoCarro = {
      ...automovel1,
      cor: "lilás"
    }
    setAutomovel1(novoCarro)
  }

  const trocaCarro2 = () => {
    const novoCarro = {
      ...automovel2,
      ano: 3000
    }
    setAutomovel2(novoCarro)
  }

  const trocaCarro3 = () => {
    setAutomovel3({...automovel3, cor :"laranja"})
  }

  const trocaCarro4 = () => {
    setAutomovel4({...automovel4, ano: 1800})
  }

  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <button onClick={mudaNomeGaragem}>MudaNome</button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel1.cor}
        ano={automovel1.ano}
        flex={automovel1.flex}
        trocaCarro={trocaCarro1}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
        trocaCarro={trocaCarro2}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex}
        trocaCarro={trocaCarro3}
      />
      <Carro adicionadoPor={props.nome} cor={automovel4.cor}
        ano={automovel4.ano}
        flex={automovel4.flex} trocaCarro={trocaCarro4} />
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
