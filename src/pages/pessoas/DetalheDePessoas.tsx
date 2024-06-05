import { useNavigate, useParams } from "react-router-dom"
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";

export const DetalheDePessoas: React.FC = () => {

    const navigate = useNavigate();

    const { id = 'nova' } = useParams<'id'>();

    return (
        <LayoutBaseDePagina
            titulo="Detalhe de pessoa"
            barraDeFerramentas={
                <FerramentasDeDetalhe 
                    textoBotaoNovo="Nova"
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}
                    
                    aoClicarEmNovo={() => {}}
                    aoClicarEmSalvar={() => {}}
                    aoClicarEmApagar={() => {}}
                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmSalvarEFechar={() => {}}
                />
            }
        >

        </LayoutBaseDePagina>
    )
}