import React, { createContext, useContext, useState } from "react";

const CheckInContext = React.createContext();

const useCheckInContext = () => useContext(CheckInContext);

function CheckInProviderWrapper({ children }) {
  const [mood, setMood] = useState(3);
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");

  return (
    <CheckInContext.Provider
      value={{
        mood,
        setMood,
        imageUrl,
        setImageUrl,
        audioUrl,
        setAudioUrl,
        diaryEntry,
        setDiaryEntry,
      }}
    >
      {children}
    </CheckInContext.Provider>
  );
}

export { CheckInProviderWrapper, CheckInContext, useCheckInContext };
