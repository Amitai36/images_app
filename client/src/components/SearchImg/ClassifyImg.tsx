import * as mobilenet from "@tensorflow-models/mobilenet";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import * as tf from "@tensorflow/tfjs";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

interface ClassifyImgProps {
  selectedImage: string;
  imgRef: RefObject<HTMLImageElement> | null;
  setLoadingModel: Dispatch<SetStateAction<boolean>>;
}

function ClassifyImg(props: ClassifyImgProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const Classify = t("Classify");
  const selectedImageWord = t("selectedImage");
  const { imgRef, selectedImage, setLoadingModel } = props;
  const [modelLaoding, setModelLoading] = useState(false);
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);

  const loadModle = async () => {
    setModelLoading(true);
    try {
      await tf.setBackend("webgl");
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      setLoadingModel(false);
    } catch (error) {
      console.error("Error loading model:", error);
    } finally {
      setModelLoading(false);
    }
  };

  useEffect(() => {
    loadModle();
  }, []);

  const classifyFn = async () => {
    if (imgRef?.current && model) {
      const res = await model.classify(imgRef.current);
      navigate(`/search?element=${res[0].className.split(",")[0]}&page=${1}`);
    }
  };
  return (
    <div style={{ height: "90%" }}>
      {selectedImage && !modelLaoding && (
        <Stack height={"100%"} justifyContent={"center"}>
          <h2 style={{ height: "5%" }}>{selectedImageWord}:</h2>
          <img
            style={{ objectFit: "cover" }}
            height={"100%"}
            src={selectedImage}
            ref={imgRef}
            alt="Selected"
          />
          <Button sx={{ height: "5%" }} onClick={classifyFn}>
            {Classify}
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default ClassifyImg;
