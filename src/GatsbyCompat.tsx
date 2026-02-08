import React from 'react';

export const Link = ({ to, children, ...props }: any) => {
  return <a href={to} {...props}>{children}</a>;
};

export const graphql = (query: any) => query;
export const useStaticQuery = (query: any) => ({});
export const StaticQuery = (props: any) => null;
