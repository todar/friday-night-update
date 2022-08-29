  
/**
 * This is the main homepage for Friday Night Church. The goal of this page
 * is to display our main verses and any call to action (none at this time).
 * Mostly, this app is about making the songbook digital.
 */
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const sectionStyle = {
  // backgroundColor: "rgb(31, 32, 35)",
  // background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./showcase.jpg")`,
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // color: "#fff",
  // marginTop: "-2.5rem",
  // height: "100vh"
};

const HomePage = () => {
  return (
    <section style={sectionStyle}>
      <Container maxWidth="md">
        <Box py={4} >
          <Box mb={2}display="flex" justifyContent="center">
            <Typography color="textPrimary" variant="h2">Friday Night Fellowship</Typography>
          </Box>
          <Card color="primary">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                1 Corinthians 14:26
              </Typography>
              <Typography variant="body1" gutterBottom>
                "What is the outcome then, brethren? When you assemble, each one
                has a psalm, has a teaching, has a revelation, has a tongue, has
                an interpretation. Let all things be done for edification."
              </Typography>
              <Typography variant="caption" gutterBottom>
                New American Standard Bible
              </Typography>
            </CardContent>
          </Card>
          <Box mt={2}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  John 13:35
                </Typography>
                <Typography variant="body1" gutterBottom>
                  "By this all men will know that you are My disciples, if you
                  have love for one another."
                </Typography>
                <Typography variant="caption" gutterBottom>
                  New American Standard Bible
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default HomePage;