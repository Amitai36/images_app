import { Avatar, Grid, Skeleton } from "@mui/material";

function LoaderCard() {
  return (
    <div>
      <Grid container alignItems={"center"}>
        <Grid item xs={1}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Grid>
        <Grid item xs={2}>
          <Skeleton variant="rectangular" width={"100%"}>
            {/* <Typography /> */}
          </Skeleton>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "57%" }} />
          </Skeleton>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoaderCard;
