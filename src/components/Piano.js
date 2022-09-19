import _ from 'lodash';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Key } from './Key.js'
import {
  NOTES,
  VALID_KEYS,
  KEY_TO_NOTE,
} from '../global/constants';

const PianoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  }, []);

  const playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }

  const handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    setPressedKeys(updatedPressedKeys);
    playNote(KEY_TO_NOTE[key]);
  }

  const handleKeyUp = (event) => {
    const index = pressedKeys.indexOf(event.key);
    if (index > -1) {
      setPressedKeys(pressedKeys => pressedKeys.splice(index, 1));
    }
  }

  return (
    <div>
      <PianoContainer>
        {
          NOTES.map((note, index) =>
            <Key
              key={index}
              note={note}
              pressedKeys={pressedKeys}
            />
          )
        }
      </PianoContainer>
      <div>
        {
          NOTES.map((note, index) =>
            <audio
              id={note}
              key={index}
              src={`../../notes/${note}.mp3`}
            />)
        }
      </div>
    </div>

  )
}