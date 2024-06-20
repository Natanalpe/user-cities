import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { CidadesService } from '../../shared/services/api/cidades/CidadesService';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { useEffect, useState } from 'react';

export const Dashboard = () => {

  const [isLoadingCidades, setIsLoadingCidades] = useState(true);
  const [isLoadingPessoas, setIsLoadingPessoas] = useState(true);
  const [totalCountCidades, setTotalCountCidades] = useState(0);
  const [totalCountPessoas, setTotalCountPessoas] = useState(0);

  useEffect(() => {
    setIsLoadingCidades(true);
    setIsLoadingPessoas(true);

    CidadesService.getAll(1)
      .then((result) => {
        setIsLoadingCidades(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCountCidades(result.totalCount);
        }
      });

    PessoasService.getAll(1)
      .then((result) => {
        setIsLoadingPessoas(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCountPessoas(result.totalCount);
        }
      });
  }, []);

  return (
    <LayoutBaseDePagina
      titulo='Página inicial'
      barraDeFerramentas={
        <FerramentasDeDetalhe mostrarBotaoNovo={false} />
      }
    >
      <Box width='100%' display='flex'>
        <Grid container>
          <Grid item container spacing={2}>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant='h4' align='center'>
                    Total de cidades
                  </Typography>
                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='h5' align='center'>
                      {isLoadingCidades && (
                        'Carregando...'
                      )}
                    </Typography>
                    <Typography variant='h2' align='center'>
                      {!isLoadingCidades && (
                        totalCountCidades
                      )}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant='h4' align='center'>
                    Total de pessoas
                  </Typography>
                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='h5' align='center'>
                      {isLoadingPessoas && (
                        'Carregando...'
                      )}
                    </Typography>
                    <Typography variant='h2' align='center'>
                      {!isLoadingPessoas && (
                        totalCountPessoas
                      )}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </LayoutBaseDePagina>
  );
};
