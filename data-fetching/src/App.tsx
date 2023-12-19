import { type ReactNode, useState, useEffect } from 'react';
import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import { get } from './util/http.ts';
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPosts() {
      const data = (await get(
        'https://jsonplaceholder.typicode.com/posts'
      )) as RawDataBlogPost[]; //we need to wait for this promise to resolve by catching data with then() or async await

      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setFetchedPosts(blogPosts);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} />
      {content}
    </main>
  );
}

export default App;

//every function that you add "async" returns a promise. But above get() shouldn't return a promise. That's why we cannot use "async". Therefore we need to add a nested function inside of the useEffect()
