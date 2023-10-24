import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Programing',
    link: '/web-core',
    iconLink: '/svg/programing.svg',
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Belajar HTML, CSS, Javascript, Java dan Lainnya.',
  },
  {
    title: 'Editing',
    beta: true,
    link: '#',
    iconLink: '/svg/logoku.svg',
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Belajar Database seperti Basis data, MySQL, MongoDB dan Lainnya.',
  },
  {
    title: 'Web Scrapping',
    beta: true,
    link: '#',
    iconLink: '/svg/logoku.svg',
    lightImage: '/static/landing-page/hero/chat-graphic.png',
    darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Belajar Scrapping Web menggunakan package seperti Axios, Cheerio, Playwright Chormium dan Lainnya.',
  },
  {
    title: 'Bahasa Inggris',
    beta: true,
    link: '#',
    iconLink: '/svg/logoku.svg',
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Belajar bahasa inggris mulai dari cara membaca dan Lainnya.',
  },
];

function HeroProduct({
  link,
  title,
  iconLink,
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
        <img className="h-10 w-10" src={iconLink} />
          <div>
            {title}
            {beta && <span style={{color: 'yellow', fontSize: '13px'}} className="font-normal text-text-400"> (Segera Hadir)</span>}
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
        <div className="mb-10">
          {/* <h3 style={{color: 'green'}} className="mb-2 uppercase tracking-wider text-text-400">KATEGORI</h3> */}
          <span style={{color: 'green'}} className="mb-4 uppercase tracking-wider text-text-400">KATEGORI</span>
          <h4 className="mb-2 text-3xl">Mau belajar apa hari ini?</h4>
          <p className="mb-6 text-text-400">Temukan tutorial berdasarkan minatmu.</p>
        </div>
        <div style={{paddingLeft: '0px', paddingRight: '0px'}} className='mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2'>
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
        </div>
      </section>
    </>
  );
}
