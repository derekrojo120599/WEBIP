export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  speed?: string;
  link: string;
  badge?: string;
  equipmentDetail: string; // Patrón Xfinity: detalle de hardware/servicio tangible
  iconType: string;
}

export const servicesData: ServiceCard[] = [
  {
    id: "banda-ancha",
    title: "Banda Ancha Residencial",
    description: "Conexión continua por fibra e inalámbrica para la educación de tus hijos y entretenimiento familiar.",
    speed: "Desde 10 MB",
    link: "#planes",
    badge: "FTTH + Inalámbrico",
    equipmentDetail: "Router Wi-Fi de alta cobertura y terminal óptica incluida",
    iconType: "🌐"
  },
  {
    id: "wifi",
    title: "WIFI de Alta Potencia",
    description: "Equipos de doble banda (2.4 GHz y 5 GHz) para conectar múltiples dispositivos en todo tu hogar.",
    speed: "Doble Banda",
    link: "#planes",
    badge: "Equipos Incluidos",
    equipmentDetail: "Mínima latencia para streaming simultáneo en HD/4K",
    iconType: "📶"
  },
  {
    id: "enlaces-dedicados",
    title: "Enlaces Dedicados",
    description: "Conexión exclusiva 1:1 para empresas y productores, garantizando transferencia continua de datos y facturación.",
    speed: "Canal 1:1",
    link: "#planes",
    badge: "Empresas & Fincas",
    equipmentDetail: "IP pública fija y monitoreo de enlace empresarial",
    iconType: "⚡"
  },
  {
    id: "comunicaciones",
    title: "Comunicaciones & Soporte",
    description: "Manténgase en contacto con proveedores y clientes a través de enlaces directos y atención presencial.",
    speed: "Alta Disponibilidad",
    link: "#contacto",
    badge: "Atención Local",
    equipmentDetail: "Cuadrillas técnicas en Valera y soporte telefónico directo",
    iconType: "🛠️"
  }
];
