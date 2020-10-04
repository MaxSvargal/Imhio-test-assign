import React, { FC } from 'react'

import { IItem } from '../../interfaces/items'
import { OnlyDesktop } from '../atoms/OnlyDesktop'
import { ActiveTagTitle, SubHeaderBox } from './Catalog.styles'
import { ItemsList } from './ItemsList'

interface IProps {
  items: IItem[]
  activeTag: string | undefined
}

export const Catalog: FC<IProps> = ({ items, activeTag }) => (
  <>
    <SubHeaderBox>
      <ActiveTagTitle>Best {activeTag} porn videos</ActiveTagTitle>
      <OnlyDesktop>
        <div>Total videos: {items.length}</div>
      </OnlyDesktop>
    </SubHeaderBox>
    <ItemsList items={items} />
  </>
)
