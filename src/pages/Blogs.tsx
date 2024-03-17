import React from 'react';
import { createResource, For, Match, Show } from 'solid-js'

const fetchPosts = async () =>{
  const response = await fetch(`https://dummyjson.com/posts?limit=10`);
  const res = await response.json();
  // console.log(res);
  
  return res;
}


const Blogs = () => {

  const [products] = createResource(fetchPosts)

  return (
    <div class="px-8 py-8  ">
      <Show when={products.loading}>
        <h2>Loading ...</h2>
      </Show>
      <Match when={products.error}>
        <h2>Error ...</h2>
      </Match>
      <Show when={products()}>
        <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products().posts}>
          {product => <a href={`/blog/${product.id}`} class="border block rounded px-4 py-4  ">
            <h2 class="text-black text-xl ">{product.title}</h2>
            </a>}
        </For>
        </div>
      </Show>
    </div>
  );
};

export default Blogs;