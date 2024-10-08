import { useEffect, useState } from "react";
import { languages } from "./list";
import SelectComponent from "../imputs/SelectComponent";
import { Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

function ChosseLang() {
  const [lang, setLang] = useState(
    window.localStorage.getItem("i18nextLng") as string
  );
  const { i18n, t } = useTranslation();
  const dialogTitle = t("titleChangeDialog");

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const selectable = languages.map((l) => {
    return {
      optionValue: l.code,
      lable: (
        <Typography alignItems={"center"}>
          <ReactCountryFlag
            style={{ fontSize: 25, margin: 5 }}
            svg
            countryCode={l.countryCode}
            className="emojiFlag"
          />
          {l.lang}
        </Typography>
      ),
    };
  });

  return (
    <SelectComponent
      lable={dialogTitle}
      options={selectable}
      value={lang}
      onChange={(e) => {
        const NV = e.target.value as string;
        setLang(NV);
        i18n.changeLanguage(NV);
      }}
    />
  );
}

export default ChosseLang;
