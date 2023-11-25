import React from 'react';
import {
  DiscussionEmbed,
  CommentCount,
  Recommendations,
  CommentEmbed,
} from 'disqus-react';
import DocItem from '@theme-original/DocItem';
import { useLocation } from '@docusaurus/router';
import GiscusComments from '../../components/Comentar/index';

export default function DocItemWrapper(props) {
  const { pathname } = useLocation();

  return (
    <>
      <DocItem {...props} />
      <br />
      <DiscussionEmbed
        shortname="mynotes-5"
        config={{
          identifier: pathname,
          pathname,
          language: 'id',
        }}
      />
      {/* <CommentEmbed
        shortname="mynotes-5"
        config={{
          identifier: pathname,
          pathname,
          language: 'id',
        }}
      /> */}
      {/* <Recommendations
        shortname="mynotes-5"
        config={{
          identifier: pathname,
          pathname,
          language: 'id',
        }}
      /> */}
      {/* <CommentCount
        shortname="mynotes-5"
        config={{
          identifier: pathname,
          pathname,
          language: 'id',
        }}
      /> */}
    </>
  );
}
