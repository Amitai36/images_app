import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic, MicNone } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import "babel-polyfill";

interface VoiceProps {
  onFinish: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function Voice(props: VoiceProps) {
  const { onFinish, setValue } = props;
  const {
    transcript,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition,
    listening,
  } = useSpeechRecognition();

  const { i18n } = useTranslation();
  const startListening = () => {
    if (transcript) {
      resetTranscript();
    }
    SpeechRecognition.startListening({ language: i18n.language });
  };

  useEffect(() => {
    setValue(transcript);
    if (finalTranscript) {
      onFinish();
    }
  }, [i18n, transcript, finalTranscript]);

  return (
    <div>
      {browserSupportsSpeechRecognition && (
        <Button
          sx={{
            position: "relative",
            animation: "paused infinite 2s",
          }}
          onClick={startListening}
        >
          {!listening ? (
            <Mic />
          ) : (
            <MicNone
              sx={{
                animation: "pulse 1s infinite alternate",
                "@keyframes pulse": {
                  from: { transform: "scale(1)" },
                  to: { transform: "scale(1.2)" },
                },
              }}
            />
          )}
        </Button>
      )}
    </div>
  );
}

export default Voice;
