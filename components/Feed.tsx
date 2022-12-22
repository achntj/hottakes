import Post from "./Post";

export default function Feed({ props }) {
  return (
    <div>
      <main className="divide-y divide-neutral-400 divide-dashed">
        {props.feed.length == 0 ? (
          <p>(Nothing to see here) ʕ•ᴥ•ʔ</p>
        ) : (
          props.feed.map((post, index) => (
            <div key={post.id} className="my-5">
              <Post post={post} />
            </div>
          ))
        )}
      </main>
    </div>
  );
}
