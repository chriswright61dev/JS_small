function bitwiseAND(n1, n2) {
  return (n1 & n2).toString(2);
}

function bitwiseOR(n1, n2) {
  return (n1 | n2).toString(2);
}

function bitwiseXOR(n1, n2) {
  return (n1 ^ n2).toString(2);
}

bitwiseAND(6, 23); //➞ 00000110

bitwiseOR(6, 23); //➞ 00010111

bitwiseXOR(6, 23); // ➞ 00010001
