import React from "react";

import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";
import BottomNavigationBar from "../component/BottomNavigationBar";
import Header from "../component/header/Header";

const MainWrapper = styled.div`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const PostListPage = () => {
    return (
        <>
            <Header renderBackArrowButton='false' title='Memting'  renderWritingPostButton='true'/>
            <MainWrapper>
                <PostCard approvebtn={false} coinvaluebtn={false}/>
                <PostCard approvebtn={false} coinvaluebtn={false}/>
            </MainWrapper>
            <BottomNavigationBar/>
        </>

    )
}
export default PostListPage;