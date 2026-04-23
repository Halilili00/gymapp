import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={<Skeleton animation="wave" height={10} width="80%" />}
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" width="80%" />
      </CardContent>
      <CardActions>
        <Skeleton animation="wave" width="30%" />
      </CardActions>
    </Card>
  );
};

export default Loading;
