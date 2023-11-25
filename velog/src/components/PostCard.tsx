import React from "react";
import styled from "styled-components";

export interface PostCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  commentCount: number;
  userProfileUrl: string;
  username: string;
  likeCount: number;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  title,
  description,
  date,
  commentCount,
  userProfileUrl,
  username,
  likeCount,
  onClick,
}) => {
  return (
    <Card onClick={onClick}>
      <ThumbnailUrl src={imageUrl} alt={`Thumbnail for ${title}`} />
      <Title>{title}</Title>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <SubInfo>
        <DateSpan>{date}</DateSpan>
        <span>|</span>
        <CommentCount>댓글: {commentCount}개</CommentCount>
      </SubInfo>
      <UserInfo>
        <AuthorProfileUrl src={userProfileUrl} alt={`Profile of ${username}`} />
        <AuthorName>{username}</AuthorName>
      </UserInfo>
      <Likes>{likeCount} 좋아요</Likes>
    </Card>
  );
};

const Card = styled.div`
  display: block;
  border: 1px solid #e5e5e5;
  max-width: 250px;
  min-width: 200px;
  padding: 10px;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ThumbnailUrl = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h4`
  margin-top: 10px;
  font-size: 18px;
`;

const DescriptionWrapper = styled.div`
  /* 스타일 적용 */
`;

const Description = styled.p`
  /* 스타일 적용 */
`;

const SubInfo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DateSpan = styled.span`
  /* 스타일 적용 */
`;

const CommentCount = styled.span`
  /* 스타일 적용 */
`;

const UserInfo = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  text-decoration: none;
  color: inherit;
`;

const AuthorProfileUrl = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const AuthorName = styled.b`
  /* 스타일 적용 */
`;

const Likes = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export default PostCard;
