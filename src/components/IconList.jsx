import * as React from 'react';
import { Typography, Box, Grid, List, ListItem, ListItemIcon } from '@mui/material';


export default function IconList(props) {
    return (
        //"BOX" SERVES AS THE CONTAINER OR THE WRAPPER
        <Grid item md={6}>
            <Box sx={{ width: "70%", margin: "0 auto", padding: "0.5rem 0" }}>
                <Typography
                    sx={{
                        textAlign: "left",
                        fontFamily: "Poppins, serif",
                        fontWeight: "700",
                    }}
                    variant="h5"
                >
                    {props.title}
                </Typography>

                <List>
                    {props.items.map((item) => (
                        <ListItem>
                            <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                            <Typography
                                variant="body1"
                                fontSize="small"
                                sx={{ textAlign: "left", fontFamily: "Poppins, serif" }}
                            >
                                {item.text}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>
    );
}