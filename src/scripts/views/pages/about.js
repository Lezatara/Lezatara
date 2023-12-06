const About = {
  members: [
    {
      name: "Syahrul Amri",
      linkedin: "https://www.linkedin.com/in/syahrul-amri-1b8338197/",
      github: "https://github.com/syahrulamri11",
      instagram: "https://www.instagram.com/syahrul11_amri/",
      profilePic: "./amri.jpg",
      description: "Universitas Mataram - Fullstack Web Development",
    },
    {
      name: "Fadia Indah Sari",
      linkedin: "https://www.linkedin.com/in/fadia-indah-sari-23007427a",
      github: "https://github.com/syfaacanzz",
      instagram: "https://www.instagram.com/insfdiaaa____/",
      profilePic: "./fadia.jpg",
      description: "Politeknik Negeri Sriwijaya - Pengembang Front-End Web Dan Back-End",
    },
    {
      name: "Haida Khoirurrosyid",
      linkedin: "https://www.linkedin.com/in/haidakhoirurrosyid/",
      github: "https://github.com/ocid13",
      instagram: "https://www.instagram.com/hhayycidd__/",
      profilePic: "./ocid.jpg",
      description: "Universitas Muhammadiyah Jakarta - Pengembang Front-End Web Dan Back-End",
    },
    {
      name: "Rizky Agung",
      linkedin: "https://www.linkedin.com/in/rizky-agung-a2946a288",
      github: "https://github.com/RizkyAgung26",
      instagram: "https://www.instagram.com/riiizky_agung/",
      profilePic: "./rizky.jpg",
      description: "Universitas Maritim Raja Ali Haji - Pengembang Front-End Web Dan Back-End",
    },
    {
      name: "Andhika Trisna Putra",
      linkedin: "https://www.linkedin.com/in/andhika-trisna-645523194/",
      github: "https://github.com/Andhikatp30",
      instagram: "https://www.instagram.com/andhika30_/",
      profilePic: "./andhika.jpeg",
      description: "Universitas Esa Unggul - Pengembang Front-End Web Dan Back-End",
    },
  ],

  aboutUsDescription: "Kami sebuah tim yang terdiri dari para pengembang web dengan berbagai latar belakang pendidikan dan keahlian. Kami memiliki komitmen untuk menciptakan solusi inovatif dalam pengembangan front-end dan back-end. Dengan semangat kolaborasi dan dedikasi, kami bertekad untuk memberikan yang terbaik dalam proyek-proyek yang kami jalani.",

  generateMemberHTML(member) {
      return `
        <div class="member">
          <img src="${member.profilePic}" alt="${member.name}" class="profile-pic">
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <ul class="social-links">
            <li>
              <a href="${member.linkedin}" target="_blank">
                <i class="fab fa-linkedin"></i> <!-- Icon LinkedIn Font Awesome -->
              </a>
            </li>
            <li>
              <a href="${member.github}" target="_blank">
                <i class="fab fa-github"></i> <!-- Icon GitHub Font Awesome -->
              </a>
            </li>
            <li>
              <a href="${member.instagram}" target="_blank">
                <i class="fab fa-instagram"></i> <!-- Icon Instagram Font Awesome -->
              </a>
            </li>
          </ul>
        </div>
      `;
    },
    

    async render() {
      let anggota = '';
      this.members.forEach(member => {
        anggota += this.generateMemberHTML(member);
      });
    
      return `
        <div class="about-container">
          <h2 class="title">Tentang Kami</h2>
          <p>${this.aboutUsDescription}</p> <!-- Tambahkan deskripsi "Tentang Kami" di sini -->
          <div class="team">
          <div class="about-content">
            <div class="team">
              <h2 class="title">Tim Kami</h2>
              <div class="members">
                ${anggota}
              </div>
            </div>
          </div>
        </div>`;
    },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    // Misalnya, Anda dapat menambahkan logika tambahan di sini setelah rendering
  },
};

export default About;