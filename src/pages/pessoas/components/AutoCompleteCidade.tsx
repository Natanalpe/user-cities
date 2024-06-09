import { CidadesService } from "../../../shared/services/api/cidades/CidadesService";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../../shared/hooks";
import { useField } from "@unform/core";

interface IAutoCompleteCidadesProps {
    isExternalLoading?: boolean
}

type TAutoCompleteOption = {
    id: number,
    label: string
}

export const AutoCompleteCidade: React.FC<IAutoCompleteCidadesProps> = ({ isExternalLoading = false }) => {

    const { fieldName, registerField, defaultValue, error, clearError } = useField('cidadeId');
    const { debounce } = useDebounce();

    const [idSelecionado, setIdSelecionado] = useState<number | undefined>(defaultValue);
    const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [busca, setBusca] = useState('');


    useEffect(() => {
        registerField({
            name: '',
            getValue: () => idSelecionado,
            setValue: (_, newSelectedId) => setIdSelecionado(newSelectedId)
        });
    }, [registerField, fieldName, idSelecionado]);

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            CidadesService.getAll(1, busca)
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setOpcoes(result.data.map(cidade => ({ id: cidade.id, label: cidade.nome })));
                    }
                });
        });
    }, [busca]);

    const autoCompleteSelectedOption = useMemo(() => {
        if (!idSelecionado) return null;

        const selectedOption = opcoes.find(opcao => opcao.id === idSelecionado);
        if (!selectedOption) return null;

        return selectedOption;
    }, [idSelecionado, opcoes]);

    return (
        <Autocomplete
            disabled={isExternalLoading}
            value={autoCompleteSelectedOption}
            onInputChange={(_, novoValor) => setBusca(novoValor)}
            popupIcon={(isExternalLoading || isLoading) && <CircularProgress size={28} />}
            onChange={(_, novoValor) => {
                setIdSelecionado(novoValor?.id);
                setBusca('');
                clearError();
            }}
            loading={isLoading}
            loadingText="Carregando..."
            openText="Abrir"
            closeText="Fechar"
            disablePortal
            options={opcoes}
            renderInput={(params) => {
                <TextField
                    {...params}
                    label="Cidade"
                    error={!!error}
                    helperText={error}
                />
            }}
        />
    );
};