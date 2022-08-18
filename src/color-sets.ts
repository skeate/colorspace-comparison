import { HuePicker } from "react-color";

type Nybble =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";

type Byte = `${Nybble}${Nybble}`

type RGB = [Byte, Byte, Byte]

export type RGBColor = {
  name: string;
  rgb: RGB;
};

type Hue = number
type Saturation = number
type Lightness = number

export type HSLColor = {
  name: string;
  hsl: [Hue, Saturation, Lightness]
}

type Value = number;

export type HSVColor = {
  name: string;
  hsv: [Hue, Saturation, Value]
}

export const rgbToHex = (rgb: RGB) => `#${rgb.join('')}`

export const rgbToNumbers = (rgb: RGB) => rgb.map(byte => parseInt(byte, 16))

export const basicColors: ReadonlyArray<RGBColor> = [
  { name: 'White', rgb: ['FF', 'FF', 'FF'] },
  { name: 'Silver', rgb: ['C0', 'C0', 'C0'] },
  { name: 'Gray', rgb: ['80', '80', '80'] },
  { name: 'Black', rgb: ['00', '00', '00'] },
  { name: 'Red', rgb: ['FF', '00', '00'] },
  { name: 'Maroon', rgb: ['80', '00', '00'] },
  { name: 'Yellow', rgb: ['FF', 'FF', '00'] },
  { name: 'Olive', rgb: ['80', '80', '00'] },
  { name: 'Lime', rgb: ['00', 'FF', '00'] },
  { name: 'Green', rgb: ['00', '80', '00'] },
  { name: 'Aqua', rgb: ['00', 'FF', 'FF'] },
  { name: 'Teal', rgb: ['00', '80', '80'] },
  { name: 'Blue', rgb: ['00', '00', 'FF'] },
  { name: 'Navy', rgb: ['00', '00', '80'] },
  { name: 'Fuchsia', rgb: ['FF', '00', 'FF'] },
  { name: 'Purple', rgb: ['80', '00', '80'] },
];

export const extendedColors: ReadonlyArray<RGBColor> = [
  { name: 'MediumVioletRed', rgb: ['C7', '15', '85'] },
  { name: 'DeepPink', rgb: ['FF', '14', '93'] },
  { name: 'PaleVioletRed', rgb: ['DB', '70', '93'] },
  { name: 'HotPink', rgb: ['FF', '69', 'B4'] },
  { name: 'LightPink', rgb: ['FF', 'B6', 'C1'] },
  { name: 'Pink', rgb: ['FF', 'C0', 'CB'] },
  { name: 'DarkRed', rgb: ['8B', '00', '00'] },
  { name: 'Red', rgb: ['FF', '00', '00'] },
  { name: 'Firebrick', rgb: ['B2', '22', '22'] },
  { name: 'Crimson', rgb: ['DC', '14', '3C'] },
  { name: 'IndianRed', rgb: ['CD', '5C', '5C'] },
  { name: 'LightCoral', rgb: ['F0', '80', '80'] },
  { name: 'Salmon', rgb: ['FA', '80', '72'] },
  { name: 'DarkSalmon', rgb: ['E9', '96', '7A'] },
  { name: 'LightSalmon', rgb: ['FF', 'A0', '7A'] },
  { name: 'OrangeRed', rgb: ['FF', '45', '00'] },
  { name: 'Tomato', rgb: ['FF', '63', '47'] },
  { name: 'DarkOrange', rgb: ['FF', '8C', '00'] },
  { name: 'Coral', rgb: ['FF', '7F', '50'] },
  { name: 'Orange', rgb: ['FF', 'A5', '00'] },
  { name: 'DarkKhaki', rgb: ['BD', 'B7', '6B'] },
  { name: 'Gold', rgb: ['FF', 'D7', '00'] },
  { name: 'Khaki', rgb: ['F0', 'E6', '8C'] },
  { name: 'PeachPuff', rgb: ['FF', 'DA', 'B9'] },
  { name: 'Yellow', rgb: ['FF', 'FF', '00'] },
  { name: 'PaleGoldenrod', rgb: ['EE', 'E8', 'AA'] },
  { name: 'Moccasin', rgb: ['FF', 'E4', 'B5'] },
  { name: 'PapayaWhip', rgb: ['FF', 'EF', 'D5'] },
  { name: 'LightGoldenrodYellow', rgb: ['FA', 'FA', 'D2'] },
  { name: 'LemonChiffon', rgb: ['FF', 'FA', 'CD'] },
  { name: 'LightYellow', rgb: ['FF', 'FF', 'E0'] },
  { name: 'Maroon', rgb: ['80', '00', '00'] },
  { name: 'Brown', rgb: ['A5', '2A', '2A'] },
  { name: 'SaddleBrown', rgb: ['8B', '45', '13'] },
  { name: 'Sienna', rgb: ['A0', '52', '2D'] },
  { name: 'Chocolate', rgb: ['D2', '69', '1E'] },
  { name: 'DarkGoldenrod', rgb: ['B8', '86', '0B'] },
  { name: 'Peru', rgb: ['CD', '85', '3F'] },
  { name: 'RosyBrown', rgb: ['BC', '8F', '8F'] },
  { name: 'Goldenrod', rgb: ['DA', 'A5', '20'] },
  { name: 'SandyBrown', rgb: ['F4', 'A4', '60'] },
  { name: 'Tan', rgb: ['D2', 'B4', '8C'] },
  { name: 'Burlywood', rgb: ['DE', 'B8', '87'] },
  { name: 'Wheat', rgb: ['F5', 'DE', 'B3'] },
  { name: 'NavajoWhite', rgb: ['FF', 'DE', 'AD'] },
  { name: 'Bisque', rgb: ['FF', 'E4', 'C4'] },
  { name: 'BlanchedAlmond', rgb: ['FF', 'EB', 'CD'] },
  { name: 'Cornsilk', rgb: ['FF', 'F8', 'DC'] },
  { name: 'DarkGreen', rgb: ['00', '64', '00'] },
  { name: 'Green', rgb: ['00', '80', '00'] },
  { name: 'DarkOliveGreen', rgb: ['55', '6B', '2F'] },
  { name: 'ForestGreen', rgb: ['22', '8B', '22'] },
  { name: 'SeaGreen', rgb: ['2E', '8B', '57'] },
  { name: 'Olive', rgb: ['80', '80', '00'] },
  { name: 'OliveDrab', rgb: ['6B', '8E', '23'] },
  { name: 'MediumSeaGreen', rgb: ['3C', 'B3', '71'] },
  { name: 'LimeGreen', rgb: ['32', 'CD', '32'] },
  { name: 'Lime', rgb: ['00', 'FF', '00'] },
  { name: 'SpringGreen', rgb: ['00', 'FF', '7F'] },
  { name: 'MediumSpringGreen', rgb: ['00', 'FA', '9A'] },
  { name: 'DarkSeaGreen', rgb: ['8F', 'BC', '8F'] },
  { name: 'MediumAquamarine', rgb: ['66', 'CD', 'AA'] },
  { name: 'YellowGreen', rgb: ['9A', 'CD', '32'] },
  { name: 'LawnGreen', rgb: ['7C', 'FC', '00'] },
  { name: 'Chartreuse', rgb: ['7F', 'FF', '00'] },
  { name: 'LightGreen', rgb: ['90', 'EE', '90'] },
  { name: 'GreenYellow', rgb: ['AD', 'FF', '2F'] },
  { name: 'PaleGreen', rgb: ['98', 'FB', '98'] },
  { name: 'Teal', rgb: ['00', '80', '80'] },
  { name: 'DarkCyan', rgb: ['00', '8B', '8B'] },
  { name: 'LightSeaGreen', rgb: ['20', 'B2', 'AA'] },
  { name: 'CadetBlue', rgb: ['5F', '9E', 'A0'] },
  { name: 'DarkTurquoise', rgb: ['00', 'CE', 'D1'] },
  { name: 'MediumTurquoise', rgb: ['48', 'D1', 'CC'] },
  { name: 'Turquoise', rgb: ['40', 'E0', 'D0'] },
  { name: 'Aqua', rgb: ['00', 'FF', 'FF'] },
  { name: 'Cyan', rgb: ['00', 'FF', 'FF'] },
  { name: 'Aquamarine', rgb: ['7F', 'FF', 'D4'] },
  { name: 'PaleTurquoise', rgb: ['AF', 'EE', 'EE'] },
  { name: 'LightCyan', rgb: ['E0', 'FF', 'FF'] },
  { name: 'MidnightBlue', rgb: ['19', '19', '70'] },
  { name: 'Navy', rgb: ['00', '00', '80'] },
  { name: 'DarkBlue', rgb: ['00', '00', '8B'] },
  { name: 'MediumBlue', rgb: ['00', '00', 'CD'] },
  { name: 'Blue', rgb: ['00', '00', 'FF'] },
  { name: 'RoyalBlue', rgb: ['41', '69', 'E1'] },
  { name: 'SteelBlue', rgb: ['46', '82', 'B4'] },
  { name: 'DodgerBlue', rgb: ['1E', '90', 'FF'] },
  { name: 'DeepSkyBlue', rgb: ['00', 'BF', 'FF'] },
  { name: 'CornflowerBlue', rgb: ['64', '95', 'ED'] },
  { name: 'SkyBlue', rgb: ['87', 'CE', 'EB'] },
  { name: 'LightSkyBlue', rgb: ['87', 'CE', 'FA'] },
  { name: 'LightSteelBlue', rgb: ['B0', 'C4', 'DE'] },
  { name: 'LightBlue', rgb: ['AD', 'D8', 'E6'] },
  { name: 'PowderBlue', rgb: ['B0', 'E0', 'E6'] },
  { name: 'Indigo', rgb: ['4B', '00', '82'] },
  { name: 'Purple', rgb: ['80', '00', '80'] },
  { name: 'DarkMagenta', rgb: ['8B', '00', '8B'] },
  { name: 'DarkViolet', rgb: ['94', '00', 'D3'] },
  { name: 'DarkSlateBlue', rgb: ['48', '3D', '8B'] },
  { name: 'BlueViolet', rgb: ['8A', '2B', 'E2'] },
  { name: 'DarkOrchid', rgb: ['99', '32', 'CC'] },
  { name: 'Fuchsia', rgb: ['FF', '00', 'FF'] },
  { name: 'Magenta', rgb: ['FF', '00', 'FF'] },
  { name: 'SlateBlue', rgb: ['6A', '5A', 'CD'] },
  { name: 'MediumSlateBlue', rgb: ['7B', '68', 'EE'] },
  { name: 'MediumOrchid', rgb: ['BA', '55', 'D3'] },
  { name: 'MediumPurple', rgb: ['93', '70', 'DB'] },
  { name: 'Orchid', rgb: ['DA', '70', 'D6'] },
  { name: 'Violet', rgb: ['EE', '82', 'EE'] },
  { name: 'Plum', rgb: ['DD', 'A0', 'DD'] },
  { name: 'Thistle', rgb: ['D8', 'BF', 'D8'] },
  { name: 'Lavender', rgb: ['E6', 'E6', 'FA'] },
  { name: 'MistyRose', rgb: ['FF', 'E4', 'E1'] },
  { name: 'AntiqueWhite', rgb: ['FA', 'EB', 'D7'] },
  { name: 'Linen', rgb: ['FA', 'F0', 'E6'] },
  { name: 'Beige', rgb: ['F5', 'F5', 'DC'] },
  { name: 'WhiteSmoke', rgb: ['F5', 'F5', 'F5'] },
  { name: 'LavenderBlush', rgb: ['FF', 'F0', 'F5'] },
  { name: 'OldLace', rgb: ['FD', 'F5', 'E6'] },
  { name: 'AliceBlue', rgb: ['F0', 'F8', 'FF'] },
  { name: 'Seashell', rgb: ['FF', 'F5', 'EE'] },
  { name: 'GhostWhite', rgb: ['F8', 'F8', 'FF'] },
  { name: 'Honeydew', rgb: ['F0', 'FF', 'F0'] },
  { name: 'FloralWhite', rgb: ['FF', 'FA', 'F0'] },
  { name: 'Azure', rgb: ['F0', 'FF', 'FF'] },
  { name: 'MintCream', rgb: ['F5', 'FF', 'FA'] },
  { name: 'Snow', rgb: ['FF', 'FA', 'FA'] },
  { name: 'Ivory', rgb: ['FF', 'FF', 'F0'] },
  { name: 'White', rgb: ['FF', 'FF', 'FF'] },
  { name: 'Black', rgb: ['00', '00', '00'] },
  { name: 'DarkSlateGray', rgb: ['2F', '4F', '4F'] },
  { name: 'DimGray', rgb: ['69', '69', '69'] },
  { name: 'SlateGray', rgb: ['70', '80', '90'] },
  { name: 'Gray', rgb: ['80', '80', '80'] },
  { name: 'LightSlateGray', rgb: ['77', '88', '99'] },
  { name: 'DarkGray', rgb: ['A9', 'A9', 'A9'] },
  { name: 'Silver', rgb: ['C0', 'C0', 'C0'] },
  { name: 'LightGray', rgb: ['D3', 'D3', 'D3'] },
  { name: 'Gainsboro', rgb: ['DC', 'DC', 'DC'] },
]