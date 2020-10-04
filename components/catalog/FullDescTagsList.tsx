import React, { FC } from 'react'

import { capitalize } from '../../utils/string'
import { TagButton } from './FullDescTagsList.styles'

interface IProps {
  children?: string
  variant?: 'greenColor' | 'blueColor'
  values: string[]
}

export const FullDescTagsList: FC<IProps> = ({ children, values, variant }) => (
  <div>
    {values.length > 0 && (
      <>
        {children && <strong>{children}: </strong>}
        {values.map((val) => (
          <TagButton key={val} variant={variant || 'default'}>
            {capitalize(val)}
          </TagButton>
        ))}
      </>
    )}
  </div>
)
