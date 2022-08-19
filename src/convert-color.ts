import {
  type RGBColor,
  rgbToNumbers,
  type HSLColor,
  HSVColor,
  LabColor,
} from './color-sets'

export const rgbToHSL = (color: RGBColor): HSLColor => {
  const { red, green, blue } = rgbToNumbers(color.rgb)
  const xmax = Math.max(red, green, blue)
  const xmin = Math.min(red, green, blue)
  const chroma = xmax - xmin
  const lightness = (xmax + xmin) / 2
  const hue =
    chroma === 0
      ? 0
      : 60 *
        (xmax === red
          ? (green - blue) / chroma
          : xmax === green
          ? 2 + (blue - red) / chroma
          : 4 + (red - green) / chroma)

  const saturation =
    lightness === 0 || lightness === 1
      ? 0
      : chroma / (1 - Math.abs(2 * xmax - chroma - 1))

  return { name: color.name, hsl: [hue, saturation, lightness] }
}

export const rgbToHSV = (color: RGBColor): HSVColor => {
  const {
    hsl: [hue, saturation_l, lightness],
  } = rgbToHSL(color)
  const value = lightness + saturation_l * Math.min(lightness, 1 - lightness)
  const saturation = value === 0 ? 0 : 2 * (1 - lightness / value)

  return { name: color.name, hsv: [hue, saturation, value] }
}

// export const rgbToLab = (color: RGBColor): LabColor => {}
