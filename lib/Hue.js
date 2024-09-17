function generateHueColor(hue) {
  // Generate a random number between 0 and 360 for the hue
  // const hue = Math.floor(Math.random() * 361);

  // Return the HSL color with full saturation and lightness
  return `hsl(${hue}, 100%, 50%)`;
  // return toHexadecimal(hue, "100%", "50%")
}

export default generateHueColor;
