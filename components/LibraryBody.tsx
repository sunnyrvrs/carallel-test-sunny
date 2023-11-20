import { Lora } from 'next/font/google';
import ArticleTab from './ArticleTab';
// import React, { useState, useEffect } from 'react';
import { allResources } from '@/mock-data/mock-data';
import ArticleRow from './ArticleRow';
import { useSession } from "next-auth/react";

const lora = Lora({
    subsets: ['latin'],
    display: 'swap'
});

function LibraryBody() {

  // SCENARIO WITH BACKEND API PROVIDED

  // const [resources, setResources] = useState([]);

  // Using the useEffect hook to execute a side effect in the component.
  // This hook is called after the component is rendered, and in this case, it's used to fetch data from the backend, in a scenario in which a backend API would be provided.
  // The empty dependency array '[]' as the second argument to useEffect makes sure that the data fetching
  // occurs only once when the component is mounted, similar to componentDidMount in class components.

  // useEffect(() => {
  // This assumes that your backend has an endpoint at '/api/resources' which returns a list of resources in JSON format.
  //   fetch('/api/resources')
  // Parsing the response to JSON.
  //     .then(response => response.json())
  //     .then(data => setResources(data))
  // Catching any errors during the fetch operation and logging them to the console.
  // This is important for debugging and understanding why a fetch might fail (e.g., network issues, server errors).
  //     .catch(error => console.error('Error fetching data: ', error));
  // }, []);

  // useSession is a React hook that provides login session data and loading state
  const { data: session, status } = useSession();

  return (
    <div id="libraryBody" className={session ? "flex flex-col" : "hidden"}
    >
        <div className="flex flex-col text-2xl mb-[30px] sm:text-start text-center">
            <h1 className={lora.className}>Recommended</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center sm:justify-start">
          {/* {Articles} */}
          {allResources.articles.map((article) => (
            <ArticleTab 
              key={article.id}
              title={article.title}
              styling={article.styling}
              id={article.id}
              heroHeader={article.heroHeader}
              heroBody={article.heroBody}
              videoUrl={article.videoUrl}
              contentHeader={article.contentHeader}
              contentBody={article.contentBody}
              buttons={article.buttons}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
        <div className="flex flex-col mt-[50px]">
          {/* Additional resources articles */}
            {allResources.additionalResources.map((article) => (
              <ArticleRow
                key={article.id}
                title={article.title}
                styling={article.styling}
                id={article.id}
                heroHeader={article.heroHeader}
                heroBody={article.heroBody}
                videoUrl={article.videoUrl}
                contentHeader={article.contentHeader}
                contentBody={article.contentBody}
                buttons={article.buttons}
                imageUrl={article.imageUrl}
              />
            ))}
        </div>
    </div>
  )
}

export default LibraryBody