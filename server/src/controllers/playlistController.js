import * as playlistModel from '../models/playlistModel.js'

const userId = 26;

export const getOwnedPlaylist = async (req, res) => {
    try {
        const playlist = await playlistModel.getOwnedPlaylist(userId);
        return res.status(200).json({
            success: true,
            data: playlist,
            message: "Playlist retrieved successfully"
        });
    } catch (error) {
        console.log("Error: ",error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}