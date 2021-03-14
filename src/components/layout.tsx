import { Link, PageRendererProps, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import WindowFrame from "../../WindowFrame"
import colors from "../consts/styles/colors"
import GlobalStyle from "../consts/styles/GlobalStyles"
import { rhythm, styledScale } from "../utils/typography"
import { FadeLink } from "./link"
import TitleBar from "./TitleBar"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import Helmet from "react-helmet"
import iconFolder from '../../content/assets/img/folder.ico';
import imgProfile from '../../content/assets/img/xvz60Z.gif';
deckDeckGoHighlightElement();

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}


const ContentFrame = styled.div`
  height:fit-content;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:stretch;
  .frame-content {
    flex:1;
    overflow:hidden;
  }
  .frame-menu {
    max-width:320px;
  }
  .frame-menu *[class^=frame],
  > .frame-content {
    padding:16px;
  }
  .frame-menu {
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:stretch;
    .frame-categories {
      height:fit-content;
      padding-bottom:2rem;
    }
    .frame-tags {
      flex:1;
    }
    .frame-bio {
      min-height:240px;
      ul {
        margin-top:1em;
        list-style:circle;
        li {
          margin-left:1.2em;
        }
      }
      title {
        display:block;
        font-size:1rem;
        font-weight:bold;
        line-height:1.45em;
      }
    }
  }
  .frame-inner {
    background:${colors.bgWhite};
    box-shadow: inset -1px -1px 0px #FFFFFF, inset 1px 1px 0px #818181, inset -2px -2px 0px #DBDBDB, inset 2px 2px 0px #000000;
  }

  p {
    padding:3px 2px;
    line-height:1.5em;
    font-size:16px;
    margin:1px 0;
  }

  h1 {
    font-size:30px;
    font-weight:bold;
    line-height:1.3em;
    /* margin-top:1rem; */
    margin-top:32px;
    margin-bottom:4px;
  }
  h2 {
    font-size:24px;
    font-weight:bold;
    line-height:1.5em;
    margin-top:22.4px;
    margin-bottom:1px;
  }
  h3 {
    font-size:16px;
    line-height:1.5em;
    font-weight:bold;
    margin-top:16px;
  }
  li {
    line-height:1.5em;
  }

  .article-post:not(:first-child) {
    margin-top:16px;
  }
  .frame-main-banner {
    padding:0;
  }
  .frame-main-banner img {
    width:100%;
  }
  /* .frame-categories li:before {
    content:'📁';
    display:inline-block;
    margin-right: 4px;
  } */
  .frame-categories {
    .li-category {
      position:relative;
      &:before {
        position:absolute;
        content:'';
        width:10px;
        height: 25px;
        /* border: 1px solid #333; */
        margin-top: -15px;
        border-width: 0 0 1px 1px;
        border-style: dotted;
        border-color: #666;
      }
      &:first-child:before {
        height:12px;
        margin-top:-2px;
      }
    }
    .folder {
      margin-left:10px;
      /* position:relative; */
      &:before {
        /* position:absolute; */
        content:'';
        width:16px;
        height:16px;
        display:inline-block;
        background:url(${iconFolder});
        margin-right:5px;
      }
    }
  }
  .frame-tags li {
    display:inline;
    &:not(:first-child) {
      margin-left:6px;
    }
    &:before {
      content:'#';
    }
  }
  code {
    line-height: normal;
    background: rgba(135,131,120,0.15);
    color: #EB5757;
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }
  .frame-posts {
    padding:3rem;
    line-height:1.5em;
  }
  ins {
    background:none;
  }
  .frame-post {
    margin-bottom:2rem;
  }

  @media screen and (max-width: 420px) {
    .frame-menu {
      display:none;
    }
  }
`;

const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const StyledLink = styled(FadeLink)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
`

const Content = styled.div`
  /* margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`}; */
  padding: 32px;
  width:100%;
  height:fit-content;
  min-height:100%;
`

export const Layout = (props: Props) => {
  const { title, children } = props
  const rootPath = `/`

  // const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
          }
        }
        tags: distinct(field: frontmatter___tags)
        categories: distinct(field: frontmatter___categories)
      }
    }
`);

  const tags = data.allMarkdownRemark.tags;
  const categories = data.allMarkdownRemark.categories;

  return (
    <Content>
      <GlobalStyle />
      {/* <header>
        <HeaderTitle>
          <StyledLink to={`/`}>{title}</StyledLink>
        </HeaderTitle>
      </header> */}
      <Helmet>
        <script data-ad-client="ca-pub-5013570089563608" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta name="google-site-verification" content="6K7FT8G98v9kxm3ZVXq8Krb2SSdAm6HZhgqmAARYdC4" />
      </Helmet>
      <WindowFrame>
        <TitleBar title='title' />
        <ContentFrame>
          <section className='frame-menu'>
            <section className='main-banner'>
              <img className='img-main-banner' src={imgProfile} />
            </section>
            <section className='frame-bio'>
              <Link to='/'>
                <h1>Dotorimook's blog</h1>
              </Link>
              <div>
                <p>
                  {`Hello, World!\nThis is Dotorimook's blog`}
                </p>
                <ul>
                  <title>
                    interest
                  </title>
                  <li>HCI</li>
                  <li>UI/UX</li>
                  <li>Frontend</li>
                  <li>javascript</li>
                  <li>node</li>
                </ul>
              </div>
            </section>
            <section className='frame-categories frame-inner'>
              <h1 className='title'>Categories</h1>
              <ul>
                {
                  (categories || []).map(category => (
                    <li className='li-category' key={`link-category-${category}`}>
                      <Link to={`/category/${category}`}><span className='folder'>{category}</span></Link>
                    </li>
                  ))
                }
              </ul>
            </section>
            <section className='frame-tags frame-inner'>
              <h2 className='title'>Tags</h2>
              <ul>
                {
                  (tags || []).map(tag => (
                    <li key={`link-tag-${tag}`}>
                      <Link to={`/tag/${tag}`}>{tag}</Link>
                    </li>
                  ))
                }
              </ul>
            </section>
          </section>
          <section className='frame-content'>
            {children}
          </section>
          {/* <main> */}
          {/* </main> */}
        </ContentFrame>
      </WindowFrame>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </Content>
  )
}
