import type { PostData } from "../../types/PostData";
import type { PostReturn, PostState } from "./Post.types";
import {
  generateLikesText,
  generatePostHTML,
  getLikeBtnOpacity,
  toggleLike,
} from "./Post.utils.js";

export default function Post(root: HTMLElement, data: PostData): PostReturn {
  root.innerHTML = generatePostHTML(data);

  const likesCountEl: HTMLElement = root.querySelector("[data-likes]")!;
  const likeBtn: HTMLElement = root.querySelector("[data-like]")!;

  let state: PostState = {
    isLiked: false,
    likes: data.likes,
  };

  function handleLikeClick(): void {
    state = toggleLike(state);

    renderLikes();
  }

  function renderLikes(): void {
    likesCountEl.textContent = generateLikesText(state.likes);

    likeBtn.style.opacity = getLikeBtnOpacity(state.isLiked);
  }

  return {
    handleLikeClick,
  };
}
