import { AppBar, Button, Toolbar } from "@material-ui/core";

export const Navbar = () => {
  return (
    <nav>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Game</p>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};
