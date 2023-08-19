import Card from "../Card";

export default function CardsContainer() {
  return (
    <div id="howitworks" className="flex justify-center gap-9 pl-3 w-full flex-wrap">
      <div className="flex justify-center gap-9 flex-wrap">
        <Card beforeColor="before:bg-vintage-yellow">
          Levante do gancho e <b>deixe sua mensagem</b> após o sinal
        </Card>
        <Card beforeColor="before:bg-vintage-orange">
          Bateria com duração de até <b>12 horas</b>
        </Card>
        <Card beforeColor="before:bg-vintage-green">
          <b>Não precisa</b> de wi-fi
        </Card>
      </div>
      <div className="flex justify-center gap-9 flex-wrap">
        <Card beforeColor="before:bg-vintage-yellow">
          <b>Não precisa</b> de linha telefônica
        </Card>
        <Card beforeColor="before:bg-vintage-orange">
          <b>Receba todas as mensagens</b> digitalmente separadas por faixas
        </Card>
      </div>
    </div>
  );
}
