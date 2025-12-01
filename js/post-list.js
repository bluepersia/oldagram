import { makeEl, init as initPostCard } from "./post-card.js";

function init(el, posts) {
  posts.forEach((post) => {
    const postCardEl = makeEl(post);
    const liEl = document.createElement("li");
    liEl.append(postCardEl);
    el.append(liEl);
    initPostCard(postCardEl, post);
  });
}

export { init };
