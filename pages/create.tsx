import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { NextPage } from "next";
import absoluteUrl from "next-absolute-url";

const Draft: NextPage = () => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [disable, setDisable] = useState(false);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //if (pass === process.env.NEXT_PUBLIC_PASS) {
    setDisable(true);
    try {
      const body = { question, optionA, optionB };
      await fetch(`${origin}/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
    //}
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Poll</h1>
          <div className="mb-5">
            <a>
              <button disabled={disable} type="submit">
                Publish
              </button>
            </a>
          </div>
          <div>
            <input
              autoFocus
              required
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Question"
              type="text"
              value={question}
              className="w-full outline-none bg-transparent text-3xl font-bold"
            />
            <textarea
              required
              cols={50}
              onChange={(e) => setOptionA(e.target.value)}
              placeholder="Option A"
              rows={8}
              value={optionA}
              className="w-full outline-none h-auto resize-none bg-transparent"
            />
            <textarea
              required
              cols={50}
              onChange={(e) => setOptionB(e.target.value)}
              placeholder="Option B"
              rows={8}
              value={optionB}
              className="w-full outline-none h-auto resize-none bg-transparent"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

Draft.getInitialProps = async (context) => {
  const { req } = context;
  // Hostname is needed on both front and back so we should
  // post it to the frontend by returning it from getInitialProps
  const origin = absoluteUrl(req).origin;
  return {
    origin,
  };
};

export default Draft;
