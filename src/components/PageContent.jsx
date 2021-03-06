import React from 'react';
import { Router, Redirect } from '@reach/router';
import Articles from './Articles';
import ErrorPage from './ErrorPage';
import RandomArticle from './RandomArticle';
import RandomTopic from './RandomTopic';

const PageContent = ({ user }) => {
  return (
    <section>
      <Router>
        <Redirect from="/" to="/topics/all" noThrow />
        <Articles path="/topics/:topic_slug/*" user={user} />
        <RandomArticle path="/topics/all/random" />
        <RandomTopic path="/topics/random" />
        <ErrorPage default status={404} msg="Page not found" />
      </Router>
    </section>
  );
};

export default PageContent;
