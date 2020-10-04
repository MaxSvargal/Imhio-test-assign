import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React, { FC, useState } from 'react'
import useSWR from 'swr'

import { Catalog } from '../components/catalog'
import Layout from '../components/Layout'
import { IResponseItems } from '../interfaces/items'
import { fetchItems } from '../repos/apiRepo'

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await fetchItems()
  return { props: { initialData } }
}

export const MainPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  initialData
}) => {
  // TODO: No real implementation required
  const [activeTag] = useState<string | undefined>('BUSTY')

  const resp = useSWR<IResponseItems, void>('/items', fetchItems, { initialData })

  return (
    <Layout title={`Best ${activeTag} porn videos`}>
      {resp.data && <Catalog items={resp.data.item} activeTag={activeTag} />}
    </Layout>
  )
}

export default MainPage
