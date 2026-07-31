import Feed from "./components/Feed/Feed.js";

fetch("/assets/data/posts.json")
  .then((res) => res.json())
  .then((data) => Feed(document.getElementById("feed")!, data));
