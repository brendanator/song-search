import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import convertTime from "../../../utils/convertTime";
import CardSongDetailsProps from "./interface";

const CardSongDetails = ({ songDetail }: CardSongDetailsProps) => {
    if (!songDetail) {
        return null;
    }

    return (
        <div>
            <Card
                sx={{
                    display: "flex",
                    margin: "auto",
                    maxWidth: 550,
                    background: "#fffdfccc",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent
                        sx={{
                            flex: "1 0 auto",
                            alignContent: "center",
                            alignItems: "center",
                            padding: "30px",
                        }}
                    >
                        <Typography
                            component="div"
                            variant="h5"
                            sx={{ fontWeight: "bold" }}
                        >
                            ALBUM: {songDetail.album}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            Artista: {songDetail.artist}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            Titulo: {songDetail.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            Duracion: {convertTime(songDetail.duration)}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", margin: "auto" }}>
                        <IconButton
                            sx={{
                                borderRadius: "25px",
                                height: "50px",
                                marginBottom: "20px",
                            }}
                            onClick={() => {
                                window.location.href = songDetail.songUrl;
                            }}
                        >
                            <p>Escuchar</p>
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    src={songDetail.imageUrl}
                />
            </Card>
        </div>
    );
};

export default CardSongDetails;