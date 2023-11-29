import React, { createContext, useContext, useState } from "react";

const CheckInContext = React.createContext();

const useCheckInContext = () => useContext(CheckInContext);

function CheckInProviderWrapper(props) {
  const [mood, setMood] = useState(3);
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const multipleValues = {
    moodState: [mood, setMood],
    imageState: [imageUrl, setImageUrl],
    audioState: [audioUrl, setAudioUrl],
    diaryState: [diaryEntry, setDiaryEntry],
  };

  return (
    <CheckInContext.Provider value={multipleValues}>
      {props.children}
    </CheckInContext.Provider>
  );
}

export { CheckInProviderWrapper, CheckInContext, useCheckInContext };
