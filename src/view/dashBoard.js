import React from "react";
import { Box, Typography, Card, CardContent, Avatar, IconButton, Grid, Button, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Dashboard() {
  return (
    <Box sx={{ backgroundColor: "#1E1E2F", minHeight: "100vh", padding: 2 }}>
      <Grid container spacing={2}>
        {/* Coluna Esquerda */}
        <Grid item xs={3}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "#FFF", fontWeight: "bold", marginBottom: 1 }}>Newest and Recent</Typography>
            <Card sx={{ backgroundColor: "#2C2C3A", padding: 2 }}>
              <Typography sx={{ color: "#FFF" }}>Find the latest update</Typography>
            </Card>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "#FFF", fontWeight: "bold", marginBottom: 1 }}>Popular Tags</Typography>
            <Card sx={{ backgroundColor: "#2C2C3A", padding: 2 }}>
              <Typography sx={{ color: "#FFF" }}>#javascript</Typography>
              <Typography sx={{ color: "#FFF" }}>#design</Typography>
            </Card>
          </Box>
        </Grid>

        {/* Coluna Central */}
        <Grid item xs={6}>
          {/* Input e botão */}
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#2C2C3A",
                padding: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#FFF" }}>Share what's on your mind...</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FF6F00", marginLeft: 2 }}
            >
              Create Post
            </Button>
          </Box>

          {/* Posts */}
          {[1, 2, 3].map((post) => (
            <Card sx={{ backgroundColor: "#2C2C3A", marginBottom: 2 }}>
              <CardContent>
                <Typography sx={{ color: "#FFF", fontWeight: "bold" }}>
                  Post Title {post}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                  <Avatar sx={{ marginRight: 1 }}>P</Avatar>
                  <Typography sx={{ color: "#AAA" }}>Username • 3 days ago</Typography>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                  <Typography sx={{ color: "#FFF" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <IconButton>
                      <Badge badgeContent={4} color="error">
                        <FavoriteIcon sx={{ color: "#FF6F00" }} />
                      </Badge>
                    </IconButton>
                    <IconButton>
                      <CommentIcon sx={{ color: "#FFF" }} />
                    </IconButton>
                    <IconButton>
                      <VisibilityIcon sx={{ color: "#FFF" }} />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>


        {/* Fim da coluna do meio */}
        {/* Coluna Direita */}
        <Grid item xs={3}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "#FFF", fontWeight: "bold", marginBottom: 1 }}>Meetups</Typography>
            <Card sx={{ backgroundColor: "#2C2C3A", padding: 2 }}>
              <Typography sx={{ color: "#FFF" }}>UIHUT - Crunchbase Company Profile</Typography>
            </Card>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "#FFF", fontWeight: "bold", marginBottom: 1 }}>Podcasts</Typography>
            <Card sx={{ backgroundColor: "#2C2C3A", padding: 2 }}>
              <Typography sx={{ color: "#FFF" }}>Selling a Business</Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}