import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import React from 'react';
import './css/notfound.css';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Halaman yang Anda cari tidak ditemukan',
        })}
      />
      <main className="main-container">
        <div className="text-center">
          <p className="error-code">404</p>
          <h1 className="title_notfound">Halaman tidak ditemukan</h1>
          <p className="description">
            Maaf, kami tidak dapat menemukan halaman yang Anda cari.
          </p>
          <div className="button-group">
            <a href="/" className="back-home-button">
              Kembali ke Beranda
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6285655207366&text&type=phone_number&app_absent=0"
              className="contact-support"
            >
              Hubungi Dukungan <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
