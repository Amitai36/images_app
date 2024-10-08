import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";
import DialogComponent from "../DialogComponent";
import { useTranslation } from "react-i18next";

interface SharingProps {
  url: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Shares(props: SharingProps) {
  const { t } = useTranslation();
  const share = t("sharing");
  const { url, open, setOpen } = props;
  return (
    <DialogComponent
      content={
        <div>
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon />
          </WhatsappShareButton>
          <EmailShareButton url={url}>
            <EmailIcon />
          </EmailShareButton>
        </div>
      }
      open={open}
      setOpen={setOpen}
      title={{ color: "info", text: share }}
    />
  );
}

export default Shares