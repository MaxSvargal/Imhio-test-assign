import { FC } from 'react'

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
          <button key={val}>{val}</button>
        ))}
      </>
    )}
  </div>
)
