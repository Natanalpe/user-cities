import { useEffect } from "react";
import { useDrawerContext } from "../shared/contexts";
import { Dashboard, ListagemDeCidade } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {

     const { setDrawerOptions } = useDrawerContext();

     useEffect(() => {
          setDrawerOptions([
               {
                    label: 'Página inicial',
                    icon: 'home',
                    path: '/pagina-inicial'
               },
               {
                    label: 'Cidades',
                    icon: 'location_city',
                    path: '/cidades'
               }
          ]);
     }, [])

     return (
          <Routes>
               <Route path="/pagina-inicial" element={<Dashboard />} />
               <Route path="/cidades/detalhe/:id" element={<ListagemDeCidade />} />
               <Route path="*" element={<Navigate to="/pagina-inicial" />} />
          </Routes>
     );
}