function maxWordLength(params) {
  const p = params.split(' ');
  p.sort((a, b) => b.length - a.length);
  return p[0];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp