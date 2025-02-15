export interface Department {
    id: number;
    name: string;
    itens: { 
        id: number; 
        name: string; }[];
  }