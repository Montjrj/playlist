import express from 'express'
import playlist from './db/playlist.js'

const app = express(); 

app.route("/").get((req, res) => {
    res.send("You've reached the Playlist API!"); 
})

app.route("/playlist").get((req, res) => {
    res.send(playlist); 
})

app.route("/playlist/:index").get((req,res) => {
    let {index} = req.params; 
    index = Number(index) 
    let song = playlist[index]
    if(!song){
        return res.status(404).send ("That song does not exist in the playlist.");
    }
    res.send (song); 


})

export default app; 


