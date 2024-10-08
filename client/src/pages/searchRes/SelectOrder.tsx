import { useTranslation } from "react-i18next";
import { OrderBySearch } from "../../api/images/types";
import SelectComponent from "../../components/inputs/SelectComponent";

interface OrderBySearchProps {
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
}
function SelectOrder(props: OrderBySearchProps) {
  const { t } = useTranslation();
  const options: { lable: string; optionValue: OrderBySearch }[] = [
    {
      lable: t("latest"),
      optionValue: "latest",
    },
    { lable: t("views"), optionValue: "views" },
    { lable: t("oldest"), optionValue: "oldest" },
    { lable: t("popular"), optionValue: "popular" },
    { lable: t("downloads"), optionValue: "downloads" },
  ];
  const option = t("optionSearch");
  const { orderBy, setOrderBySearch } = props;

  return (
    <SelectComponent
      lable={option}
      value={orderBy}
      options={options}
      onChange={(e) => setOrderBySearch(e.target.value as OrderBySearch)}
    />
  );
}

export default SelectOrder;
