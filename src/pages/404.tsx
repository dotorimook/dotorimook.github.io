import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

export const NotFoundPage = (props: Props) => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <div>
        not found
      </div>
    </Layout>
  )
}

export default NotFoundPage
