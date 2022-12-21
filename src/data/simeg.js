import { colors } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SegmentIcon from "@mui/icons-material/Segment";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import GroupIcon from "@mui/icons-material/Group";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export const navItems = [
  { name: "Inicio", anchor: "incio", id: "inicio" },
  { name: "¿Qué es el simeg?", anchor: "simeg", id: "simeg" },
  { name: "Recomendaciones", anchor: "recomendaciones", id: "recomendacion" },
  { name: "Programas evaluados", anchor: "programas", id: "programa" },
];

export const summary = {
  simeg:
    "El Sistema de Monitoreo y Evaluación de Programas Sociales (SIMEG) es una plataforma tecnológica del Gobierno del Estado de Guanajuato, administrada por la Secretaría de Desarrollo Social y Humano, cuyo objetivo es el integrar la información derivada de la operación de los procesos de monitoreo y evaluación de los programas sociales del estado.",

  evaluacion: {
    body1:
      "La evaluación de los programas sociales estatales es un proceso continuo y permanente de indagación y valoración de uno o varios aspectos relativos al diseño, implementación y resultados de los programas, teniendo como finalidad determinar la pertenencia y el logro de sus objetivos y metas, así como su eficiencia, eficacia, calidad, resultados, impacto y sostenibilidad.",
    body2:
      "La Secretaría de Desarrollo Social y Humano será la responsable de coordinar los ejercicios de evaluación de los PSE a partir de la definición del Plan Anual de Evaluación, siendo las dependencias y entidades responsables de la operación de los programas, las que realicen evaluaciones según la madurez y etapa del programa considerando los tipos de evaluación definidas en la normativa vigente.",
  },

  recomendacion: {
    body1:
      "El proceso de seguimiento a recomendaciones tiene por objetivo atender las recomendaciones derivadas del monitoreo, evaluación y contraloría social de los PSE para fortalecer su diseño y contribuir a mejorar el desempeño, resultados e impactos.",
    body2:
      "Las recomendaciones son aquellas sugerencias emitidas por las instancias evaluadoras, derivadas de los hallazgos, debilidades, oportunidades y amenazas identificadas en la evaluación, estudios o investigaciones realizadas los programas sociales.",
  },
};

export const Evaluacion = [
  {
    id: 1,
    title: "Diagnóstico",
    subtitle:
      "Tiene por objeto justificar la creación de nuevos programas o bien, la ampliación o modificación sustantiva de los programas sociales existentes, para precisar su impacto presupuestario y las fuentes de financiamiento.",
    icon: <ContentPasteSearchIcon sx={{ width: 48, height: 48 }} />,
    color: colors.purple,
  },
  {
    id: 2,
    title: "Diseño",
    subtitle:
      "Tiene como propósito analizar la consistencia y lógica interna de los programas sociales estatales.",
    icon: <AutoFixHighIcon sx={{ width: 48, height: 48 }} />,
    color: colors.green,
  },
  {
    id: 3,
    title: "Linea Base",
    subtitle:
      "Es un conjunto de especificaciones o productos de trabajo que han sido formalmente revisados y acordados, que sirven como base para un desarrollo posterior.",
    icon: <SegmentIcon sx={{ width: 48, height: 48 }} />,
    color: colors.amber,
  },
  {
    id: 4,
    title: "Específica de Desempeño",
    subtitle:
      "Es una valoración sintética del desempeño de los programas sociales estatales, durante un ejercicio fiscal. Esta evaluación muestra el avance en cumplimiento de los objetivos y metas establecidas en los programas, mediante el análisis de indicadores de resultados y gestión, así como, con base en una síntesis de la información entregada por las unidades que operan los programas sociales estatales.",
    icon: <InsightsIcon sx={{ width: 48, height: 48 }} />,
    color: colors.pink,
  },
  {
    id: 5,
    title: "Procesos",
    subtitle:
      "Su objetivo es analizar, mediante trabajo de campo, si un programa social estatal lleva a cabo sus procesos operativos después de manera eficaz y eficiente, y si contribuye al mejoramiento de la gestión.",
    icon: <EngineeringIcon sx={{ width: 48, height: 48 }} />,
    color: colors.blue,
  },
  {
    id: 6,
    title: "Consistencia y Resultados",
    subtitle:
      "Analiza sistemáticamente el diseño y desempeño global de los programas sociales estatales, para mejorar su gestión y medir el logro de los resultados con base en la matriz de marco lógico.",
    icon: <FactCheckIcon sx={{ width: 48, height: 48 }} />,
    color: colors.teal,
  },
  {
    id: 7,
    title: "Indicadores",
    subtitle:
      "Analiza, mediante trabajo de campo, la pertinencia y alcance de los indicadores de un programa social estatal para el logro de sus resultados.",
    icon: <DonutLargeIcon sx={{ width: 48, height: 48 }} />,
    color: colors.purple,
  },
  {
    id: 8,
    title: "Impacto",
    subtitle:
      "Es aquella que identifica con metodologías rigurosas, el cambio en los indicadores a nivel de resultados atribuible a la ejecución del programa social estatal.",
    icon: <PublishedWithChangesIcon sx={{ width: 48, height: 48 }} />,
    color: colors.green,
  },
  {
    id: 9,
    title: "Social",
    subtitle:
      "Son de aplicación opcional de acuerdo con las necesidades de las Dependencias y Entidades, siempre y cuando no se encuentren previstas en el Programa Anual de Evaluación, con el fin de mejorar su gestión y obtener evidencia adicional sobre su desempeño.",
    icon: <GroupIcon sx={{ width: 48, height: 48 }} />,
    color: colors.amber,
  },
  {
    id: 10,
    title: "Investigaciones",
    subtitle:
      "Procedimiento sistemático, organizado y objetivo que se lleva a cabo con el fin de alcanzar el desarrollo de nuevos y fidedignos conocimientos sobre un hecho, fenómeno o problemática, de tal forma que, una vez encontrados, ayuden al establecimiento de conclusiones, soluciones y toma de decisiones en atención a lo hallado.",
    icon: <SavedSearchIcon sx={{ width: 48, height: 48 }} />,
    color: colors.pink,
  },
  {
    id: 11,
    title: "Complementaria",
    subtitle:
      "Son de aplicación opcional de acuerdo con las necesidades de las Dependencias y Entidades, siempre y cuando no se encuentren previstas en el Programa Anual de Evaluación, con el fin de mejorar su gestión y obtener evidencia adicional sobre su desempeño.",
    icon: <SettingsSuggestIcon sx={{ width: 48, height: 48 }} />,
    color: colors.blue,
  },
  {
    id: 12,
    title: "Estratégica",
    subtitle:
      "Es la que se aplica a un programa social estatal o conjunto de programas en torno a las estrategias, políticas e instituciones del sector social. Esta evaluación diagnostica y analiza una problemática pública, y la respuesta gubernamental para atenderla, por lo que aporta información valiosa para el diseño de políticas públicas",
    icon: <PsychologyIcon sx={{ width: 48, height: 48 }} />,
    color: colors.teal,
  },
];
