import { PessoasService } from "../../shared/services/pessoas/PessoasServices";
import { FerramentasDaListagem } from "../../shared/components/index";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDebounce } from "../../shared/hooks";

export const ListagemDePessoas: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce(3000);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);


    useEffect(() => {

        debounce(() => {
            PessoasService.getAll(1, busca)
                .then((result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        console.log(result.data)
                    }
                });
        })
    }, [busca]);

    return (
        <LayoutBaseDePagina
            titulo="Lstagem pessoas"
            barraDeFerramentas={
                <FerramentasDaListagem
                    textoBotaoNovo='Nova'
                    mostrarInputBusca
                    textoDaBusca={busca}
                    aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto as string }, { replace: true })}
                />
            } >
            chil
        </LayoutBaseDePagina>
    )
}