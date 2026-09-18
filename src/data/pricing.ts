export interface PricingPlan {
  id: string;
  name: string;
  planTier: string; // Patrón Google Fiber: Core, Turbo Plus, Max Enterprise
  category: string;
  speed: string;
  speedUnit: string;
  priceNote: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "hogar-10",
    name: "Plan Hogar",
    planTier: "CORE",
    category: "Residencial Inalámbrico",
    speed: "10",
    speedUnit: "MB",
    priceNote: "Tu vida conectada inalámbricamente",
    popular: false,
    features: [
      "Conexión inalámbrica estable",
      "Navegación ilimitada sin límites de consumo",
      "Soporte técnico local en Valera",
      "Acceso directo a Portal de Pagos 24/7"
    ],
    ctaText: "Solicitar Plan Hogar",
    ctaLink: "https://wa.me/584260337589?text=Hola,%20me%20interesa%20contratar%20el%20Plan%20Hogar%2010MB"
  },
  {
    id: "fibra-turbo",
    name: "Plan Fibra",
    planTier: "PLUS",
    category: "Fibra Óptica FTTH",
    speed: "20 - 80",
    speedUnit: "MB",
    priceNote: "Disfruta desde 20 hasta 80 MB simétricos",
    popular: true,
    features: [
      "Conexión directa por fibra óptica pura",
      "Misma velocidad de subida y bajada (Simétrica)",
      "Streaming 4K y clases virtuales sin cortes",
      "Soporte técnico preferencial"
    ],
    ctaText: "Contratar Plan Fibra",
    ctaLink: "https://wa.me/584260337589?text=Hola,%20me%20interesa%20contratar%20el%20Plan%20Fibra"
  },
  {
    id: "dedicados",
    name: "Soluciones Dedicadas",
    planTier: "MAX",
    category: "Empresas & Productores",
    speed: "80 - 500",
    speedUnit: "MB",
    priceNote: "Conexión 1:1 exclusiva para tu negocio",
    popular: false,
    features: [
      "Canal 1:1 exclusivo sin compartición",
      "Garantía de transferencia continua de datos",
      "Monitoreo técnico proactivo",
      "Facturación y atención personalizada"
    ],
    ctaText: "Solicitar Presupuesto",
    ctaLink: "https://wa.me/584260337589?text=Hola,%20solicito%20presupuesto%20para%20Soluciones%20Dedicadas%20Empresariales"
  }
];
