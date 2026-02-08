import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

interface BioProps {
  author?: string;
  social?: {
    twitter?: string;
  };
  avatar?: string;
}

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const Avatar = styled.img`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
  width: 50px;
  height: 50px;
  object-fit: cover;
`

export const Bio: React.FC<BioProps> = ({ 
  author = "Dotorimook", 
  social = { twitter: "kylemathews" }, 
  avatar = "/assets/profile-pic.jpg" 
}) => {
  return (
    <Content>
      <Avatar
        src={avatar}
        alt={author}
        style={{ borderRadius: "50%" }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </Content>
  )
}
