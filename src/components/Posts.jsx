import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Checkbox, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
const Posts = () => {
  return (
    <div>
      <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar src="https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" sx={{ bgcolor:"red" }} aria-label="recipe"/>
          
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Kendall"
        subheader="June 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Relationships are like birds. If you hold tightly, they die. If you hold loosely, they fly. But if you hold with care, they remain with you forever.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
 
    </Card>
    </div>
  )
}

export default Posts
