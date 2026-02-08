import { Link } from '../GatsbyCompat';
import React, { type FC } from 'react';
import styled from 'styled-components';
import colors from '../consts/styles/colors';
import { formatDateTime } from '../utils/date';
import { scale } from '../utils/typography';
import { slugify } from '../utils/slugify';
import type { IPost } from './PostListItem';

const HeroFrame = styled.article`
  position: relative;
  margin-top: ${scale(0.5).fontSize};
  margin-bottom: ${scale(1.5).fontSize};
  padding-bottom: ${scale(0.5).fontSize};
  border-bottom: 2px solid ${colors.gray};
  
  .hero-label {
    font-size: 0.8rem;
    font-weight: bold;
    color: ${colors.c666};
    text-transform: uppercase;
    margin-bottom: 8px;
    display: inline-block;
    border: 1px solid ${colors.c666};
    padding: 2px 6px;
    border-radius: 4px;
  }

  .frame-title {
    margin-bottom: 12px;
  }
  .title {
    font-size: 2.2rem;
    line-height: 1.2em;
    font-weight: 800;
  }
  .date {
    font-size: 0.9rem;
    color: ${colors.c666};
    margin-bottom: 12px;
  }
  .category {
    margin-left: 10px;
    font-size: 1rem;
    color: ${colors.c666};
    &:before {
      content: '/';
      margin-right: 8px;
    }
  }
  .frame-description {
    font-size: 1.1rem;
    line-height: 1.5em;
    margin-bottom: 16px;
    color: ${colors.c333};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .read-more {
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: underline;
    color: ${colors.c333};
    display: inline-block;
    margin-bottom: 16px;
  }
  .ul-tags {
    margin-top: 10px;
    color: ${colors.c666};
    .li-tag {
      display: inline;
      &:before {
        content: '#';
      }
    }
    .li-tag:not(:first-child) {
      margin-left: 6px;
    }
  }
`;

interface HeroPostProps {
  post: IPost;
}

const HeroPost: FC<HeroPostProps> = ({ post }) => {
  const {
    excerpt,
    fields: { slug },
    frontmatter: { title, categories, tags, date, description },
  } = post;

  return (
    <HeroFrame>
      <div className="hero-label">Featured Post</div>
      <div className="frame-title">
        <Link to={slug}>
          <span className="title">{title}</span>
        </Link>
        <span className="category">
          {(categories || []).map((category) => (
            <Link key={`link-category-${category}`} to={`/category/${slugify(category)}`}>
              {category}
            </Link>
          ))}
        </span>
      </div>
      <div className="date">{formatDateTime(date || '')}</div>
      <Link to={slug}>
        <div className="frame-description">{description || excerpt}</div>
      </Link>
      <Link to={slug} className="read-more">
        Read more →
      </Link>
      <ul className="ul-tags">
        {(tags || []).map((tag) => (
          <li key={`link-tag-${tag}`} className="li-tag">
            <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </HeroFrame>
  );
};

export default HeroPost;
