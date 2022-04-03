import * as React from 'react';
import { useState } from 'react';
import { Box,Typography,Grid,InputLabel,MenuItem,FormControl,Select,Badge,Card,CardContent,
  CardMedia, Rating, Stack, Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CopyrightIcon from '@mui/icons-material/Copyright';

const myStyle = {
  padding: "0px 24px 0px 24px",
  margin: "48px 47.5px",
  fontFamily: "Sans-Serif"
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function OutlinedCard() {

  const [title, setTitle] = useState("Add to Cart")
  const [badgeContent, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(badgeContent + 1)
    setTitle("Remove from Cart")
  }

  const handleDecrement = () => {
    setValue(badgeContent - 1)
    setTitle("Add to Cart")
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Grid>
          <Typography sx={{ padding: '25px', minWidth: 100 }}>Start Bootstrap</Typography>
        </Grid>
        <Grid>
          <Typography sx={{ minWidth: 100 }}>Home</Typography>
        </Grid>
        <Grid>
          <Typography sx={{ minWidth: 100 }}>About</Typography>
        </Grid>

        <Grid sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Shop</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={10}>All Products</MenuItem>
              <MenuItem value={20}>Popular Items</MenuItem>
              <MenuItem value={30}>New Arrivals</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid style={{ marginLeft: "600px" }}>
          <Stack direction="row">
            <Button variant="outlined" style={{ width: "90px" }} >
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={badgeContent} showZero color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Button>
          </Stack>
        </Grid>
      </Box>

      <Grid>
        <header style={{
          backgroundColor: '#212529',
          height: '200px',
          padding: '48px 0px 48px 0px',
          fontWeight: 'bolder'
        }}>

          <div style={myStyle}>
            <div style={{ color: 'white', textAlign: 'center' }}>
              <h1>Shop in Style</h1>
              <p style={{ color: 'grey' }}>With this shop hompage template</p>
            </div>
          </div>
        </header>
      </Grid>


      <Grid container spacing={2} style={{ margin: '10px', padding: '50px', textAlign: 'center', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Grid item xs={3}>
          <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fancy Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$20.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Popular Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$40.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fancy Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$20.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <br />
        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Popular Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$40.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Special Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$20.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Popular Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$40.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fancy Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$20.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ width: 275, height: 325 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"  
                image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="cardImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Sale Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Rating name="full-rating" defaultValue={5} /><br /><br />
                <span style={{fontWeight:'bolder'}}>$20.00</span><br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
              <Button size="small" color="primary">
              {title === "Add to Cart" ? <Button variant="outlined" onClick={() => handleIncrement()}>Add to Cart</Button>
                : <Button variant="outlined" onClick={() => handleDecrement()}>Remove from Cart</Button>}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br /><br /><br />

      <Grid>
        <footer style={{ backgroundColor: '#212529', height: '90px', padding: '18px 0px 18px 0px' }}>
          <div style={myStyle}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <h3>Copyright <CopyrightIcon /> Your Website 2021</h3>
            </div>
          </div>
        </footer>
      </Grid>
    </>

  );
}

//1. buttonName-state variable-initialValue is "Add to cart" on using "!" we get "Remove from cart"
// 2. populate button using conditional rendering if state "buttonName" is "Add to cart" on clicking so update stateValue in the cart. 
// And vice versa for "Remove from cart".