const generate_hexadecimal_color = () => {
  const hexadecimal_codes = "0123456789abcdef".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color +=
      hexadecimal_codes[Math.floor(Math.random() * hexadecimal_codes.length)];
  }
  return color;
};

export default generate_hexadecimal_color;
