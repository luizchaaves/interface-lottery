export interface ApiResponse {
  loteria: string;
  concurso: number;
  data: string;
  local: string;
  dezenasOrdemSorteio: string[];
  dezenas: string[];
  trevos: any[];
  timeCoracao: string;
  mesSorte: string;
  premiacoes: Premiacoes[];
  estadosPremiados: any[];
  observacao: string;
  acumulou: boolean;
  proximoConcurso: number;
  dataProximoConcurso: string;
  localGanhadores: LocalGanhadores[];
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
}

export interface Premiacoes {
  descricao: string;
  faixa: number;
  ganhadores: number;
  valorPremio: number;
}

export interface LocalGanhadores {
  ganhadores: number;
  municipio: string;
  nomeFatansiaUL: string;
  serie: string;
  posicao: number;
  uf: string;
}
