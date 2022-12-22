import React, { useState, useEffect } from "react";

export type PostProps = {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  date: Date;
  aCount: number;
  bCount: number;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const [completed, setCompleted] = useState(false);
  let aCount = post.aCount;
  let bCount = post.bCount;
  useEffect(() => {
    setCompleted(localStorage.getItem(`${post.id}`) ? true : false);
    console.log(completed + "sad");
  });
  const [disable, setDisable] = useState(false);
  console.log(post);
  const increment = async (id: number, a: boolean, count: number) => {
    //if (pass !== null) {
    setDisable(true);
    try {
      const body = { a, count };
      await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? "https://hottakes.achintyajha.com/"
            : "http://localhost:3000"
        }/api/complete/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(post.aCount + " asdasd");
      a ? post.aCount++ : post.bCount++;
      localStorage.setItem(`${id}`, `${a ? post.optionA : post.optionB}`);
      setCompleted(true);
      //await Router.push("/");
    } catch (error) {
      alert(error);
      //}
    }
  };
  return completed ? (
    <div>
      <p
        className={`m-0 text-2xl font-medium flex items-center gap-4 justify-between my-4`}
      >
        {post.question}
      </p>
      <div className="bg-neutral-200 rounded">
        <div
          className="bg-red-200 transition h-2 rounded"
          style={{
            width: `${Math.round((aCount / (aCount + bCount)) * 100)}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between">
        <p>
          {post.optionA} ({Math.round((aCount / (aCount + bCount)) * 100)}%)
        </p>
        <p>
          {post.optionB} ({100 - Math.round((aCount / (aCount + bCount)) * 100)}
          %)
        </p>
      </div>
      <p className="text-xs text-center">{aCount + bCount} votes.</p>
    </div>
  ) : (
    <div>
      <p
        className={`m-0 text-2xl font-medium flex items-center gap-4 justify-between my-4`}
      >
        {post.question}
      </p>
      <div className="flex space-x-10">
        <button
          className={
            "bg-neutral-200 w-full rounded-lg text-black text-center p-4 font-bold"
          }
          disabled={disable}
          onClick={() => {
            increment(post.id, true, post.aCount);
          }}
        >
          {post.optionA}
        </button>
        <button
          className={
            "bg-neutral-200 w-full rounded-lg text-black text-center p-4 font-bold"
          }
          disabled={disable}
          onClick={() => {
            increment(post.id, false, post.bCount);
          }}
        >
          {post.optionB}
        </button>
      </div>
    </div>
  );
};

export default Post;
