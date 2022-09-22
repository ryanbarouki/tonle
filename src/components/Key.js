import _ from 'lodash';
import React from 'react';
import { NOTE_TO_KEY } from '../global/constants';
import styled from 'styled-components';
import { useState } from 'react';

const PianoKey = styled.div`
  background-color: ${props => props.isPressed ? "#00d8ff" : "white"};
  height: 300px;
  width: 60px;
  border: 2px solid black;
`;

const FlatPianoKey = styled(PianoKey)`
  position: relative;
  background-color: ${props => props.isPressed ? "#00d8ff" : "black"};
  margin-left: -17px;
  margin-right: -17px;
  height: 200px;
  width: 30px;
  z-index: 2;
`;

const KeyText = styled.div`
  position: relative;
  color: black;
  font-weight: 600;
  font-size: 36px;
  margin-top: 240px;
  pointer-events: none;
`;

export const Key = ({note}) => {
  const [pressedKey, setPressedKey] = useState(false);

  const noteIsFlat = (note) => {
    return note.length > 1;
  }
  
  const playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }

  function handleKeyDown() {
    playNote(note);
    setPressedKey(true);
  }

  function handleKeyUp() {
    setPressedKey(false);
  }

  return (
    <>
    {
      noteIsFlat(note) ? 
      <FlatPianoKey onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} isPressed={pressedKey}/>
      :
      <PianoKey onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} isPressed={pressedKey}>
        <KeyText>
          {note.toUpperCase()}
        </KeyText>
      </PianoKey>
    }
    </>
  )
}