document.addEventListener("DOMContentLoaded", function () {
  const blogSection = document.getElementById("blog");

  const blogData = [
    {
      title:
        "SIPLah: Solusi Digital untuk Transparansi dan Efisiensi Pengadaan Sekolah",
      date: "25 Juni 2019",
      author: "Didik Suhardi, Ph.D ",
      category: "Sekertaris Jendral Kemendikbud",
      content:
        "Program Sistem Informasi Pengadaan Sekolah (SIPLah) adalah platform digital yang diciptakan untuk mempermudah sekolah dalam proses pengadaan barang dan jasa menggunakan dana Bantuan Operasional Sekolah (BOS)...",
      image: "assets/images/Dikbud-106.jpg",
    },
    {
      title:
        "Mekanisme SIPLah dan Peran Penyedia sebagai Pihak Ketiga dalam Pengadaan Sekolah",
      date: "16 Febuari 2025",
      content:
        "SIPLah adalah platform digital yang dirancang untuk mempermudah proses pengadaan barang dan jasa oleh sekolah menggunakan dana BOS. Program ini melibatkan berbagai pihak, termasuk sekolah sebagai pembeli, marketplace sebagai fasilitator, dan penyedia barang atau jasa sebagai pihak ketiga.",
      image: "assets/images/SIPLah-2025.jpeg",
    },
    {
      title: "Revolusi Digital dalam Pengadaan Sekolah",
      date: "10 Januari 2025",
      content:
        "Di era digital, berbagai sektor mengalami transformasi besar, termasuk dalam dunia pendidikan. Salah satu perubahan signifikan terjadi dalam sistem pengadaan barang dan jasa untuk sekolah, yang sebelumnya dilakukan secara manual dengan proses panjang dan birokratis",
      image: "assets/images/SIPLah-2.jpg",
    },
    {
      title:
        "SIPLah – Antara Efisiensi, Transparansi, dan Peluang Ekonomi gambar",
      date: "25 Januari 2025",
      content:
        "Transformasi digital telah merambah berbagai sektor, termasuk sistem pengadaan barang dan jasa di dunia pendidikan.SIPLah hadir sebagai solusi modern yang mengubah cara sekolah membeli kebutuhan operasional mereka menggunakan dana BOS...",
      image: "assets/images/Revolusi.jpg",
    },
  ];

  blogSection.innerHTML = `
      <div class="container">
          <div class="row">
              <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                  <div class="section-heading">
                      <h2>Lihat Apa yang Sedang <em>Trending</em> di Berita <span>Terbaru</span> Kami</h2>
                  </div>
              </div>
              <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                  <div class="top-dec">
                      <img src="assets/images/blog-dec.png" alt="" />
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                  <div class="left-image">
                      <a href="detail-blog.html"><img src="${
                        blogData[0].image
                      }" alt="Workspace Desktop"/></a>
                      <div class="info">
                          <div class="inner-content">
                              <ul>
                                  <li><i class="fa fa-calendar"></i> ${
                                    blogData[0].date
                                  }</li>
                                  <li><i class="fa fa-users"></i> ${
                                    blogData[0].author
                                  }</li>
                                  <li><i class="fa fa-folder"></i> ${
                                    blogData[0].category
                                  }</li>
                              </ul>
                              <a href="detail-blog.html"><h4>${
                                blogData[0].title
                              }</h4></a>
                              <p>${blogData[0].content}
                              <a href="detail-blog.html" style="color: blue; text-decoration: none;">Baca Selengkapnya</a>
                              </p>
                              <div class="main-blue-button">
                                  <a href="detail-blog.html">Discover More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                  <div class="right-list">
                      <ul>
                          ${blogData
                            .slice(1)
                            .map(
                              (blog) => `
                              <li>
                                  <div class="left-content align-self-center">
                                      <span><i class="fa fa-calendar"></i> ${blog.date}</span>
                                      <a href="detail-blog.html"><h4>${blog.title}</h4></a>
                                      <p style="text-align: justify">${blog.content}
                                      <a href="detail-blog.html" style="color: blue; text-decoration: none;">Baca Selengkapnya</a>
                                      </p>
                                  </div>
                                  <div class="right-image">
                                      <a href="detail-blog.html"><img src="${blog.image}" alt=""/></a>
                                  </div>
                              </li>
                          `
                            )
                            .join("")}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  `;
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("blogData.json")
    .then((response) => response.json())
    .then((blogData) => {
      document.getElementById("title-blog").textContent = blogData.main.title;
      document.getElementById("cardDetailImg").src = blogData.main.image;
      document.getElementById("tgl-blog").textContent = blogData.main.date;
      document.getElementById("cardDetailBlog").src = blogData.main.content;

      let authorDetail = document.getElementById("author-detail");
      authorDetail.innerHTML = `
              <img src="${blogData.main.author.image}" class="rounded-circle me-2" width="40" height="40" alt="Author">
              <h6 class="mb-0">${blogData.main.author.name}</h6>
          `;

      let latestPostsContainer = document.getElementById("latestBlogContent");
      blogData.latestPosts.forEach((post) => {
        let postItem = document.createElement("div");
        postItem.classList.add("d-flex", "align-items-center", "mb-2");
        postItem.innerHTML = `
                  <img src="${post.authorImage}" class="rounded-circle me-2" width="40" height="40" alt="Author">
                  <div>
                      <h6 class="mb-0">${post.title}</h6>
                      <small><i class="fas fa-calendar-alt"></i> ${post.date}</small>
                  </div>
              `;
        latestPostsContainer.appendChild(postItem);
      });
    })
    .catch((error) => console.error("Error fetching blog data:", error));
});
