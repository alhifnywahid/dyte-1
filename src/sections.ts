import type { ComponentProps, ReactNode } from 'react';
import {
  ReactIcon, 
  HTMLIcon,
  JSIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
    section: false;
  }
  | {
    section: string;
    icon: (props: ComponentProps<'svg'>) => ReactNode;
    name: string;
  }
);

const SECTIONS: Section[] = [ 
  {
    name: 'js',
    docId: 'js',
    icon: JSIcon,
    section: 'java',
  },
  {
    name: 'java',
    docId: 'java',
    icon: JSIcon,
    section: 'java',
  },
  {
    name: 'html',
    docId: 'html',
    icon: HTMLIcon,
    section: 'java',
  },
  {
    name: 'css',
    docId: 'css',
    icon: ReactIcon,
    section: 'java',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'UI Kit',
      section: 'web-prebuilt',
      className: 'deprecated-badge',
    },
  ],
  [
    {
      name: 'UI Kit',
      section: 'web-ui-kit',
      description:
        'Use our pre-built UI components as a base to build on top of.',
    },
    {
      name: 'Core SDK',
      section: 'web-core-sdk',
      description: 'Build your own UI from scratch, use our low level APIs.',
    },
  ],
  [
    {
      name: 'UI Kit',
      section: 'mobile-ui-kit',
      description: 'Use our pre-built mobile UI Kit SDK, ready to go',
    },
    {
      name: 'Core SDK',
      section: 'mobile-core',
      description: 'Build your own UI from scratch, use our low level APIs.',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
