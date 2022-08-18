import React from 'react'
import './styles.css'
import { SketchPicker } from 'react-color'
import { RGBColor, basicColors, extendedColors } from './color-sets'

type ColorSet = 'basic' | 'extended'

const colorSetDict: Record<ColorSet, ReadonlyArray<RGBColor>> = {
  basic: basicColors,
  extended: extendedColors,
}

const ColorCompare = (colors: { selected: string; nearest: string }) => (
  <div
    className="color-compare"
    data-selected={colors.selected}
    data-nearest={colors.nearest}
  >
    <div className="selected" style={{ color: colors.selected }} />
    <div className="nearest" style={{ color: colors.nearest }} />
  </div>
)

export default function App() {
  const [color, setColor] = React.useState('#000000')

  const [colorSet, setColorSet] = React.useState<ColorSet>('basic')

  return (
    <div>
      <h1>Colorspace Comparison Tool</h1>

      <div className="wrapper">
        <div>
          <h2>Pick a Color</h2>
          <SketchPicker
            disableAlpha
            color={color}
            onChange={({ hex }) => setColor(hex)}
          />
        </div>

        <div>
          <h2>Pick a Color Set</h2>
          <select
            value={colorSet}
            onChange={(e) => setColorSet(e.currentTarget.value as ColorSet)}
          >
            <option value="basic">Basic 16 Color</option>
            <option value="extended">Extended Color</option>
          </select>
        </div>

        <div>
          <h2>Nearest Colors in Various Color Spaces</h2>
          <table>
            <thead>
              <tr>
                <th>Color Space</th>
                <th>sRGB</th>
                <th>HSL</th>
                <th>L*a*b*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  Selected and
                  <br />
                  Nearest Color
                </th>
                <td>
                  <ColorCompare selected={color} nearest={'#ff0'} />
                </td>
                <td>
                  <ColorCompare selected={color} nearest={'#ff0'} />
                </td>
                <td>
                  <ColorCompare selected={color} nearest={'#ff0'} />
                </td>
              </tr>
              <tr>
                <th>Name</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Hex Code</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
