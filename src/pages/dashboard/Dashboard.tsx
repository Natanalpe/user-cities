import { FerramentasDaListagem, FerramentasDeDetalhes } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
     
     return (
          <LayoutBaseDePagina 
               titulo="Página inicial"
               barraDeFerramentas={
                    <FerramentasDeDetalhes mostrarBotaoSalvarEFechar mostrarBotaoApagarCarregando/>
               }>

               Test
          </LayoutBaseDePagina>
     );
};