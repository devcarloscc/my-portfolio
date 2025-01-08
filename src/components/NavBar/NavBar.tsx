import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(() =>({
        display: "flex",
        justifyContent: "center"
    }))

    return (
      <>
        <AppBar position="relative">
            <StyledToolBar>
                <MenuItem>
                    About
                </MenuItem>
                <MenuItem>
                    Skills 
                </MenuItem>
                <MenuItem>
                    Projects
                </MenuItem>

            </StyledToolBar>
            
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  