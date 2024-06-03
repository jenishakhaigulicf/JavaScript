function getTriangleType(a, b, c) {
  if ((a == b) == c) return "equilateral";
  else if (a == b || a == c || b == c) return "isosceles";
  else return "scalene";
}

console.log(getTriangleType(0, 10, 20));
