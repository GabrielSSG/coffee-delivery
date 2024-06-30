/**
 * Formata um valor em reais
 * @param value Valor numérico a ser formatado
 * @returns Valor formatado
 */
export const currencyFormatter = (value: number = 0) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
