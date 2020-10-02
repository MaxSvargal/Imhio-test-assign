import { NextApiRequest, NextApiResponse } from 'next'

import itemsFixture from '../../../fixtures/items.json'
import { IResponseItems } from '../../../interfaces/items'

export default (_: NextApiRequest, res: NextApiResponse<IResponseItems>): void => {
  res.status(200).json(itemsFixture)
}
