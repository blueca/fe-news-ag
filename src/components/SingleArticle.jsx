import React from 'react';
import styled from 'styled-components';
import VoteChanger from './VoteChanger';
import { col } from '../styles/colours';

const Article = styled.article`
  display: flex;
  border-bottom: 2px dotted ${col.layer4};
  margin-bottom: 0.2rem;
  width: 70%;
`;

const ArticleDetails = styled.div`
  display: flex;
  align-items: baseline;
`;

const H2 = styled.h2`
  margin: 0 1.5rem 0 0;
`;

const P = styled.p`
  margin: 0 0.5rem 0 0;
  font-size: 0.8rem;
`;

const ArticleContent = styled.p`
  background-color: ${col.layer2};
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin: 0.3rem 0;
  box-shadow: 0 0 0.2rem black;
`;

const CommentP = styled.p`
  margin-bottom: 0.2rem;
`;

const SingleArticle = (props) => {
  const {
    title,
    author,
    created_at,
    body,
    topic,
    votes,
    article_id,
    comment_count,
  } = props.article;

  return (
    <Article>
      <VoteChanger votes={votes} id={article_id} votee="articles" />
      <section>
        <ArticleDetails>
          <H2>{title}</H2>
          <P>({topic})</P>
        </ArticleDetails>
        <ArticleDetails>
          <P>submitted at {new Date(created_at).toLocaleDateString()}</P>
          <P>by {author}</P>
        </ArticleDetails>
        <ArticleContent>{body}</ArticleContent>
        <CommentP>{comment_count} comments</CommentP>
      </section>
    </Article>
  );
};

export default SingleArticle;
