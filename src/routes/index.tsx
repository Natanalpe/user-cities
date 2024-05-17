import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { Dashboard } from "../pages";
import { useEffect } from "react";

export const AppRoutes = () => {

     const { setDrawerOptions } = useDrawerContext();

     useEffect(() => {
          setDrawerOptions([
               {
                    label: 'Página inicial',
                    icon: 'home',
                    path: '/pagina-inicial'
               }
          ]);
     }, [])

     return (
          <Routes>
               <Route path="/pagina-inicial" element={<Dashboard />}/>
               <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
          </Routes>
     );
}