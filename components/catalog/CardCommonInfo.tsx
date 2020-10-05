import React, { FC } from 'react'

import { IItem } from '../../interfaces/items'
import { formatDateTime, formatTime } from '../../utils/date'
import { CardCommonInfoContainer } from './CardCommonInfo.styles'

interface IProps {
  active: boolean
  value: IItem
}

export const CardCommonInfo: FC<IProps> = ({ active, value }) => (
  <CardCommonInfoContainer inline={!active}>
    <div>
      <strong>Published: </strong> {formatDateTime(value.added)}
    </div>
    <div>
      <strong>Duration: </strong> {formatTime(value.duration)}
    </div>
    {active && (
      <div>
        <strong>Source: </strong> {value.source}
      </div>
    )}
  </CardCommonInfoContainer>
)
