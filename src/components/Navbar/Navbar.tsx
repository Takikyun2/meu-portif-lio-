import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

const Navbar = () => {

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
        <MenuItem>
        About
        </MenuItem>
        <MenuItem>
        Skills
        </MenuItem>
        <MenuItem>
        Projects
        </MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;