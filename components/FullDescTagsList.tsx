import { FC } from 'react'

import { capitalize } from '../utils/string'

interface IProps {
  children: string
  values: string[]
}

export const FullDescTagsList: FC<IProps> = ({ children, values }) => (
  <div>
    {values.length > 0 && (
      <>
        <strong>{children}:</strong>
        {values.map((val) => (
          <button key={val}>{capitalize(val)}</button>
        ))}
      </>
    )}
  </div>
)
