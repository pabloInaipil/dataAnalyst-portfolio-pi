export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Analista de Datos Financiero",
    company: "SERNAMEG.",
    dates: "28/2024 - 29/2025",
    description: [
      "Desarrollo de dashboard en Power BI para el seguimiento de las Cuentas por cobrar ejecutores externos.",
      "Desarrollo de informe de avance de ejecución semanal y reportería mediante Looker Studio sobre el estado de ejecucción presupuestaria año 2024",
      "Automatización de tareas mensuales de consolidación de actualización de reporte CxC años anteriores",
      "Centralizacion de documentación mediante generador de carpetas masivas en Google Sheets utilizando un script de programación.(AppScript)",
    ]
  },
  {
    title: "Analista de Datos RR.HH.",
    company: "Asesorias AGR SpA",
    dates: "03/2022 - 04/2024",
    description: [
      "Creación de dashboards interactivos en Power BI, analizando métricas clave como índice de permanencia y FTE.",
      "Optimización de la gestión documental mediante plantillas HTML y procesos de firma digital.",
      "Automatización de cálculos de remuneraciones en Google Sheets, mejorando la eficiencia operativa.",
      "Implementación de automatizaciones en Talana, reduciendo costos en procesos de finiquitos hasta en un 30%.",
    ]
  }
];