import { styled } from "@mui/material/styles"; 
import Avatar from "../../../../images/avatar.jpeg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; 
import { Typography } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../../components/StyledButton/StyledButton";

function Hero() {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up('xs')] : {
            backdropColor: "red",
        },
        [theme.breakpoints.up('md')] : {

        }
    }));

    const StyledImg = styled("img")(({theme}) => ({
        width: "75%",
        display: "flex",
        margin: "10px auto",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));
    
    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container display="flex" alignContent="center" spacing={2}>
                    <Grid item xs={12} md={5}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography pt={3}  textAlign="center" color="secondary" variant="h1">Carlos Eufrásio</Typography>
                        <Typography textAlign="center" color="secondary" variant="h3" pb={3}>Desenvolvedor FrontEnd</Typography>
                         
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>    
                                <StyledButton onClick={() => console.log("Download")}>
                                    <FileDownloadIcon/>Download CV
                                </StyledButton>                
                            </Grid>
                            <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <StyledButton onClick={() => console.log("Contact")}>
                                    <MailOutlineIcon /> Contact me
                                </StyledButton>
                            </Grid>
                        </Grid> 

                        
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    );
}

export default Hero;
