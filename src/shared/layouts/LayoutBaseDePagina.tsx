import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePagina {
     children: React.ReactNode;
     title: string;
     barraDeFerramentas: React.ReactNode;

}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({ children, title, barraDeFerramentas }) => {

     const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
     const theme = useTheme();
     const { toggleDrawerOpen } = useDrawerContext();

     return (
          <Box height='100%' display='flex' flexDirection='column' gap={1}>
               <Box padding={1} height={theme.spacing(12)} display='flex' alignItems='center'>
                    {
                         smDown && (
                              <IconButton onClick={toggleDrawerOpen}>
                                   <Icon>menu</Icon>
                              </IconButton>
                         )
                    }
                    <Typography variant='h5'>
                         {title}
                    </Typography>
               </Box>
               <Box>
                    {barraDeFerramentas}
               </Box>
               <Box>
                    {children}
               </Box>
          </Box>
     );
};