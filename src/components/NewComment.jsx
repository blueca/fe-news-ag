import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';
import * as api from '../utils/api';
import ErrorPage from './ErrorPage';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 5rem;
  border-radius: 0.3rem;
`;

const TextArea = styled.textarea`
  background-color: ${col.layer2};
  color: white;
  border-radius: 0.3rem;

  @media (max-width: 768px) {
    width: 98%;
  }
`;

class NewComment extends React.Component {
  state = { newComment: '', error: null };

  render() {
    const { error, newComment } = this.state;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <TextArea
            name="newComment"
            cols="70"
            rows="6"
            onChange={this.handleChange}
            value={newComment}
            required
            placeholder="Add new comment..."
          ></TextArea>
        </label>
        <Button>Post</Button>
      </Form>
    );
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ newComment: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.newComment;
    const { handlePost, user, article_id } = this.props;
    const comment = { username: user, body: value };

    api
      .postComment(article_id, comment)
      .then((response) => {
        this.setState({ newComment: '' }, () => handlePost(response));
      })
      .catch((error) => {
        const { data, status } = error.response;
        this.setState({
          error: {
            msg: data.error,
            status: status,
          },
        });
      });
  };
}

export default NewComment;
