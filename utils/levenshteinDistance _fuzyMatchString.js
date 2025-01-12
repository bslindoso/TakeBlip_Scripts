function levenshteinDistance(input, test) {
  const len1 = input.length;
  const len2 = test.length;

  let matrix = Array(len1 + 1);
  for (let i = 0; i <= len1; i++) {
    matrix[i] = Array(len2 + 1);
  }

  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (input[i - 1] === test[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    }
  }

  return matrix[len1][len2];
}