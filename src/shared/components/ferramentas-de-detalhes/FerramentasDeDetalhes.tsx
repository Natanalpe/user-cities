import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";

interface IFerramentasDeDetalhesProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar
}) => {

    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            display='flex'
            alignItems='center'
            height={theme.spacing(5)}
            component={Paper}
        >
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&
                <Button
                    color='primary'
                    disableElevation
                    variant='contained'
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvar}
                >
                    Salvar
                </Button>
            }

            {mostrarBotaoSalvarCarregando &&
                <Skeleton width={110} height={60} />
            }

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) &&
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvarEFechar}
                >
                    Salvar e voltar
                </Button>
            }

            {mostrarBotaoSalvarEFecharCarregando &&
                <Skeleton width={170} height={60} />
            }

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>delete</Icon>}
                    onClick={aoClicarEmApagar}
                >
                    Apagar
                </Button>
            }

            {mostrarBotaoApagarCarregando &&
                <Skeleton width={110} height={60} />
            }

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) &&
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>add</Icon>}
                    onClick={aoClicarEmNovo}
                >
                    {textoBotaoNovo}
                </Button>
            }

            {mostrarBotaoNovoCarregando &&
                <Skeleton width={90} height={60} />
            }

            <Divider
                variant='middle'
                orientation="vertical" />

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>reply</Icon>}
                    onClick={aoClicarEmVoltar}
                >
                    Voltar
                </Button>
            }

            {mostrarBotaoVoltarCarregando &&
                <Skeleton width={110} height={60} />
            }

            Ferramentas de detalhes
        </Box>
    );
}