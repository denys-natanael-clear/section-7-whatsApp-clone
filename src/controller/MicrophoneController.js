import { ClassEvent } from "../util/ClassEvent"

export class MicrophoneController extends ClassEvent{

    constructor () {

        super()

        this._mimeType = 'audio/webm';
        this._available = false;

        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {

            this._available = true
            this._stream = stream

            this.trigger('play', this._stream)


        }).catch(err => {
            console.error(err)
        })

    }

    stop () {

        this._stream.getTracks().forEach(track => {
            track.stop()
        })

    }

}