//npm i ytdl-core
const fs = require('fs');
var ytdl = require("ytdl-core")


module.exports = class TaskController {

    static async paginaInicial ( req , res ) {
        res.render('pages/form')
    }



    static async getLink ( req , res){
        const URL = req.body.link;

        console.log(URL);

        const URLstring = URL.toString();
        try   {
            const videoInfo = await ytdl.getInfo(URLstring);
            const videoReadableStream = ytdl(URLstring, {
              quality: 'highest',
            });
            res.setHeader("Content-Disposition", `attachment; filename="${videoInfo.videoDetails.title}.mp4"`);
            res.setHeader('Content-Type', 'video/mp4');
            videoReadableStream.pipe(res);
          } catch (err) {
            console.log(err)
            res.status(500).send('Error occurred while downloading the video');

        }
        
        
    }
}