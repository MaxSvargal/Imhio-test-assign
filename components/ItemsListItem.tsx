import React, { FC } from 'react'

import { IItem } from '../interfaces/items'
import { formatDateTime } from '../utils/date'
import { capitalize, charlLimit } from '../utils/string'
import { Hidden } from './atoms/Hidden'
import { OnlyDesktop } from './atoms/OnlyDesktop'
import { OnlyMobile } from './atoms/OnlyMobile'
import { FullDescTagsList } from './FullDescTagsList'
import { GallerySlider } from './GallerySlider'
import {
  CloseBtn,
  Flex,
  ItemListContainer,
  ItemListDescText,
  ItemListInfoRow,
  ItemListOutline,
  ItemListPic,
  MoreBtn,
  TagButton,
  TagsList
} from './ItemsListItem.styles'

interface IProps {
  value: IItem
  active: boolean
  onChangeActive: () => void
}

export const ItemsListItem: FC<IProps> = ({ value, active, onChangeActive }) => {
  return (
    <ItemListContainer active={active}>
      <Flex>
        <GallerySlider loopMsec={1000}>
          {value.picture.map((pic, i) => (
            <ItemListPic src={pic.path} key={pic.id} alt={`${i + 1} of ${value.picture.length}`} />
          ))}
        </GallerySlider>
      </Flex>

      <ItemListInfoRow inline={!active}>
        <div>Added: {formatDateTime(value.added)}</div>
        <div>Duration: {value.duration}</div>
        {active && <div>Source: {value.source}</div>}
      </ItemListInfoRow>

      {active ? (
        <ItemListOutline>
          <OnlyMobile>
            <Flex
              css={`
                justify-content: flex-end;
              `}>
              <CloseBtn onClick={onChangeActive}>Close</CloseBtn>
            </Flex>

            <Flex>
              <GallerySlider loopMsec={1000}>
                {value.picture.map((pic, i) => (
                  <ItemListPic
                    src={pic.path}
                    key={pic.id}
                    alt={`${i + 1} of ${value.picture.length}`}
                  />
                ))}
              </GallerySlider>
            </Flex>
          </OnlyMobile>

          <ItemListInfoRow inline={!active}>
            <div>Added: {formatDateTime(value.added)}</div>
            <div>Duration: {value.duration}</div>
            {active && <div>Source: {value.source}</div>}
          </ItemListInfoRow>

          <div>
            <strong>Description:</strong>
            <span>{charlLimit(800, value.description)}</span>
          </div>
          <FullDescTagsList values={value.tag}>Tags</FullDescTagsList>
          <FullDescTagsList values={value.pornstar}>Pornstars</FullDescTagsList>
          <FullDescTagsList values={value.webcam}>Webcam Models</FullDescTagsList>
        </ItemListOutline>
      ) : (
        <>
          <ItemListDescText>{value.description}</ItemListDescText>

          <OnlyDesktop>
            <TagsList>
              {value.tag.map((tag) => (
                <TagButton key={tag}>{capitalize(tag)}</TagButton>
              ))}
            </TagsList>
          </OnlyDesktop>

          <div>
            <MoreBtn onClick={onChangeActive}>More info</MoreBtn>
          </div>
        </>
      )}
    </ItemListContainer>
  )
}
