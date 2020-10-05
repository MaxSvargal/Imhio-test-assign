import React, { FC } from 'react'

import { IItem } from '../../interfaces/items'
import { charlLimit } from '../../utils/string'
import { OnlyDesktop } from '../atoms/OnlyDesktop'
import { OnlyMobile } from '../atoms/OnlyMobile'
import {
  CardPicture,
  CloseBtn,
  CloseBtnContainer,
  DefaultBox,
  DescText,
  FullInfoBox,
  MoreBtn,
  OutlineBox,
  TagsListSingleLine
} from './CardAdditionalInfo.styles'
import { CardCommonInfo } from './CardCommonInfo'
import { FullDescTagsList } from './FullDescTagsList'
import { GallerySlider } from './GallerySlider'

interface IProps {
  active: boolean
  value: IItem
  onChangeActive: () => void
}

export const CardAdditionalInfo: FC<IProps> = ({ active, value, onChangeActive }) =>
  !active ? (
    <DefaultBox>
      <DescText>{value.description}</DescText>

      <OnlyDesktop>
        <TagsListSingleLine>
          <FullDescTagsList values={value.tag} />
        </TagsListSingleLine>
      </OnlyDesktop>

      <MoreBtn onClick={onChangeActive}>More info</MoreBtn>
    </DefaultBox>
  ) : (
    <OutlineBox>
      <OnlyMobile>
        <CloseBtnContainer>
          <button>
            <CloseBtn onClick={onChangeActive} title="Close" />
          </button>
        </CloseBtnContainer>

        <GallerySlider loopMsec={1000} index={value.id}>
          {value.picture.map((pic, i) => (
            <CardPicture src={pic.path} key={pic.id} alt={`${i + 1} of ${value.picture.length}`} />
          ))}
        </GallerySlider>

        <CardCommonInfo active={active} value={value} />
      </OnlyMobile>

      <FullInfoBox>
        <div>
          <strong>Description: </strong>
          <span>{charlLimit(800, value.description)}</span>
        </div>
        <FullDescTagsList values={value.tag}>Tags</FullDescTagsList>
        <FullDescTagsList values={value.pornstar} variant="blueColor">
          Pornstars
        </FullDescTagsList>
        <FullDescTagsList values={value.webcam} variant="greenColor">
          Webcam Models
        </FullDescTagsList>
      </FullInfoBox>
    </OutlineBox>
  )
