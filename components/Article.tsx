'use client'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Lora } from 'next/font/google';
import { useSession } from "next-auth/react";
import UserButton from './UserButton';

const lora = Lora({
    subsets: ['latin'],
    display: 'swap'
});

function Article() {

  interface ArticleState {
    
      id: number;
      title: string;
      styling: string;
      heroHeader: string;
      heroBody: string;
      videoUrl?: string | null;
      contentHeader: string;
      contentBody: string;
      buttons: string[];
      imageUrl?: string | null;
    
  }

  interface RootState {
    article: {
      data: ArticleState;
    };
  }

  // This accesses the Redux store's state and returns it for use in a variable clickedArticle
  const clickedArticle = useSelector((state: RootState) => state.article.data);
  const [state, setState] = useState<ArticleState | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // Console.log current session for debug purposes
      console.log(session);
    }
  }, [session]);

  // Update local state each time clickedArticle changes in Redux store state
  useEffect(() => {
    setState(clickedArticle);
  }, [clickedArticle]);

  useEffect(() => {
    // Console.log current state for debug purposes
    console.log(state);
  }, [state]);

  function toggleArticle() {
    const articleBody = document.getElementById('articleBody');
    const libraryBody = document.getElementById('libraryBody');

    // Hide article page, show library body
    if (articleBody && libraryBody) {
      articleBody.style.display = "none";
      libraryBody.style.display = "flex";
    }
  }

  return (
    <>
      {session ? (
        <div id="articleBody" className="hidden">
          {state && <div className="flex flex-col px-[10%]">
              <span onClick={toggleArticle} className="border border-gray-500 px-[10px] w-[100px] text-center rounded mb-[50px] hover:text-white hover:bg-gray-500 cursor-pointer">Back</span>
              <h1 className="text-3xl mb-[25px]"><span className={lora.className}>{state.heroHeader}</span></h1>
              <div className="mb-[25px]" dangerouslySetInnerHTML={{ __html: state.heroBody}}></div>
              {state.videoUrl && <div className="mb-[25px]">
                <iframe
                  src={state.videoUrl}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Video"
                  width="560"
                  height="315"
                ></iframe>
              </div>}
              <h2 className="text-xl mb-[25px]">{state.contentHeader}</h2>
              <div dangerouslySetInnerHTML={{ __html: state.contentBody }} />
            </div>}
        </div>
      ) : (<UserButton  session={session} />)}
    </>
  )
}

export default Article