type PostReturn = {
  handleLikeClick: () => void;
};

type PostState = {
  isLiked: boolean;
  likes: number;
};

export type { PostReturn, PostState };
