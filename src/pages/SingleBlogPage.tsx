
import { useParams } from '@solidjs/router'
import { createResource, Show, Switch, Match } from 'solid-js'

const fetchPost = async (id: string) =>{
  const response = await fetch(`https://dummyjson.com/post/${id}`);
  const res = await response.json();
  // console.log(res);
  return res;
}

const SingleBlogPage = () => {

  const {id} = useParams();
  const [user] = createResource(id, fetchPost)

  return (
    <div>
      <Show when={user.loading}>
        <p>Loading...</p>
      </Show>
      <Switch>
        <Match when={user.error}>
          <span>Error:  </span>
        </Match>
        <Match when={user()}>
          <div class='w-full max-w-[500px] px-5 py-5 mx-auto mt-12 border rounded shadow-sm border-blue-200 '>
            <a class="inline-block text-white px-4 py-3 rounded-md mb-8 bg-primary-600 " href="/blog">  Back to Blog</a>
            <h2 class="mb-4 text-2xl  ">{user().title}</h2>
            <p>{user().body}</p>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default SingleBlogPage;