import { Stream, MailOutline, Notifications } from "@mui/icons-material"
import { AppBar, Box, Badge, InputBase, Toolbar, Typography, Avatar, styled, Menu, MenuItem } from "@mui/material"
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
}
);
const SearchBar = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:"5px",
  width: "40%"
}));
const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px", 
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  },

}));

const UserBox = styled(Box)(({theme})=>({
  display:"flex", 
  gap:"10px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
      <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>InstanTweet</Typography>
      <Stream sx={{display:{xs:"block", sm:"none"}}}/>
      <SearchBar>
        <InputBase placeholder="Search..."/>
      </SearchBar>
      <Icons>
      <Badge badgeContent={4} color="error">
       <MailOutline />
      </Badge>
      <Badge badgeContent={2} color="error">
       <Notifications />
      </Badge>
      <Avatar sx={{width:30, height:30}} 
      src="https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      onClick={(e)=>setOpen(true)}
      />
      </Icons>
      <UserBox onClick={(e)=>setOpen(true)}>
      <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Typography variant="span" sx={{fontStyle:"Italic",fontWeight:"Bold"}}>
        Katy
      </Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
