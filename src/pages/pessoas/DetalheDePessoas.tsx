import { useNavigate, useParams } from "react-router-dom"
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { useEffect, useState } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { LinearProgress, TextField } from "@mui/material";
import { Form } from "@unform/web";
import { VTextField } from "../../shared/forms";

export const DetalheDePessoas: React.FC = () => {

    const navigate = useNavigate();
    const { id = 'nova' } = useParams<'id'>();
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            PessoasService.getById(Number(id))
                .then(result => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/pessoas');
                    } else {
                        setNome(result.nomeCompleto);
                        console.log(result);
                    }
                })
        }
    }, [id]);

    const handleDelete = (id: number) => {
        if (confirm("Deseja realmente apagar?")) {
          PessoasService.deleteById(id)
            .then(result => {
              if (result instanceof Error) {
                alert(result.message);
              } else {
                alert('Pessoa apagada!');
                navigate('/pessoas');
              }
            });
        }
      }

    return (
        <LayoutBaseDePagina
            titulo={id === 'nova' ? 'Nova pessoa' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo="Nova"
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvar={() => { }}
                    aoClicarEmSalvarEFechar={() => {}}
                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                />
            }
        >
            <Form onSubmit={(data) => console.log(data)}>
                <VTextField name='nomeCompleto' />
                <button type='submit'>submit</button>
            </Form>
        </LayoutBaseDePagina>
    )
}