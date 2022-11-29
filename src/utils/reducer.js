const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

export const reduce = numeros.reduce((acc, numero) => {
  return numero + acc;
}, 10);
