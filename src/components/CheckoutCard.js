import { Box, Grid, Typography } from "@mui/joy"

const CheckoutCard=({flower})=>{
    return (
        
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", flexDirection: "row", marginTop:"15px", marginLeft:"15px", borderBottom: "2px solid black", padding:"10px"}}>
                <Box> 
                <img style={{width:"100%", height:"150px"}} src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"></img>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between",  flexDirection: "row", width:"300px", height:"100%", marginLeft:"10px"}}>
                <Typography level="body1">
                    Nume floare: {flower.name}
                </Typography>
                <Typography level="body1">
                    Pret: {flower.price} RON
                </Typography>
                </Box>
            </Box>
        
    )
}
export default CheckoutCard;