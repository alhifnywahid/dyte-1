---
title: Perbedaan var, let & const di javascript
description: 'Perbedaan var, let & const di javascript'
authors: "hifny"
tags: ['programing', 'javascript']
---

<hr/>

Pada JavaScript, `var`, `let`, dan `const` adalah tiga kata kunci atau Keyword yang digunakan untuk mendeklarasikan variabel. Walaupun kegunaan atau fungsinya hampir sama, `var`, `let`, dan `const` memiliki perbedaan signifikan dalam hal pembatasan akses dan pengalokasian memori. Di artikel ini, kita akan dibahas perbedaan antara ketiga Keyword tersebut yaitu `var`, `let`, dan `const`, termasuk kelebihan dan kekurangan dari masing-masing sehingga kita dapat memahami kapan dan mengapa harus menggunakan salah satu dari ketiganya.

## VAR

Cakupan atau Scope dari Keyword `var` itu global. Artinya, semua variabel yang dideklarasikan dengan `var` yang berada diluar suatu fungsi (Function) akan tersedia atau dapat diakses untuk keseluruhan kode. Begitu pula sebaliknya, Keyword `var` yang berada di dalam suatu fungsi, maka hanya akan tersedia pada fungsi tersebut.

:::tip SCOPE

Scope dalam JavaScript adalah konsep yang digunakan untuk membatasi pengaksesan suatu variabel. Ada dua tipe scope yaitu lokal dan global. Variabel Global adalah variabel yang dideklarasikan di luar blok kode. Dalam hal ini, Scope dapat diartikan sebagai Ruang Lingkup atau Cakupan.

:::

Masih belum jelas? Baiklah, sekarang perhatikan kode sederhana berikut:

```javascript
var namaDepan = 'Yasya';

function fungsiNama() {
    var namaBelakang = 'El Hakim';
};
```

Pada contoh kode diatas, variabel namaDepan memiliki cakupan global (Dapat diakses pada keseluruhan kode). Mengapa demikian? Itu karena variabel tersebut berada diluar suatu fungsi. Sedangkan variabel `namaBelakang` itu memiliki cakupan yang hanya berada di dalam suatu fungsi `(fungsiNama)`.

Sekarang, mari kita uji kode diatas dengan menampilkan pada Console:

```javascript
var namaDepan = 'Yasya';

function fungsiNama() {
    var namaBelakang = 'El Hakim';
};

console.log(nameBelakang); // Akan menghasilkan Error: namaBelakang is not defined
```

Kode tersebut akan menghasilkan error karena variabel namaBelakang hanya berada di dalam suatu fungsi.

### Deklarasi var

Nilai dari Keyword `var` dapat didiklarasikan ulang atau dapat diperbaui. Artinya, kita dapat membuat dua variabel dengan nama variabel yang sama dengan nilai yang berbeda. Tetapi, hanya nilai variabel akhir yang akan diambil dari variabel terakhir.

Perhatikan contoh kode berikut:

```javascript
var namaDepan = 'Yasya';
var namaDepan = 'Agung';

console.log(namaDepan); // Akan menghasilkan 'Agung'
```

Hasil dari contoh kode diatas akan menampilkan nilai dari variabel `namaDepan` terakhir yaitu `Agung`.

Kode diatas juga dapat ditulis seperti berikut:

```javascript
var namaDepan = 'Yasya';
namaDepan = 'Agung';

console.log(namaDepan); // Akan menghasilkan 'Agung'
```

Perbedaan contoh kode pertama dan kedua adalah, pada contoh kode kedua, kita tidak perlu menuliskan kode var lagi pada variabel `namaDepan`.

### Pengangkatan var

Pengangkatan atau Hoisting adalah mekanisme JavaScript dimana suatu variabel dan fungsi dideklarasikan atau dipindahkan keatas cakupannya tepat sebelum kode dijalankan.

:::tip HOISTING
Hoisting atau jika diterjemahkan kedalam bahasa Indonesia berarti mengangkat adalah istilah yang tidak akan ditemukan dalam prosa spesifikasi normatif sebelum Spesifikasi Bahasa ECMAScript® 2015. Hoisting dimaksudkan sebagai cara berpikir umum tentang bagaimana konteks eksekusi (khususnya fase pembuatan dan pelaksanaan) bekerja di JavaScript.
:::

Pada contoh kode sebelumnya, kita telah menampilkan Output (console.log()) yang berada setelah Keyword var dideklarasikan. Nah, maksud dari Hoisting disini adalah, kita dapat membalik susunan kode tersebut. Silahkan perhatikan contoh kode berikut:

```javascript
console.log(namaBelakang);

var namaBelakang = 'Yasya';
```

Jadi, variabel tersebut akan diangkat dari atas cakupan dan akan diinisialisasikan dengan nilai `undefined`.

Contoh lain dari penulisan kode diatas adalah seperti berikut:

```javascript
var namaBelakang;

console.log(namaBelakang);

namaBelakang = 'Yasya';
```

### Kelemahan var

Terdapat kelemahan ketika kita menggunakan Keyword var untuk mendeklarasikan variabel pada JavaScript. Sebelum membahasnya, coba perhatikan contoh kode berikut:

```javascript
var namaDepan = 'Yasya'
var jumlah = 6;

if (jumlah > 3) { // Jika 6 lebih dari 3, disini akan menghasilkan true (benar)
    var namaDepan = 'Agung'
};

console.log(namaDepan); // Akan menghasilkan 'Agung'
```

Pada contoh kode diatas, jika `jumlah > 3` (`6` lebih dari `3`) maka akan mengasilkan `true` (benar) dan akan menjalankan kode yang ada didalamnya yaitu mendeklarasikan ulang nilai dari variabel namaDepan menjadi `Agung`.

Tidak ada masalah sama sekali jika kalian memang ingin mendeklarasikan ulang variabel tersebut. Namun, akan menjadi masalah jika kalian tidak menyadari bahwa variabel tersebut sudah ada atau sudah dideklarasikan sebelumnya.

Inilah salah satu alasan mengapa terdapat Keyword baru yaitu let dan const.

## LET

Saat ini, `let` adalah Keyword untuk mendeklarasikan variabel yang banyak atau sering digunakan karena Keyword yang satu ini dapat menyelesaikan masalah yang ada pada Keyword var.

Cakupan dari Keyword `let` adalah Blok kode. Maksud dari Blok kode disini adalah segala hal yang berada diantara tanda kurung kurawal '{...}'. Jadi, variabel yang dideklarasikan didalam blok kode dengan Keyword `let` hanya akan tersedia untuk kode yang ada didalam blok kode tersebut saja.

Agar semakin jelas, mari kita ujicoba:

```javascript
let namaDepan = 'Yasya';
let jumlah = 6;

if (jumlah &gt; 3) { // Jika 6 lebih dari 3, disini akan menghasilkan true (benar)
    let namaBelakang = 'El Hakim';

    console.log(namaBelakang); // Akan menghasilkan 'El Hakim'
};

console.log(namaBelakang); // Akan menghasilkan Error: namaBelakang is not defined
```

Pada contoh kode diatas, kita telah melihat bahwasanya menampilkan hasil dari variabel `namaBelakang` diluar cakupan blok kode akan menghasilkan error. Hal tersebut disebabkan karena Keyword `let` hanya mencakup blok kode (Block Scoped).

### Deklarasi let

Sama seperti Keyword `var`, nilai dari variabel yang dideklarasikan dengan menggunakan Keyword `let` juga dapat dideklarasikan ulang atau diperbarui selama berada di cakupanya (Blok kode). Dengan kata lain, nilai dari Keyword `let` tidak dapat dideklarasikan ulang diluar cakupannya. Perhatikan contoh kode berikut:

```javascript
let namaBelakang = 'El Hakim';
namaBelakang = 'Cahyadi';

console.log(namaBelakang); // Akan menghasilkan 'Cahyadi'
```

Namun, akan menghasilkan Error jika kita menuliskannya seperti berikut:

```javascript
let namaBelakang = 'El Hakim';
let namaBelakang = 'Cahyadi';

console.log(namaBelakang); // Akan menghasilkan Error: redeclaration of let namaBelakang
```

Lain halnya jika kita mendeklarasikan ulang variabel yang sama pada cakupan yang berbeda. Contoh:

```javascript
let namaBelakang = 'El Hakim';

if (true) {
    let namaBelakang = 'Cahyadi';

    console.log(namaBelakang); // Akan menghasilkan 'Cahyadi'
}

console.log(namaBelakang); // Akan menghasilkan 'El Hakim'
```

Mengapa tidak terjadi Error pada contoh kode diatas? Karena kedua variabel tersebut dianggap berada dan juga di cakupan yang berbeda.

Itulah salah satu alasan mengapa Keyword `let` lebih baik daripada Keyword `var`. Dengan menggunakan Keyword `let`, kalian tidak perlu khawatir jika kalian memiliki nama variabel yang sama.

### Pengangkatan let

Sama seperti Keyword `var`, deklarasi `let` diangkat ke atas. Sebaliknya, tidak seperti Keyword `var` yang akan mengasilkan undefined, Keyword `let` tidak akan menghasilkan apapun sehingga jika kita menggunakan Keyword let sebelum dideklarasikan, maka akan menghasilkan Reference Error.

## CONST

Seperti deklarasi variabel dengan menggunakan `let`, Keyword `const` hanya dapat diakses didalam blok kode dimana Keyword tersebut dideklarasikan.

Artinya, nilai dari variabel yang dideklarasikan dengan menggunakan Keyword `const` akan tetap sama pada cakupannya dan tidak dapat dideklarasikan ulang atau diperbarui.

Sekarang, perhatikan contoh kode berikut:

```javascript
const namaDepan = 'Yasya';
namaDepan = 'Agung'; // Akan langsung menghasilkan Error: Invalid assignment to const 'namaDepan'
```

Begitupula dengan penulisan seperti berikut:

```javascript
const namaDepan = 'Yasya';
const namaDepan = 'Agung'; // Akan langsung menghasilkan Error: Redeclaration of const namaDepan
```

Oleh karena itu, setiap deklarasi `const` harus diinisialisasi pada saat deklarasi.

Lain halnya dengan objek yang dideklarasikan dengan `const`. Meskipun objek `const` tidak dapat diperbarui, properti objek tersebut tetap dapat diperbarui. Perhatikan contoh kode berikut:

``javascript
const nama = {
    namaDepan: 'Yasya',
    namaBelakang: 'El Hakim'
};

nama = {
    namaDepan: 'Agung',
    namaBelakang: 'Cahyadi'
}; // Akan langsung menghasilkan Error: invalid assignment to const 'nama'
```

Hasil dari contoh kode diatas tentu saja akan menghasilkan error. Namun berbeda jika kita menuliskannya seperti berikut:

```javascript
const nama = {
    namaDepan: 'Yasya',
    namaBelakang: 'El Hakim'
};

nama.namaDepan = 'Agung'; // Akan menghasilkan 'Agung'
nama.namaBelakang = 'Cahyadi'; // Akan menghasilkan 'Cahyadi'

console.log(nama.namaDepan + nama.namaBelakang); // Akan menghasilkan 'AgungCahyadi' 
```

## Kesimpulan

Jadi kesimpulan dari pembahasan mengenai Keyword `var`, `let` dan const kali ini adalah:

- Deklarasi Keyword `var` akan memiliki cakupan (Scope) secara Global. Sedangkan Keyword `let` dan const selama masih berada di cakupannya.
- Variabel yang menggunakan Keyword `var` dapat dideklarasikan ulang atau diperbarui. Variabel `let` juga dapat diperbarui tetapi tidak dapat dideklarasikan ulang. Sedangkan const tidak dapat diperbarui dan juga tidak dapat dideklarasikan ulang.

Mungkin cukup sampai disini pembahasan kali ini. Jika ada yang kurang, salah atau kalian memiliki pertanyaan, silahkan tulis pada kolom komentar. Semoga bermanfaat. Terimakasih.