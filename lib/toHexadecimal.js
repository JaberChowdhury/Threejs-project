function hslToHex(h, s, l) {
  // Convert the saturation and lightness percentages to fractions
  s /= 100;
  l /= 100;

  // Helper function to convert a single color channel from 0-255 to a two-digit hex code
  const toHex = (value) => {
    const hex = Math.round(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Calculate the chroma (difference between max and min RGB values)
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - chroma / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = chroma;
    g = x;
  } else if (60 <= h && h < 120) {
    r = x;
    g = chroma;
  } else if (120 <= h && h < 180) {
    g = chroma;
    b = x;
  } else if (180 <= h && h < 240) {
    g = x;
    b = chroma;
  } else if (240 <= h && h < 300) {
    r = x;
    b = chroma;
  } else if (300 <= h && h < 360) {
    r = chroma;
    b = x;
  }

  // Add m to the values to normalize to the 0-1 range
  r = (r + m) * 255;
  g = (g + m) * 255;
  b = (b + m) * 255;

  // Convert RGB to hex
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default hslToHex;
