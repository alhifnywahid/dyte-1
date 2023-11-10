import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

type Props = {
  noInline?: boolean;
  code: string;
};

export const DemoLiveEditor = ({ noInline = false, code }: Props) => {
  return (
    <LiveProvider code={code} noInline={noInline}>
      <div className="grid gap-4 lg:grid-cols-1">
        <LiveEditor className="font-mono" />
        <LivePreview />
      </div>
      <LiveError className="mt-2 bg-red-100 text-red-800" />
    </LiveProvider>
  );
};
