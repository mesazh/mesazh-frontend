import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContactSection from "./contactOrChannelSection/ContactSection";
import ChannelSection from "./contactOrChannelSection/ChannelSection";
import PeopleSection from "./contactOrChannelSection/PeopleSection";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

interface Props {}

const Sidebar = () => {
  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");
  const [contactButtonBackgroundColor, setContactButtonBackgroundColor] =
    useState("#CED4DA");
  const [channelButtonBackgroundColor, setChannelButtonBackgroundColor] =
    useState("#495057");
  const [peopleButtonBackgroundColor, setPeopleButtonBackgroundColor] =
    useState("#495057");
  const [mesazhIDDisplayState, setMesazhIDDisplayState] = useState(false);
  const handleContactButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Contacts");
    setSectionToDisplay("Contacts");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#CED4DA");
    setChannelButtonBackgroundColor("#495057");
    setPeopleButtonBackgroundColor("#495057");
  };

  const handleChannelButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Channel");
    setSectionToDisplay("Channels");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#495057");
    setChannelButtonBackgroundColor("#CED4DA");
    setPeopleButtonBackgroundColor("#495057");
  };

  const handlePeopleButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to People");
    setSectionToDisplay("People");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#495057");
    setChannelButtonBackgroundColor("#495057");
    setPeopleButtonBackgroundColor("#CED4DA");
  };

  const handleMesazhIDFlipping = (e: any) => {
    e.preventDefault();
    mesazhIDDisplayState === false
      ? setMesazhIDDisplayState(true)
      : setMesazhIDDisplayState(false);
  };

  return (
    <SidebarContainer>
      <FirstHalf>
        <ContactOrChannelButtons>
          <ContactButton
            onClick={handleContactButton}
            bgColor={contactButtonBackgroundColor}
          >
            Contacts
          </ContactButton>
          <ChannelButton
            onClick={handleChannelButton}
            bgColor={channelButtonBackgroundColor}
          >
            Channels
          </ChannelButton>
          <PeopleButton
            onClick={handlePeopleButton}
            bgColor={peopleButtonBackgroundColor}
          >
            People
          </PeopleButton>
        </ContactOrChannelButtons>
        <SectionToDisplay>
          {sectionToDisplay === "Contacts" ? (
            <ContactSection />
          ) : sectionToDisplay === "People" ? (
            <PeopleSection />
          ) : (
            <ChannelSection />
          )}
        </SectionToDisplay>
      </FirstHalf>

      <SecondHalf>
        <MessageSectionHeader>
          <UsernameContainer
            mesazhIDDisplayState={mesazhIDDisplayState}
            onClick={handleMesazhIDFlipping}
          >
            Domino Domino
          </UsernameContainer>
          <MesazhIDContainer mesazhIDDisplayState={mesazhIDDisplayState}>
            3345566uiodn
          </MesazhIDContainer>
        </MessageSectionHeader>
        <MainMessageContainer>
          <User1>
            <div
              style={{ color: "green" }}
            >{`${new Date().getHours()}:${new Date().getMinutes()}`}</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User2>
            <div
              style={{ color: "green" }}
            >{`${new Date().getHours()}:${new Date().getMinutes()}`}</div>
            {`Today  :  ${Date()}`}
            <br></br>
            {`Destination  :  18 November 2070`}
            <br></br>
            {`Days left  :  ${Math.trunc(
              (new Date("November 18, 2070 23:15:30").getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )}`}
          </User2>
        </MainMessageContainer>
        <MessageSectionTyper
          onClick={handleContactButton}
          bgColor={contactButtonBackgroundColor}
        >
          <FirstDivOfMessageSectionTyper>
            <GeneralIconWrapper>
              <EmojiEmotionsOutlinedIcon />
            </GeneralIconWrapper>
            <GeneralIconWrapper>
              <AttachmentOutlinedIcon />
            </GeneralIconWrapper>
          </FirstDivOfMessageSectionTyper>

          <SecondDivOfMessageSectionTyper>
            <input type="text" placeholder="" />
            <SendIconWrapper>
              <KeyboardArrowRightIcon />
            </SendIconWrapper>
          </SecondDivOfMessageSectionTyper>
        </MessageSectionTyper>
      </SecondHalf>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 100vw;
  background-color: transparent;
  padding-top: 60px;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  border-right: 1px solid black;
  position: fixed;
`;

const ContactOrChannelButtons = styled.div`
  border-top: none;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactButton = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "#495057" ? "white" : "black")};
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const PeopleButton = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "#495057" ? "white" : "black")};
  width: 100px;
  height: 40px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const ChannelButton = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "#495057" ? "white" : "black")};
  width: 100px;
  height: 40px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const FirstHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid black;
`;

const SecondHalf = styled.div`
  border-left: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  height: 1000px;
  width: 980px;
`;

const MainMessageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  height: 438px;
  margin-left: 10px;
  margin-right: 10px;
`;

const User1 = styled.div`
  text-align: left;
  color: #175aea;
`;

const User2 = styled.div`
  text-align: right;
  color: #ce2d86;
`;

const SectionToDisplay = styled.div`
  position: relative;
`;

const MessageSectionHeader = styled.div`
  background-color: #495057;
  color: white;
  width: auto;
  height: 40px;
  font-size: 15px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-right: 1px solid black;
`;

const UsernameContainer = styled.section`
/* border-bottom: 1px solid cyan; */
  &:hover {
    cursor: pointer;
  }
`;

const MesazhIDContainer = styled.section`
  /* border-left: 2px solid yellow;
  border-right: 2px solid yellow;
  border-top: 1px solid yellow; */
  border-bottom: 1px solid yellow;
  border-radius: 2px;
  padding: 0 5px 0 5px;
  display: ${(props) =>
    props.mesazhIDDisplayState === true ? "block" : "none"};
`;

const MessageSectionTyper = styled.div`
  background-color: #495057;
  color: white;
  width: auto;
  height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-right: 1px solid black;
`;

const FirstDivOfMessageSectionTyper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const SecondDivOfMessageSectionTyper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  > input[type="text"] {
    width: 450px;
    border: #e9ecef 1px solid;
    border-radius: 5px;
    height: 25px;
    background-color: transparent;
    color: #e9ecef;
    opacity: 0.9;
    text-align: center;
    padding-left: 10px;
  }
  > input[type="text"]:focus {
    outline: none;
    opacity: 1;
  }
  gap: 10px;
`;

const GeneralIconWrapper = styled.div`
  color: #ced4da;
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    padding-bottom: 5px;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const SendIconWrapper = styled.div`
  color: #ced4da;
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    padding-left: 5px;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;