import type { PostData } from "../../types/PostData";
import Post from "../Post/Post.js";
import type { PostReturn } from "../Post/Post.types";

export default function Feed(root: HTMLElement, data: PostData[]): void {
  const posts: Map<number, PostReturn> = new Map();

  for (let i = 0; i < data.length; i++) {
    const postData: PostData = data[i];
    const postEl = document.createElement("li");
    posts.set(postData.id, Post(postEl, postData));
    root.append(postEl);
  }

  root.addEventListener("click", handleClick);
  root.addEventListener("dblclick", handleDblClick);

  function handleClick(e: MouseEvent): void {
    if (!(e.target instanceof HTMLElement)) return;

    const likeBtn: HTMLElement | null = e.target.closest("[data-like]");

    if (likeBtn) {
      const id = Number(likeBtn.dataset.like);

      if (!posts.has(id)) return;

      posts.get(id)!.handleLikeClick();
    }
  }

  function handleDblClick(e: MouseEvent): void {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.dataset.img) {
      const id = Number(e.target.dataset.img);

      if (!posts.has(id)) return;

      posts.get(id)!.handleLikeClick();
    }
  }
}
