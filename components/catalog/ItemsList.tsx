import React, { FC, useCallback, useState } from 'react'

import { SliderCurrentContextProvider } from '../../contexts/sliderCurrentContext'
import { IItem } from '../../interfaces/items'
import { ItemsListBox } from './ItemsList.styles'
import { ItemsListItem } from './ItemsListItem'

interface IProps {
  items: IItem[]
}

export const ItemsList: FC<IProps> = ({ items }) => {
  const [activeId, setActiveId] = useState(0)

  const onChangeActive = useCallback(
    (id: number) => () => setActiveId((activeId) => (activeId === id ? 0 : id)),
    []
  )

  return (
    <SliderCurrentContextProvider>
      <ItemsListBox>
        {items.map((item) => (
          <ItemsListItem
            key={item.id}
            value={item}
            active={activeId === item.id}
            onChangeActive={onChangeActive(item.id)}
          />
        ))}
      </ItemsListBox>
    </SliderCurrentContextProvider>
  )
}
