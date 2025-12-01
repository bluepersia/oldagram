function init(el, post) {
  let isLiked = false;
  function onClick() {
    isLiked = !isLiked;
    if (isLiked) {
      post.likes += 1;
      el.querySelector("[data-like-btn]").classList.add(
        "post-card__action-button--active"
      );
    } else {
      post.likes -= 1;
      el.querySelector("[data-like-btn]").classList.remove(
        "post-card__action-button--active"
      );
    }
    el.querySelector("[data-like-count]").textContent = `${post.likes} likes`;
  }
  el.querySelector("[data-like-btn]").addEventListener("click", onClick);
  el.querySelector("[data-image-btn]").addEventListener("click", onClick);
}

function makeEl(post) {
  const el = document.createElement("article");
  el.classList.add("post-card");
  el.innerHTML = `
              <div class="u-container">
                <header class="post-card__header">
                  <img
                    class="post-card__user-avatar"
                    src="${post.avatar}"
                    alt=""
                  />
                  <div class="post-card__user-info">
                    <h3 class="post-card__user-name">${post.name}</h3>
                    <p class="post-card__user-location">
                      ${post.location}
                    </p>
                  </div>
                </header>
                <img
                  class="post-card__image"
                  src="${post.post}"
                  alt=""
                  data-image-btn
                />
                <div class="post-card__footer">
                  <div class="post-card__actions">
                    <button
                      class="post-card__action-button"
                      aria-label="Like"
                      data-like-btn
                    >
                      <img
                        class="post-card__action-icon post-card__like-btn"
                        src="images/icon-heart.png"
                        alt=""
                      />
                    </button>
                    <button
                      class="post-card__action-button"
                      aria-label="Comment"
                      data-comment-btn
                    >
                      <img
                        class="post-card__action-icon"
                        src="images/icon-comment.png"
                        alt=""
                      />
                    </button>
                    <button
                      class="post-card__action-button"
                      aria-label="DM"
                      data-dm-btn
                    >
                      <img
                        class="post-card__action-icon"
                        src="images/icon-dm.png"
                        alt=""
                      />
                    </button>
                  </div>
                  <span class="post-card__likes-count" data-like-count>${post.likes} likes</span>
                  <p class="post-card__user-text">
                    <span class="post-card__user-nickname">${post.username}</span>
                    ${post.comment}
                  </p>
                </div>
              </div>
    `;
  return el;
}

export { init, makeEl };
