import React from 'react';
import Nav from './Nav';
import ArticlesList from './ArticlesList';

const ArticlesDisplay = ({ topic }) => {
  return (
    <div>
      <Nav />
      <ArticlesList topic={topic} />
    </div>
  );
};

export default ArticlesDisplay;