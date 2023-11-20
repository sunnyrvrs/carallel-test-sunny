import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Lora } from 'next/font/google';
import { useDispatch } from "react-redux";
import { updateArticleData } from '@/articleSlice';

const lora = Lora({
    subsets: ['latin'],
    display: 'swap'
});

function ArticleRow({ 
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

    // Display article page, hide library body
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
    <a className="articleRow" onClick={handleSetNewState}>
      <div className="cursor-pointer flex flex-row items-center justify-between p-[10px] pr-[25px] border-t border-gray-400">
          <div className={styling}>

          </div>
          <div className="w-[150px] sm:w-max text-md sm:text-lg">
              <h1 className={lora.className}>{title}</h1>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </a>
    
  )
}

export default ArticleRow