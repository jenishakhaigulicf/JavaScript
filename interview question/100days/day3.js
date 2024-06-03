function getLetterCount(str, letter) {
  return str.split("").reduce((acc, char) => {
    if (char == letter) acc++;
    return acc;
  }, 0);
}

console.log(getLetterCount("Jeniiiiiiiisha", "i"));
