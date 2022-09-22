import _ from 'lodash';
import React, { useEffect } from 'react';

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
  return (
    <div>
      <PianoContainer>
        {
          NOTES.map((note, index) =>
            <Key
              key={index}
              note={note}
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