import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/icons/EventNote";
import Box from "@material-ui/core/Box";

const connect = () => {
  return (
    <Container maxWidth="md">
      <Card>
        <Box textAlign="center">
          <CardContent>
            <Icon color="secondary" />
            <Typography textAlign="center" variant="h4">
              Content Coming Soon
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default connect;