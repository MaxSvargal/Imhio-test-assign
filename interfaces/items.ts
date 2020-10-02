export interface IResponseItems {
  info: IResponseItemsInfo
  item: IItem[]
}

export interface IResponseItemsInfo {
  total: number
  search_term: string
}

export interface IItem {
  id: number
  source: string
  description: string
  added: string //Date
  duration: string
  picture: IItemPicture[]
  tag: string[]
  pornstar: string[]
  webcam: string[]
}

export interface IItemPicture {
  id: number
  path: string
}
