function getCamelCase(str) {
  return str
    .split(" ")
    .map((a) => {
      let b = a.split("");
      b.splice(0, 1, a.charAt(0).toUpperCase());
      return b.join("");
    })
    .join("");
}

console.log(getCamelCase("my name is Jenisha"));
