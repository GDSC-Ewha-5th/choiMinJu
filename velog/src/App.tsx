// App.tsx
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../src/components/Nav";
import Dropdown from "./components/Dropdown";
import PostCard from "./components/PostCard";
import { PostCardProps } from "./components/PostCard";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<PostCardProps | null>(null);

  const openModal = (data: PostCardProps) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const tempData = {
    imageUrl: process.env.PUBLIC_URL + "/logo192.png",
    title: "포스트 제목",
    description: "설명",
    date: "날짜",
    commentCount: 10,
    userProfileUrl: process.env.PUBLIC_URL + "/logo192.png",
    username: "사용자명",
    likeCount: 100,
  };

  return (
    <Container>
      <NavBar />
      <Dropdown />
      <PostContainer>
        {Array.from({ length: 20 }).map((_, index) => (
          <PostCard
            key={index}
            {...tempData}
            onClick={() => openModal({ ...tempData, onClick: () => {} })}
          />
        ))}
      </PostContainer>
      {isModalOpen && modalData && (
        <ModalBackdrop onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ThumbnailUrl
              src={modalData.imageUrl}
              alt={`Thumbnail for ${modalData.title}`}
            />
            <ContentWrapper>
              <Title>{modalData.title}</Title>
              <Description>{modalData.description}</Description>
              <SubInfo>
                <DateSpan>{modalData.date}</DateSpan>
                <span>|</span>
                <CommentCount>댓글: {modalData.commentCount}개</CommentCount>
              </SubInfo>
              <UserInfo>
                <AuthorProfileUrl
                  src={modalData.userProfileUrl}
                  alt={`Profile of ${modalData.username}`}
                />
                <AuthorName>{modalData.username}</AuthorName>
              </UserInfo>
              <Likes>{modalData.likeCount} 좋아요</Likes>
            </ContentWrapper>
          </ModalContent>
        </ModalBackdrop>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: #efefef;
  color: #333;
`;

const PostContainer = styled.div`
  display: flex;
  width: 90%;
  min-width: 250px;
  margin: 0 5%;
  flex-wrap: wrap;
  justify-content: center;
`;

const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.span`
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
  }
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 60%;
  max-width: 700px;
  margin: 5% auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ThumbnailUrl = styled.img`
  width: 50%;
  height: auto;
  margin: auto;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateSpan = styled.span`
  font-size: 14px;
  color: #888;
`;

const CommentCount = styled.span`
  font-size: 14px;
  color: #888;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AuthorProfileUrl = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

const AuthorName = styled.b`
  font-size: 16px;
  color: #333;
`;

const Likes = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export default App;
