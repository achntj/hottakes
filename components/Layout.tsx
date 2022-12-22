import React, { ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>Hot Takes</title>
      <meta
        name="description"
        content="A small space for my notes, accessible across all my devices."
      />
    </Head>
    <div className="bg-white prose prose-a:text-pink-400 prose-headings:text-black prose-strong:divide-neutral-800 prose-blockquote:text-slate-400 prose-pre:bg-gray-900 prose-code:text-slate-300 prose-hr:border-zinc-700">
      <div className="max-w-[750px] mx-auto flex flex-col min-h-screen">
        <div className="px-4 flex-grow p-10">{props.children}</div>
      </div>
    </div>
  </>
);

export default Layout;
