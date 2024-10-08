import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderBySearch } from "../../api/images/types";
import { useQueryImage } from "../../api/images/query";
import DisplayRes from "./DisplayRes";

function SearchRes() {
  const [search, setSearch] = useSearchParams();
  const page = search?.get("page") ? parseInt(search.get("page")!) : 1;
  const element = search.get("element") as string;
  const [pageNumber, setPageNumber] = useState(page);
  const [orderBy, setOrderBy] = useState<OrderBySearch>("latest");
  const
    { data, isLoading, refetch }
      = useQueryImage({
        pageNumber,
        photoName: element ?? "",
        orderBy,
      });

  useEffect(() => {
    refetch();
  }, [orderBy, pageNumber, element]);

  return (
    <DisplayRes
      isLoading={isLoading}
      items={data}
      orderBy={orderBy}
      page={pageNumber}
      setOrderBySearch={setOrderBy}
      setPage={setPageNumber}
      setSearchParams={setSearch}
      element={element}
    />
  );
}

export default SearchRes;
