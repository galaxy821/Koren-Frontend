import styled from "styled-components";
import BackArrow from "../../assets/back-arrow.png";
import BackArrowButton from "./BackArrowButton";
import WritingPostButton from "./WritingPostButton";
import RegistrationButton from "./RegistrationButton";
import ButtonWrapper from "./ButtonWrapper";

const TitleTab = styled.div`
  display: flex;
  justify-content: center;
  line-height: 60px;
  width: 270px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgray;
`;
const Header = (props) => {
  const renderBackArrowButton = props.renderBackArrowButton;
  const renderWritingPostButton = props.renderWritingPostButton;

  const title = props.title;

  const emptyTab = <ButtonWrapper />;

  const leftTab = renderBackArrowButton ? <BackArrowButton /> : emptyTab;
  const rightTab = renderWritingPostButton ? <WritingPostButton /> : emptyTab;

  return (
    <HeaderWrapper>
      {leftTab}
      <TitleTab>
        <Title>{title}</Title>
      </TitleTab>
      {rightTab}
    </HeaderWrapper>
  );
};

export default Header;
