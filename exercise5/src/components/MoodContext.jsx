import React, { createContext, useState } from 'react';

export const MoodContext = createContext(null);

export function MoodContextProvider(props) {
  const [mood, setMood] = useState('happy');

  const changeMood = () => {
    setMood( mood === 'happy' ? 'sad' : 'happy');
  };

  const MoodContextValue = { mood, changeMood };

  return (
    <MoodContext.Provider value={MoodContextValue}>
      {props.children}
    </MoodContext.Provider>
  );
}
