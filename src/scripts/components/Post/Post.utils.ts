import type { PostData } from "../../types/PostData";
import type { PostState } from "./Post.types";

function generatePostHTML(data: PostData): string {
  return `
    <article class="post-card">
            <header class="post-card__header container">
              <img
                class="post-card__avatar"
                src="${data.avatar}"
                alt="${data.name}"
              />
              <div class="post-card__header-content">
                <h2 class="post-card__name">${data.name}</h2>
                <p class="post-card__location">${data.location}</p>
              </div>
            </header>
            <img
              class="post-card__img"
              src="${data.post}"
              alt="${data.name}"
              data-img="${data.id}"
            />
            <div class="post-card__content container">
              <div class="post-card__actions">
                <button class="post-card__action-btn" aria-label="Like" data-like="${data.id}">
                  <img
                    class="post-card__action-img"
                    src="assets/images/icon-heart.png"
                    alt=""
                  />
                </button>
                <button class="post-card__action-btn" aria-label="Comment">
                  <img
                    class="post-card__action-img"
                    src="assets/images/icon-comment.png"
                    alt=""
                  />
                </button>
                <button
                  class="post-card__action-btn"
                  aria-label="Direct Message"
                >
                  <img
                    class="post-card__action-img"
                    src="assets/images/icon-dm.png"
                    alt=""
                  />
                </button>
              </div>
              <p class="post-card__likes-count" data-likes aria-live="polite">${generateLikesText(data.likes)}</p>
              <p class="post-card__caption">
                <span class="post-card__username">${data.username}</span
                ><span class="post-card__caption-text"
                  >${data.comment}</span
                >
              </p>
            </div>
          </article>`;
}

function toggleLike(state: PostState): PostState {
  return {
    ...state,
    likes: state.isLiked ? state.likes - 1 : state.likes + 1,
    isLiked: !state.isLiked,
  };
}

function generateLikesText(likes: number): string {
  return `${likes.toLocaleString()} likes`;
}

function getLikeBtnOpacity(isLiked: boolean): string {
  return isLiked ? "0.7" : "1";
}

export { toggleLike, generateLikesText, generatePostHTML, getLikeBtnOpacity };
