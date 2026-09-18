export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  speed?: string;
  link: string;
  badge?: string;
}

export const servicesData: ServiceCard[] = [
  {
    id: "banda-ancha",
    title: "Banda Ancha",
    description: "Ofrecemos el mejor servicio de internet para ayudar a nuestros productores y hogares.",
    speed: "Desde 10 MB",
    link: "#planes",
    badge: "Inalámbrico & FTTH"
  },
  {
    id: "wifi",
    title: "WIFI",
    description: "Los mejores equipos para brindarte la mejor experiencia de navegación inalámbrica.",
    speed: "Doble Banda",
    link: "#planes",
    badge: "Equipos Incluidos"
  },
  {
    id: "enlaces-dedicados",
    title: "Enlaces Dedicados",
    description: "Conexión exclusiva para su negocio, que garantiza la transferencia continua de internet y datos.",
    speed: "Canal 1:1",
    link: "#planes",
    badge: "Corporativo"
  },
  {
    id: "comunicaciones",
    title: "Comunicaciones",
    description: "Manténgase en contacto con proveedores y clientes a través de nuevos canales de telecomunicaciones.",
    speed: "Alta Disponibilidad",
    link: "#contacto",
    badge: "Empresas"
  }
];
