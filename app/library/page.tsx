'use client'
import React from 'react';
import TopBanner from '@/components/TopBanner';
import TabsBanner from '@/components/TabsBanner';
import LibraryBody from '@/components/LibraryBody';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Article from '@/components/Article';

function Library() {

  return (
    <div className="mx-5 sm:mx-10">
        <TopBanner header={"Library"} />
        <TabsBanner tabs={['All', 'Shared', 'Bookmarks', 'Read']} />
        <Provider store={store}>
          <LibraryBody/>
          <Article/>
        </Provider>
    </div>
  )
}

export default Library