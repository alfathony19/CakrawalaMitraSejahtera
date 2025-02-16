document.addEventListener("DOMContentLoaded", function () {
  const blogData = {
    main: {
      image: "assets/images/Dikbud-106.jpg",
      date: "25 Juni 2019, 10:09 AM",
      content: "assets/content/blog-1.html",
      author: {
        image: "assets/images/didiksuhardi_square.jpg",
        name: "Didik Suhardi, Ph.D",
        role: "Sekertaris Jendral Kemendikbud",
      },
    },
    latestPosts: [
      {
        title:
          "Mekanisme SIPLah dan Peran Penyedia sebagai Pihak Ketiga dalam Pengadaan Sekolah",
        date: "16 Febuari 2025",
        author: {
          image: "assets/images/Kemendikbud.jpg",
          name: "Nadiem Anwar Makarim, B.A., M.B.A.",
          role: "Kementerian Pendidikan dan Kebudayaan",
        },
        content: "assets/content/blog-2.html",
        image: "assets/images/SIPLah-2025.jpeg",
      },
      {
        title: "Revolusi Digital dalam Pengadaan Sekolah",
        date: "10 Januari 2025",
        author: {
          image: "assets/images/Menkomdigi.jpg",
          name: "Hj. Meutya Viada Hafid, B.Eng., M.IP.",
          role: "Menteri Komunikasi dan Digital",
        },
        content: "assets/content/blog-3.html",
        image: "assets/images/SIPLah-2.png",
      },
      {
        title: "SIPLah – Antara Efisiensi, Transparansi, dan Peluang Ekonomi",
        date: "25 Januari 2025",
        author: {
          image: "assets/images/MentriUMKM.jpeg",
          name: "Prof. Dr. Drs. Maman A. Djauhari",
          role: "Menteri Usaha Mikro, Kecil, dan Menengah",
        },
        content: "assets/content/blog-4.html",
        image: "assets/images/Revolusi.jpg",
      },
    ],
  };

  function updateMainBlog(post) {
    document.getElementById("cardDetailImg").src = post.image;
    document.getElementById("tgl-blog").textContent = post.date;
    document.getElementById("cardDetailBlog").src = post.content;
    document.getElementById("author-detail").innerHTML = `
      <div class="d-flex align-items-center" style="width: 100%;">
        <div style="width: 50px; height: 50px; overflow: hidden; border-radius: 50%;">
          <img src="${post.author.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="Author">
        </div>
        <div class="ms-3" style="flex-grow: 1;">
          <h6 class="mb-0" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${post.author.name}</h6>
          <small class="text-muted">${post.author.role}</small>
        </div>
      </div>
    `;
  }

  updateMainBlog(blogData.main);

  let cardDetailImg = document.getElementById("cardDetailImg");
  if (cardDetailImg) {
    cardDetailImg.src = blogData.main.image;
    cardDetailImg.style.maxWidth = "100%";
    cardDetailImg.style.height = "400px";
    cardDetailImg.style.objectFit = "cover";
  }

  let latestPostsContainer = document.getElementById("latestBlogContent");
  if (latestPostsContainer) {
    latestPostsContainer.innerHTML = "";
    blogData.latestPosts.forEach((post) => {
      let postItem = document.createElement("div");
      postItem.classList.add("d-flex", "align-items-center", "mb-2");
      postItem.innerHTML = `
        <div style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
          <img src="${post.author.image}" alt="Author" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
        </div>
        <div class="ms-2">
          <h6 class="mb-0 post-title" data-content="${post.content}" data-image="${post.image}" data-date="${post.date}" data-author-image="${post.author.image}" data-author-name="${post.author.name}" data-author-role="${post.author.role}" style="cursor:pointer; color:black; text-decoration:none;">
            ${post.title}
          </h6>
          <small><i class="fas fa-calendar-alt"></i> ${post.date}</small>
        </div>
      `;

      postItem
        .querySelector(".post-title")
        .addEventListener("click", function () {
          updateMainBlog({
            image: this.getAttribute("data-image"),
            date: this.getAttribute("data-date"),
            content: this.getAttribute("data-content"),
            author: {
              image: this.getAttribute("data-author-image"),
              name: this.getAttribute("data-author-name"),
              role: this.getAttribute("data-author-role"),
            },
          });
        });

      latestPostsContainer.appendChild(postItem);
    });
  }

  function searchBlog(input) {
    let keyword = input.value.toLowerCase();
    let posts = document.querySelectorAll(".post-title");
    posts.forEach((post) => {
      if (post.textContent.toLowerCase().includes(keyword)) {
        post.click();
      }
    });
  }
});
