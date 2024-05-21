import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

import {useState} from 'react'

import {v4} from 'uuid'

const Comments = () => {
  const [commentName, setCommentName] = useState('')
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])

  const onChangeName = event => setCommentName(event.target.value)
  const onChangeComment = event => setComment(event.target.value)

  const addCommentForm = event => {
    event.preventDefault()

    const newComment = {
      id: v4(),
      commentName,
      comment,
    }
    setCommentList(prevState => [...prevState, newComment])
    setCommentName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={addCommentForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={commentName}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(comment => (
          <CommentItem key={comment.id} commentDetails={comment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}
export default Comments
