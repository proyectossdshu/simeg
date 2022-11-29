import MainLayout from "../../components/MainLayout";
import Programas from "../../components/Programas/Programas";
import Recomendaciones from "../../components/Recomendaciones/Recomendaciones";
import Simeg from "../../components/Simeg/Simeg";
import TipoEvaluacion from "../../components/TipoEvaluacion/TipoEvaluacion";
import '../../App.css';

const SimegHome = () => {
  return (
    <MainLayout>
      <Simeg />
      <Recomendaciones />
      <Programas />
      <TipoEvaluacion />
    </MainLayout>
  );
};

export default SimegHome;
