import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Bahasa Pemerograman',
    link: '/coming-soon',
    icon: VideoRegular,
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Enable live video communication within your application. Perfect for education, telemedicine, social networks and gaming',
  },
  {
    title: 'Database',
    link: '/coming-soon',
    icon: MicRegular,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Incorporate high-quality real-time audio into your application. Build voice calls, audio conferences, voice chats in games and more',
  },
  {
    title: 'Bahasa Inggris',
    link: '/coming-soon',
    icon: LiveRegular,
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Integrate highly scalable live video broadcasting capabilities into your app, ideal for apps that involve streaming webinars, sports or live events',
  },
  {
    title: 'Web Scrapping',
    beta: false,
    link: '/coming-soon',
    icon: ChatMultipleRegular,
    lightImage: '/static/landing-page/hero/chat-graphic.png',
    darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Add real-time chat functionalities to your application. Be it customer support, social networks or any other colloboration use case, we got you covered',
  },
];

function HeroProduct({
  link,
  title,
  // icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          {/* <Icon className="h-7 w-7" /> */}
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            My Notes
          </h2>
          <p className="max-w-xl text-center text-text-400">
            Catatan adalah jendela ke dalam pelajaran hidup kita. Mereka mengabadikan pengalaman dan pengetahuan kita.
          </p>
        </div>
      </section>
      
      <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0 my-20">
        <div className='mb-10"'>
          <h4 className="mb-2 text-2xl">Materi</h4>
          <p className="mb-6 text-text-400">Mau Belajar Apa Hari Ini?</p>
        </div>
        <div className='mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2 no-pad-lef-rig'>
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
        </div>
      </section>
    </>
  );
}
