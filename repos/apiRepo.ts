import { IResponseItems } from '../interfaces/items'

const getPath = (path: string) => `${process.env.API_URL}${path}`

export const fetchItems = (): Promise<IResponseItems> =>
  fetch(getPath('/items')).then((resp) => resp.json())
