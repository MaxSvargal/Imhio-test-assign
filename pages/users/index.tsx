import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import useSWR from 'swr'

import Layout from '../../components/Layout'
import List from '../../components/List'
import { IResponseItems } from '../../interfaces/items'
import { fetchItems } from '../../repos/apiRepo'

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await fetchItems()
  return { props: { initialData } }
}

export const MainPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  initialData
}) => {
  const { data } = useSWR<IResponseItems, void>('/items', fetchItems, { initialData })

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      {data?.item && <List items={data.item} />}
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default MainPage
