import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from "../assets/logo.png"

export default function Contacts({contacts, currentUser}) {
  
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  
    useEffect(() => {
        if(currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.userName);
        }
  }, [currentUser])
  const changeCurrentChat = (index, contact) => {};
    return (
    <React.Fragment>
        { currentUserImage && currentUserName && (
            <Container> 
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h3>CHATBOX</h3>
                </div>
                <div className="contacts">
                    {
                        contacts.map((contact, index) => {
                            return (
                                <div className={`contact ${index === currentSelected ? "selected" : ""}`} key={index}>
                                    <div className="avatar">
                                        <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} 
                                        alt="avatar" />
                                    </div>
                                    <div className="username">
                                        <h3>{contact.username}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="current-user">
                    <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${currentUserImage}`} 
                        alt="avatar" />
                    </div>
                    <div className="username">
                        <h2>{currentUserName}</h2>
                    </div>
                </div>
            </Container>
        )}
    </React.Fragment> )
}

const Container = styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
overflow: hidden;
background-color: #080420;
`;
