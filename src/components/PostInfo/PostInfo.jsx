import './PostInfo.scss';
import { CommentList, NoComments } from '../CommentList';
import { UserInfo } from '../UserInfo';

function checkComments(postComments) {
  if (postComments.length !== 0) {
    return <CommentList comments={postComments} />;
  }

  return <NoComments />;
}

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={post.user} />
    </div>
    <p className="PostInfo__body">{post.body}</p>

    {checkComments(post.comments)}
  </div>
);
