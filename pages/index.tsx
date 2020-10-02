import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import React, { FC } from 'react'
import useSWR from 'swr'

import { ItemsList } from '../components/ItemsList'
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
  const resp = useSWR<IResponseItems, void>('/items', fetchItems, { initialData })

  return (
    <Layout title="List">
      <h1>List</h1>
      {resp.data && <ItemsList items={resp.data.item} />}
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default MainPage
