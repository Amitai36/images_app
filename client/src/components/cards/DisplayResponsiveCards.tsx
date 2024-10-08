import { Grid } from "@mui/material";

import LoaderCard from "./LoaderCard";
import CreateCards from "./CreateCards";
import { FetchRes } from "../../api/images/types";

interface DisplayResponsiveCardsProps {
  items: FetchRes["results"] | undefined;
}

function DisplayResponsiveCards(props: DisplayResponsiveCardsProps) {
  const { items } = props;
  const loader = items
    ? Array(items.length).fill(0)
    : Array(10).fill(<LoaderCard />);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Grid width={"100%"} container spacing={2}>
        {loader.map((card, index) => (
          <Grid sm={12} md={6} lg={4} item key={index}>
            {items ? (
              <CreateCards 
                res={items[index]}
              />
            ) : (
              card
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DisplayResponsiveCards;
