export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard seguimiento Rendiciones SISREC 2024 y Cuentas por Cobrar Sernameg 2025",
    summary: "Dashboard Power BI para el seguimiento de ejecución presupeustaria de programas Sernameg 2024 y para Cuentas por cobrar años anteriores.",
    images: [
      "/images/sisrec-2024.jpg",
      "/images/piechart-sisrec.jpg",
      "/images/cxc.jpg",
      "/images/treemap-cxc.jpg"
    ],
    tags: ["Power BI", "Power Query", "Data Visualization", "Excel", "Business Intelligence"],
    details: {
      challenge: "Uno de los principales desafios era lograr en un tiempo acotado la rebaja de la deuda por cobrar de años anteriores, priorizando el año 2023. Aquello implicaba realizar una reorganización de la documentación disponible y creando un maestro de datos para indentificar existencias de rendiciones y documentación faltante.",
      solution: "Luego de organizar la información en carpetas por año, programa y ejecutor, se registran actualizaciones en un maestro de datos, se ajustaron los documentos formales en Excel para facilitar el registro de rendiciones contables. Estos ajustes consistieron en resumir la rendición financiera en una hoja de Google Sheets con totales, saldos y porcentajes, conectada a una plantilla en Word en la nube. Esto permitió generar automáticamente oficios para su rápida carga en el sistema Cero Papel y envío al ejecutor correspondiente, paralelamente a esto se realizaba la contabilización correspondiente para rebajar la deuda. Por otro lado se crearon informes automatizados en Looker Studio cargando maestros de datos bajados directamente desde el sistema de rendiciones SISREC para ir monitoreando los viernes de cada semana el estado de avance de las rendiciones entre otros indicadores. Se implemento tambien este monitoreo en Power BI junto con el estado de las rendiciones de años anteriores, dasboard que se puede apreciar en las imagenes.",
      impact: [
        "En aproximadamente 2 meses se logro una rebaja de la deuda en un 90% solo en el 2023 y en un 20% el 2022. Logrando así un avance de un 22% de disminucion total de la deuda en lo que respecta a las metas institucionales",
        "Insights valiosos relacionados con el grado de avance de las rendiciones, la adopción de Google Sheets como plataforma de monitoreo de flujos de rendiciones optimizadas y desatomizadas, conectadas a la vez con reportes financieros de cuentas por cobrar de SIGFE y de rendiciones SISREC la cual permitió la automatización de analisis de cada funcionario permitiendo un ahorro de HH en la gestión mensual de esta actividad la cual debía ser enviada al nivel central del servicio. Uso de la Inteligencia Artificial para la realización de presentaciones más dinamicas y actas automatizadas de reuniones del servicio, "
      ]
    }
  },
  {
    id: 2,
     title: "Dashboard de RRHH Empresa de Seguridad Privada",
    summary: "Creación de dashboard para la unidad de Recursos Humanos de la empresa de Seguridad Privada Asesorias AGR SpA",
    images: [
      "/images/agr-rrhh1.jpg",
      "/images/agr-rrhh2.jpg",
      "/images/agr-rrhh3.jpg"
    ],
    tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
    details: {
      challenge: "El desafío fue transformar una planilla de Recursos Humanos con registros históricos de altas, bajas y traslados en un sistema inteligente capaz de responder en tiempo real sobre la permanencia y rotación por centro de costo. Para ello, se realizó una limpieza y normalización de datos desde distintas fuentes, se construyó un modelo en estrella que permitiera análisis temporales claros y se desarrollaron medidas DAX complejas para contabilizar activos e inactivos, calcular el promedio de permanencia y el porcentaje de rotación con precisión. Además, se diseñó una experiencia de usuario intuitiva con navegación por botones y visuales jerárquicos que sintetizan los principales KPIs en una primera vista y permiten profundizar por área en una segunda página.",
      solution: "Se desarrolló un dashboard interactivo compuesto por dos páginas. La primera entrega una visión general de la dotación con indicadores clave como una permanencia promedio de 3,55 años, 498 empleados activos, 119 inactivos y una tasa de rotación del 19,29 %, además de gráficos circulares por sexo y estado civil, barras por centro de costo y grupos etarios, y una gráfica de nacionalidad. La segunda página permite profundizar en el desempeño por centro de costo mediante barras comparativas de permanencia media, rotación porcentual y cantidad de trabajadores por cargo, manteniendo siempre visibles los principales KPIs. La navegación se optimiza con un slicer maestro que filtra por centro de costo y bookmarks para desplazarse entre páginas.",
      impact: [
        "Alerta de rotación – Rotación global de 19,3 %; el centro USS Hospital se dispara a 66 %, triplicando la media.",
        "Focos de retención – Municipalidad de Renca exhibe la permanencia más alta (6,6 años), un benchmark interno a replicar.",
        "Estructura de la fuerza laboral – 585 (96 %) de los trabajadores son Guardias de Seguridad, alto grado de especialización que incrementa el costo de rotación.",
        "Demografía – 45 % del personal se concentra entre 25-34 años; sólo 27 % son mujeres y el 99,6 % es chileno. Hay márgenes claros para políticas de diversidad y sucesión.",
        "Con estos hallazgos, un gerente puede:",
        "Priorizar intervenciones en centros con rotación crítica, calcular el costo y medir el efecto de iniciativas de engagement.", 
        "Modelar escenarios de contratación/formación basados en la edad y permanencia proyectada.",
        "Justificar programas de diversidad y retención con datos concretos.", 
      ]
    }
    
  },
{ id: 3,
  title: "Modelo Análisis de Ventas TECNOMAX",
    summary: "Modelo básico de analisis de ventas ficticio. El proyecto TECNOMAX consistió en el desarrollo de un sistema de inteligencia de negocio centrado en el análisis y visualización de las ventas de la empresa TECNOMAX, un distribuidor mayorista de componentes electrónicos y soluciones tecnológicas ",
    images: [
      "/images/tecnomax.jpg",
      "/images/tecnomax2.jpg",
      "/images/tecnomax3.jpg"
    ],
    tags: ["Power BI", "Power Query", "Data Visualization", "Excel", "Business Intelligence"],
    details: {
      challenge: "Modelado de datos: Definir correctamente las relaciones entre tablas (Ventas, Clientes, Productos, Tiempo) para habilitar filtros cruzados y evitar ambigüedades en los cálculos. Medidas DAX avanzadas: Crear indicadores dinámicos de crecimiento YoY, promedio móvil de ventas y participación de mercado, requirió dominar funciones como CALCULATE(), TIMEINTELLIGENCE() y manejo de contextos de filtro. Diseñar una experiencia fluida para el usuario: paneles con filtros sincronizados, drill‑through en producto y cliente, tooltips dinámicos y bookmarks que guían el análisis sin abrumar al tomador de decisiones.",
      solution: "Dashboard centralizado de ventas que consolida métricas clave (ingresos, unidades vendidas, margen bruto) y permite comparar períodos (mensual, trimestral, anual) con un solo clic. Visualizaciones interactivas: mapas de calor de regiones, gráficos de líneas con tendencias, barras apiladas por canal de venta y tablas de ranking de productos y vendedores.  ",
      impact: [
        "Visibilidad total del negocio: acceso inmediato a las métricas más críticas, permitiendo reaccionar rápido ante caídas de ventas o aprovechar picos de demanda.",
        "Toma de decisiones basada en datos: identifica productos estrella y mercados emergentes, optimiza inventarios y ajusta campañas de marketing según regiones y segmentos rentables.",
        "Eficiencia operativa: reduce el tiempo dedicado a consolidar informes, liberando recursos para análisis estratégico y crecimiento.",
        "Escalabilidad y crecimiento: el modelo puede integrarse con nuevas líneas de negocio o fuentes de datos (nuevos canales online, partners) sin replantear toda la solución.",
        "Mejora de la rentabilidad: con un seguimiento continuo de márgenes y costos ocultos, el emprendedor puede ajustar precios y condiciones de venta para maximizar ganancias y flujo de caja."
      ]
    }   
  }
];
