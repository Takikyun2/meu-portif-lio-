import { styled } from "@mui/system";
import { Container, Grid, Typography, Box } from "@mui/material";
import Profile from "../../../../assets/images/ryoyamada.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton.js";


const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: "#292929",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      // <= mobile
      paddingTop: "100px"
    },

    [theme.breakpoints.up('xs')]: {
      // >= mobile
      paddingTop: "0px"
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "75%",
    borderRadius: "10%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              {/*<Box position="relative">
                <Box position="relative" witdh="150%" top="-100" right="0">
                  <AnimatedBackground />
                </Box>
              </Box>*/}
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImg src={Profile} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary" variant="h1" textAlign="center">
                Hello i'm CLayton
              </Typography>
              <Typography
                color="secondary"
                variant="h2"
                textAlign="center"
                pb={2}
              >
                i'm a apprentice developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
