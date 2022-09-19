import _ from 'lodash';
import React from 'react';
import { NOTE_TO_KEY } from '../global/constants';
import styled from 'styled-components';

const PianoKey = styled.div`
  background-color: ${props => props.pressed ? "#00d8ff" : "white"};
  height: 300px;
  width: 60px;
  border: 2px solid black;
`;

const FlatPianoKey = styled(PianoKey)`
  position: relative;
  background-color: ${props => props.pressed ? "#00d8ff" : "black"};
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

export const Key = ({note, pressedKeys}) => {
  const noteIsFlat = (note) => {
    return note.length > 1;
  }

  const keyIsPressed = (note, pressedKeys) => {
    return _.includes(pressedKeys, NOTE_TO_KEY[note]);
  }

  return (
    <>
    {
      noteIsFlat(note) ? 
      <FlatPianoKey pressed={keyIsPressed(note, pressedKeys)}/>
      :
      <PianoKey pressed={keyIsPressed(note, pressedKeys)}>
        <KeyText>
          {note.toUpperCase()}
        </KeyText>
      </PianoKey>
    }
    </>
  )
}