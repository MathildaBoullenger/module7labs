const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


let posts = [
  {
    id: "0",
    title: "Travel Post",
    body: "Embarking on a journey is not just about reaching a destination; it's about immersing ourselves in the transformative experience of travel. From the enchanting landscapes to the diverse cultures we encounter, every step ignites our sense of wanderlust. Let's delve into the joy of exploring new horizons, creating unforgettable memories, and embracing the remarkable adventure that travel brings.",
  },
  { id: "1", 
    title: "Art Post", 
    body: "Art has the remarkable ability to touch our souls and spark a sense of wonder within us. From captivating paintings to thought-provoking sculptures, it has the power to ignite our imagination, evoke emotions, and inspire change. Let's immerse ourselves in the enchanting world of art and embrace its transformative influence in our lives." 
  },
];

app.get("/", (req, res) => {
  res.send(posts);
});

app.post("/", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
