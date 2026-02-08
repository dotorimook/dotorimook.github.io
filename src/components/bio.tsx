import React from "react"
import styled from "@emotion/styled"
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

export const Bio: React.FC<BioProps> = ({ 
  author = "Dotorimook", 
  social = { twitter: "kylemathews" }, 
  avatar = "/assets/profile-pic.jpg" 
}) => {
  return (
    <Content>
      <p>
        Written by <strong>{author}</strong>
      </p>
    </Content>
  )
}
