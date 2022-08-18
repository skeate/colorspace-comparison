import { type RGBColor, rgbToNumber, type HSLColor } from './color-sets'

const max = (xs: ReadonlyArray<number>): number => Math.max(...xs)
const min = (xs: ReadonlyArray<number>): number => Math.min(...xs)

export const rgbToHSL = (color: RGBColor): HSLColor => {
  const decimalBytes = rgbToNumber(color.rgb)
  const xmax = max(decimalBytes)
  const xmin = min(decimalBytes)
  const chroma = xmax - xmin
  const lightness = (xmax + xmin) / 2
  const hue = c === 0 ? 0 :
}