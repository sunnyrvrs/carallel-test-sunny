import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { updateArticleData } from '@/articleSlice';

function ArticleTab({ 
  id,
  title,
  styling,
  heroHeader,
  heroBody,
  videoUrl,
  contentHeader,
  contentBody,
  buttons,
  imageUrl
}: { 
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
}) {
  // Import ability to dispatch actions for Redux store
  const dispatch = useDispatch();

  const handleSetNewState = (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    const articleBody = document.getElementById('articleBody');
    const libraryBody = document.getElementById('libraryBody');

    if (articleBody && libraryBody) {
      articleBody.style.display = "flex";
      libraryBody.style.display = "none";
    }

    const data = {
      id: id,
      title: title,
      heroHeader: heroHeader,
      heroBody: heroBody,
      videoUrl: videoUrl,
      contentHeader: contentHeader,
      contentBody: contentBody,
      buttons: buttons,
      imageUrl: imageUrl
    }
    // Dispatch an action that updates the Redux store state with
    // the latest clickedArticle data
    dispatch(updateArticleData(data));

  };

  return (
    <a
      onClick={handleSetNewState}
    >
      <div key={id} className="cursor-pointer flex flex-col mr-[10px] w-[250px] items-center">
        <div className={styling}>
            <div className="absolute ml-[30px] mt-[35px]">
                <FontAwesomeIcon icon={faHospital} size={"2xl"}/>
            </div>
        </div>
        <div className="p-5 flex-wrap text-center">
            {title}
        </div>
      </div>
    </a>

    
  )
}

export default ArticleTab