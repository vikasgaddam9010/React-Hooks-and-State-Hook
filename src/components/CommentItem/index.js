import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
} from './styledComponents'

const CommentItem = props => {
  const {commentDetails} = props
  const {commentName, comment} = commentDetails

  return (
    <>
      <ListItem>
        {commentName && <Avatar>{commentName[0].toUpperCase()}</Avatar>}
        <NameAndCommentContainer>
          <NameText>{commentName}</NameText>
          <CommentText>{comment}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default CommentItem
