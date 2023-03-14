const mainElement = document.querySelector("main");
const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
  {
    name: "Sakine Özdemir",
    username: "sakinefurkann",
    location: "Kleve, Germany",
    avatar: "images/avatar-sakine.jpg",
    post: "images/post-sakine.jpg",
    comment: "Herkese merhaba bugun Düsseldorf seyahatimizi yaptik",
    likes: 1520,
  },
];

for (let post of posts) {
  mainElement.innerHTML += `<section class="container-profile">
  <img
    id="avatar"
    class="avatar-img"
    src= "${post.avatar}"
    alt="avatar of the person"
  />
  <p id="profile-name">
  ${post.name}
    <span id="profile-location" class="location-info light-text">${post.location}</span>
  </p>
  
  </section>
  <section>
  <img
    id="post-img"
    src="${post.post}"
    alt="post of the person"
  />
  </section>
  <section class="container-reaction">
  <img id="like-img" src="images/icon-heart.png" alt="like icon" />
  <img src="images/icon-comment.png" alt="comment icon" />
  <img src="images/icon-dm.png" alt="send icon" />
  </section>
  <section class="container-comments">
  <p class="likes">${post.likes} likes</p>
  <p id="username">
  ${post.username}
    <span id="comment" class="light-text">${post.comment}</span>
  </p>
  </section><div class="footer-post"></div>`;
}

const likeImgs = document.querySelectorAll("#like-img");
const likeCounts = document.querySelectorAll(".likes");

likeImgs.forEach((likeImg, i) => {
  likeImg.addEventListener("click", () => {
    posts[i].likes++;
    likeCounts[i].textContent = `${posts[i].likes} likes`;
  });
});
