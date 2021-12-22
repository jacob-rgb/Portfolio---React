import { Route, Routes } from "react-router-dom";
import { DataProvider } from "../context/DataProviders";
import { NotFound } from "../pages/NotFound";
import Portfolio from "../Portfolio";


export const Main = () => {
    return (
      <DataProvider>
      <Routes>
        <Route path="/" element={< Portfolio />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
      </DataProvider>
    )
}
