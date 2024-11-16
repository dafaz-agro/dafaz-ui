import { colors } from '@dafaz-ui/tokens'
import { getContrast } from 'polished'

/** Primary UI component for user interaction */
export function Colors() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Poppins',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>{key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
