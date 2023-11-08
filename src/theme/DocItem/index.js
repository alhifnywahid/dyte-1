import React from 'react';
import { DiscussionEmbed } from 'disqus-react'
import DocItem from '@theme-original/DocItem';
import { useLocation } from "@docusaurus/router";
import GiscusComments from "../../components/Comentar/index"

export default function DocItemWrapper(props) {
  const { pathname } = useLocation();

  return (
    <>
      <DocItem {...props} />
        <DiscussionEmbed
          shortname='https-www-mynotes-engineer-1'
          config={{
            identifier: pathname,
            pathname,
            language: 'id',
          }}
        />
    </>
  );
}
