import express from "express"
import * as playlistController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get("/owned", playlistController.getOwnedPlaylist);
playlistRoute.get("/", playlistController.getUserPlaylists); // get all accessible playlist
playlistRoute.get("/:playlistId", playlistController.getPlaylistById);
playlistRoute.put("/:playlistId", playlistController.updatePlaylist);
playlistRoute.post("/:playlistId/track/:trackId", playlistController.addTracktoPlaylist)
playlistRoute.delete("/:playlistId/track/:playlistTrackId", playlistController.deleteTrackFromPlaylist)

export default playlistRoute;