import React, { type ReactNode } from "react"
import styled from "@emotion/styled"
import { Link } from "../GatsbyCompat"
import colors from "../consts/styles/colors"
import { rhythm } from "../utils/typography"
import { slugify } from "../utils/slugify"

interface Props {
  title: string
  children: ReactNode
  tags?: string[]
  categories?: string[]
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(2)};
  padding-bottom: ${rhythm(1)};
  border-bottom: 1px solid ${colors.gray}40;

  h1 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 800;
    
    a {
      color: ${colors.c333};
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  nav {
    display: flex;
    gap: 1rem;
    
    a {
      font-size: 0.9rem;
      font-weight: 600;
      color: ${colors.c666};
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
      }
    }
  }
`

const Main = styled.main`
  flex: 1;
`

const Footer = styled.footer`
  margin-top: ${rhythm(3)};
  padding-top: ${rhythm(1)};
  border-top: 1px solid ${colors.gray}40;
  font-size: 0.85rem;
  color: ${colors.c999};
  text-align: center;
  
  .tags-list {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    a {
      color: ${colors.c666};
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
        text-decoration: underline;
      }
    }
  }
`

export const PageLayout = ({ title, children, tags = [], categories = [] }: Props) => {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">Dotorimook's blog</Link>
        </h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Header>
      
      <Main>
        {children}
      </Main>

      <Footer>
        {tags.length > 0 && (
          <div className="tags-list">
            {tags.slice(0, 10).map(tag => (
              <Link key={tag} to={`/tag/${slugify(tag)}`}>#{tag}</Link>
            ))}
            {tags.length > 10 && <Link to="/tags">More...</Link>}
          </div>
        )}
        <p>© {new Date().getFullYear()} Dotorimook. All rights reserved.</p>
      </Footer>
    </Container>
  )
}

export default PageLayout
