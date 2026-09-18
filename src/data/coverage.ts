export interface CoverageZone {
  name: string;
  state: string;
  type: string;
}

export const coverageZones: CoverageZone[] = [
  { name: "Jajó", state: "Trujillo", type: "Cobertura Activa" },
  { name: "La Mesa de Esnujaque", state: "Trujillo", type: "Fibra & Inalámbrico" },
  { name: "Cabimbú", state: "Trujillo", type: "Cobertura Rural y Urbana" },
  { name: "Cuicas", state: "Trujillo", type: "Enlace de Alta Potencia" },
  { name: "La Cuchilla", state: "Trujillo", type: "Cobertura Activa" },
  { name: "Lomas de Bonilla", state: "Trujillo", type: "Red Metropolitana" },
  { name: "Burbusay", state: "Trujillo", type: "Cobertura Activa" },
  { name: "Mesa de los Morenos", state: "Trujillo", type: "Cobertura Activa" },
  { name: "Valera (Zona Central)", state: "Trujillo", type: "Nodo Central FTTH" }
];
