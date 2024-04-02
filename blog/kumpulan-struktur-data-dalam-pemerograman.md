---
title: Kumpulan struktur data dalam pemerograman
authors: "hifny"
keywords: ['programing', 'struktur data']
tags: ['programing']
---

<hr/>

Struktur Data adalah cara khusus untuk mengatur dan menyimpan data dalam komputer sedemikian rupa sehingga kita dapat melakukan operasi pada data yang tersimpan dengan lebih efisien. Struktur data memiliki cakupan penggunaan yang luas dan beragam di seluruh bidang Ilmu Komputer dan Rekayasa Perangkat Lunak.

Struktur data digunakan di hampir setiap program atau sistem perangkat lunak yang telah dikembangkan. Selain itu, struktur data berada di bawah dasar-dasar Ilmu Komputer dan Rekayasa Perangkat Lunak. Ini adalah topik utama dalam pertanyaan wawancara Rekayasa Perangkat Lunak. Oleh karena itu, sebagai pengembang, kita harus memiliki pengetahuan yang baik tentang struktur data.

Dalam artikel ini, saya akan menjelaskan secara singkat beberapa struktur data yang umum digunakan yang harus diketahui oleh setiap programmer.

## 1. Arrays

![Assets](/img/blog/struktur-data-array.png)

Array adalah kumpulan elemen data yang disusun secara berurutan dan diidentifikasi oleh indeks atau nomor yang unik. Setiap elemen dalam array dapat diakses menggunakan indeksnya. Array biasanya memiliki tipe data yang sama untuk setiap elemennya, meskipun ada juga array yang dapat menyimpan tipe data yang berbeda.

Array sendiri terbagi menjadi 2 yaitu array 1 dimensi dan array multidimensi.

Beberapa karakteristik umum dari array dalam struktur data adalah:

- Urutan: Elemen-elemen dalam array disusun dalam urutan tertentu. Ini berarti elemen-elemen tersebut memiliki posisi yang jelas dalam array, dimulai dari indeks 0 hingga n-1, di mana n adalah jumlah elemen dalam array.

- Indeks: Setiap elemen dalam array memiliki indeks yang unik. Indeks ini digunakan untuk mengakses elemen tertentu dalam array.

- Tipe Data : Array biasanya terdiri dari elemen-elemen dengan tipe data yang sama di beberapa bahasa pemerograman seperti Java, C++ dan ada juga yang tidak sama seperti di bahasa JavaScript dll.

- Statis atau Dinamis: Array dapat memiliki ukuran yang tetap (statis) atau dapat berubah (dinamis). Dalam array statis, ukuran array ditentukan pada saat deklarasi dan tidak bisa berubah selama program berjalan. Sedangkan dalam array dinamis, ukuran array dapat berubah selama program berjalan.

- Efisiensi Akses: Akses ke elemen-elemen dalam array biasanya sangat efisien, karena setiap elemen memiliki indeks yang digunakan untuk mengaksesnya secara langsung, tanpa perlu melalui proses pencarian.

Array digunakan secara luas dalam pemrograman untuk menyimpan dan mengelola kumpulan data yang terorganisir. Mereka merupakan salah satu struktur data dasar yang sangat penting dalam pengembangan perangkat lunak.

## 2. LinkedList

![Assets](/img/blog/struktur-data-linkedlist.png)

LinkedList adalah salah satu struktur data yang digunakan dalam pemrograman komputer untuk menyimpan kumpulan elemen data. Dalam LinkedList, setiap elemen data disebut sebagai "node", dan setiap node memiliki dua bagian utama: data itu sendiri dan referensi ke node berikutnya dalam urutan.

Node pertama dalam LinkedList disebut sebagai "head", dan node terakhir dapat dikenali karena tidak memiliki referensi yang valid ke node berikutnya, biasanya disebut "tail". Dalam LinkedList, setiap node terhubung ke node berikutnya dalam urutan, menciptakan rantai (chain) dari node-node tersebut.

LinkedList memungkinkan penyisipan dan penghapusan elemen dengan cepat di tengah-tengah struktur data, karena hanya perlu memperbarui referensi node terkait. Namun, pencarian elemen dalam LinkedList biasanya membutuhkan waktu yang lebih lama daripada dalam struktur data seperti array, karena perlu melakukan pencarian berurutan dari head hingga mencapai node yang diinginkan.

Ada berbagai jenis LinkedList, termasuk:

1. LinkedList satu arah (Singly LinkedList): Setiap node memiliki referensi ke node berikutnya.
2. LinkedList dua arah (Doubly LinkedList): Setiap node memiliki referensi ke node sebelumnya dan berikutnya.
3. LinkedList sirkular: LinkedList di mana tail memiliki referensi kembali ke head, membentuk lingkaran.

LinkedList sering digunakan dalam implementasi struktur data lainnya, seperti antrian (queue) dan tumpukan (stack), serta dalam algoritma seperti traversal dan manipulasi daftar.

## 3. Stack

![Assets](/img/blog/struktur-data-stack.png)

Dalam struktur data, "stack" adalah koleksi elemen-elemen yang diatur sesuai dengan prinsip "last in, first out" (LIFO). Artinya, elemen terakhir yang dimasukkan ke dalam stack akan menjadi elemen pertama yang dihapus dari stack.

- Stack biasanya memiliki dua operasi utama:

Push: Operasi untuk menambahkan elemen baru ke dalam stack. Elemen baru ini akan ditempatkan di bagian atas stack.

- Pop: Operasi untuk menghapus elemen teratas dari stack. Elemen yang dihapus adalah elemen yang paling terakhir dimasukkan ke dalam stack.

Selain operasi push dan pop, stack juga mungkin memiliki operasi lain seperti:

- Peek: Mengambil nilai dari elemen teratas stack tanpa menghapusnya dari stack.
- IsEmpty: Memeriksa apakah stack kosong atau tidak.
- IsFull: Memeriksa apakah stack penuh atau tidak (jika stack memiliki batasan ukuran).

Stack dapat digunakan dalam berbagai aplikasi, seperti dalam implementasi rekursi dalam pemrograman, evaluasi ekspresi matematika dalam kompilasi, manajemen memori dalam sistem operasi, dan banyak lagi.

## 4. Queues

![Assets](/img/blog/struktur-data-queues.png)

Dalam struktur data, Queues adalah koleksi elemen yang diatur menurut prinsip "First In, First Out" (FIFO). Artinya, elemen pertama yang dimasukkan ke dalam antrian adalah yang pertama keluar dari antrian saat elemen diambil atau dihapus. Konsep ini sering ditemukan dalam kehidupan sehari-hari, seperti antrian di kasir supermarket atau antrian panggilan telepon.

Queues biasanya memiliki dua operasi utama:

- Enqueue (Menambahkan): Operasi ini menambahkan elemen ke ujung belakang (akhir) dari antrian.
- Dequeue (Menghapus): Operasi ini menghapus elemen dari ujung depan (awal) antrian dan mengembalikan nilainya.
Selain itu, ada beberapa operasi tambahan yang sering ditemukan dalam implementasi Queues:

- IsEmpty: Untuk memeriksa apakah antrian kosong.
- IsFull: Untuk memeriksa apakah antrian penuh (dalam kasus implementasi dengan kapasitas terbatas).
- Peek atau Front: Untuk melihat elemen pertama dalam antrian tanpa menghapusnya.
- Size: Untuk mendapatkan jumlah elemen dalam antrian.
Queues digunakan dalam berbagai konteks dan aplikasi dalam ilmu komputer, termasuk pengelolaan tugas dalam sistem operasi, pengaturan antrian pesan dalam jaringan komputer, dan simulasi proses dalam pemodelan komputer.

## 5. Tree

![Assets](/img/blog/struktur-data-trees.png)

Dalam struktur data, sebuah "tree" adalah jenis struktur data yang terdiri dari simpul-simpul yang terhubung secara hierarkis. Secara konseptual, struktur ini menyerupai sebuah pohon dengan akar di bagian atas dan cabang-cabang yang menjalar ke bawah. Setiap simpul dalam pohon tersebut memiliki satu simpul induk, kecuali simpul akar yang tidak memiliki simpul induk.

Setiap simpul dalam pohon mungkin memiliki nol atau lebih simpul anak, yang terhubung melalui edge (atau sisi). Simpul-simpul ini bisa memiliki sub-pohon sendiri di bawahnya, dan struktur tersebut dapat berkembang dengan sangat besar, tergantung pada jumlah dan kedalaman anak-anak yang dimiliki setiap simpul.

Tree umum digunakan dalam berbagai aplikasi, termasuk dalam pemrograman komputer. Contoh penerapan tree dalam komputasi termasuk struktur data seperti struktur file sistem operasi, struktur representasi hirarki dalam database, struktur representasi kode dalam kompiler, dan banyak lagi.

Ada berbagai jenis tree yang berbeda, termasuk:

- Binary Tree: Setiap simpul memiliki paling banyak dua anak.
- Binary Search Tree (BST): Jenis tree biner di mana setiap simpul memiliki nilai yang lebih besar dari semua nilai di bawahnya dalam sub-pohon kiri dan nilai yang lebih kecil dari semua nilai di bawahnya dalam sub-pohon kanan.
- Tree dengan lebih dari dua anak: Tree yang memungkinkan setiap simpul memiliki lebih dari dua anak.
- Tree N-ary: Sebuah tree di mana setiap simpul dapat memiliki hingga N anak.
- Red-Black Tree, AVL Tree, B-Tree: Jenis-jenis tree yang dioptimalkan untuk operasi tertentu seperti pencarian, penyisipan, atau penghapusan dengan kompleksitas waktu yang tetap rendah.
Tree memiliki berbagai aplikasi dalam komputasi dan digunakan untuk memodelkan dan memecahkan berbagai masalah dalam algoritma dan struktur data.

## 6. Hash Table

![Assets](/img/blog/struktur-data-hashtable.png)

Hash table adalah struktur data yang digunakan untuk menyimpan kumpulan item di mana akses ke setiap item dilakukan melalui kunci tertentu. Hash table menggunakan fungsi hash untuk memetakan kunci ke lokasi penyimpanan di dalam tabel. Ini memungkinkan akses cepat ke elemen-elemen dengan menggunakan kunci mereka.

Fungsi hash mengambil input kunci dan menghasilkan nilai integer yang unik, yang disebut hash code. Hash code ini kemudian digunakan untuk menentukan lokasi penyimpanan di dalam tabel hash. Setiap lokasi dalam tabel hash disebut dengan slot atau bucket. Ketika ingin menambahkan item ke dalam hash table, nilai hash code dari kunci dihitung dan digunakan untuk menentukan lokasi penyimpanannya. Jika ada kolisi hash, yaitu dua kunci yang berbeda menghasilkan nilai hash code yang sama, maka metode tertentu, seperti chaining atau probing, digunakan untuk menangani konflik tersebut.

Keunggulan utama dari hash table adalah kecepatan akses yang konstan (O(1)) untuk pencarian, penambahan, dan penghapusan item jika fungsi hash yang digunakan baik. Namun, kelemahan hash table adalah konsumsi memori yang bisa menjadi besar jika tabelnya terlalu besar atau jika terjadi banyak kolisi hash, yang dapat mengurangi kinerja operasi-operasi di atas menjadi O(n).

## 7. Heaps

![Assets](/img/blog/struktur-data-heaps.png)

Heaps adalah struktur data dalam ilmu komputer yang digunakan untuk menyimpan dan mengatur kumpulan elemen data dengan sifat tertentu. Secara khusus, heap adalah jenis pohon biner khusus yang memenuhi properti tertentu, biasanya dikenal sebagai "sifat heap".

Ada dua jenis heap yang umum: heap maksimum dan heap minimum.

- Heap Maksimum: Pada heap maksimum, setiap simpul (atau node) memiliki nilai yang lebih besar daripada nilai simpul anaknya. Dengan kata lain, nilai terbesar terletak di bagian atas heap.

- Heap Minimum: Pada heap minimum, setiap simpul memiliki nilai yang lebih kecil daripada nilai simpul anaknya. Dengan kata lain, nilai terkecil terletak di bagian atas heap.

Heaps sering digunakan untuk implementasi berbagai algoritma, termasuk algoritma pencarian, pengurutan, dan optimasi. Beberapa operasi umum pada heap termasuk menyisipkan elemen (insert), menghapus elemen tertentu (delete), serta mengambil elemen dengan nilai tertinggi atau terendah tanpa mengganggu struktur heap (extract-max atau extract-min). Heaps juga sering digunakan dalam implementasi algoritma Dijkstra untuk pencarian jalur terpendek dalam grafik.

Keuntungan utama dari penggunaan heap adalah kompleksitas waktu yang efisien untuk operasi-operasi utama seperti penyisipan, penghapusan, dan pengambilan elemen tertinggi atau terendah, yang kira-kira O(log n), di mana n adalah jumlah elemen dalam heap.

## 8. Graph

![Assets](/img/blog/struktur-data-graph.png)

Dalam struktur data, sebuah "graph" adalah kumpulan dari simpul (nodes) yang terhubung oleh sisi (edges). Graph digunakan untuk merepresentasikan hubungan antara objek-objek tersebut.

Ada dua jenis graph utama:

- Directed Graph (Digraph): Graph yang setiap sisi memiliki arah. Misalnya, jika terdapat sisi dari simpul A ke simpul B, itu tidak sama dengan sisi dari simpul B ke simpul A.

- Undirected Graph: Graph di mana setiap sisi tidak memiliki arah, artinya jika terdapat sisi yang menghubungkan simpul A dan simpul B, itu berarti juga terdapat sisi yang sama yang menghubungkan simpul B dan simpul A.

Graph bisa memiliki berbagai aplikasi dalam pemrograman dan ilmu komputer, termasuk dalam pemodelan jaringan sosial, rute jaringan komputer, pemodelan alur kerja, dan berbagai masalah optimasi lainnya. Dalam struktur data, graph juga memiliki struktur tersendiri untuk menyimpan data dan operasi yang diperlukan untuk memanipulasi graph tersebut.

## 9. Sort

Di dalam struktur data, "sort" adalah proses pengurutan elemen-elemen data dalam urutan tertentu. Tujuan dari sort ini adalah untuk memudahkan akses dan pengelolaan data. Sort sering kali diperlukan dalam berbagai aplikasi, seperti dalam pemrosesan data, pencarian, atau untuk menampilkan data secara terurut.

Ada berbagai algoritma sort yang berbeda dengan kompleksitas waktu dan ruang yang berbeda pula. Beberapa algoritma sort yang umum digunakan antara lain:

- Bubble Sort: Algoritma yang sederhana namun tidak efisien, di mana elemen-elemen yang berdekatan dibandingkan dan ditukar jika diperlukan.

- Insertion Sort: Algoritma yang memisahkan elemen satu per satu dari daftar yang belum diurutkan dan menyisipkannya pada tempat yang sesuai dalam daftar yang sudah diurutkan.

- Selection Sort: Algoritma yang secara berulang memilih elemen dengan nilai minimum dari sisa daftar dan memindahkannya ke posisi pertama.

- Merge Sort: Algoritma yang menggunakan pendekatan divide and conquer, yaitu membagi daftar menjadi sub-daftar yang lebih kecil, mengurutkan masing-masing sub-daftar, dan menggabungkan mereka secara berurutan.

- Quick Sort: Algoritma yang juga menggunakan pendekatan divide and conquer, namun lebih efisien daripada merge sort dengan memilih elemen yang disebut pivot untuk mempartisi daftar menjadi dua bagian, kemudian mengurutkan setiap bagian secara rekursif.

Heap Sort: Algoritma yang menggunakan struktur data heap untuk mengurutkan elemen.

Setiap algoritma memiliki kelebihan dan kekurangan masing-masing tergantung pada jenis data yang diurutkan dan kinerja yang diharapkan. Pemilihan algoritma sort yang tepat sangat penting untuk mendapatkan kinerja yang optimal dalam aplikasi tertentu.

## 10. Rekursi

Rekursi adalah konsep dalam pemrograman di mana sebuah fungsi dapat memanggil dirinya sendiri secara berulang untuk menyelesaikan suatu tugas atau masalah. Dalam konteks struktur data, rekursi sering digunakan untuk mengoperasikan atau memanipulasi struktur data yang memiliki sifat rekursif, seperti pohon atau daftar bertautan.

Misalnya, dalam struktur data pohon, sebuah fungsi rekursif dapat digunakan untuk melakukan pencarian, penambahan, atau penghapusan simpul dalam pohon dengan cara yang terus-menerus memanggil dirinya sendiri untuk memproses anak-anak simpul saat melakukan navigasi pohon.

Dalam daftar bertautan, rekursi juga dapat digunakan untuk melakukan operasi seperti pencarian, penyisipan, atau penghapusan elemen dengan mengunjungi setiap simpul daftar dengan cara yang berulang.

Rekursi dapat membuat kode lebih pendek dan elegan dalam beberapa kasus, tetapi juga memerlukan hati-hati agar tidak memicu kejebakan rekursif atau berakibat pada kinerja yang buruk karena penumpukan panggilan fungsi. Sehingga, penggunaan rekursi dalam struktur data harus dipertimbangkan secara cermat.