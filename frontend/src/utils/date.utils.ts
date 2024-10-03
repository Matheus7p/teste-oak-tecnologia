import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


export const dateRelativeNow = (date: string | Date | number | undefined): string =>{
  if (!date) return "Data não disponível";

  const parsedDate = typeof date === "string" || typeof date === "number" ? new Date(date) : date;

  return formatDistanceToNow(parsedDate, {
    locale: ptBR,
    addSuffix: true,
  });
};

