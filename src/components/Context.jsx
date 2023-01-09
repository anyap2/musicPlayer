import { useState } from "react"

export default function Context() {

    const [play, setPlay] = useState(false)
    const [photo, setPhoto] = useState()
    const [show, setShow] = useState(false)
    const [i, setI] = useState(3)
    const [track, setTrack] = useState([
        {
            name: "Left hand free ",
            artist: "Alt-J ",
            src: "/tracks/Alt-J_-_Left_Hand_Free_(Rilds.com).mp3",
            image: "img/SongsImg/alt-j.jpg"

        }
        ,
        {
            name: "Wet dreams",
            artist: "J-Cole ",
            src: "/tracks/J._Cole_-_Wet_Dreams_(Rilds.com).mp3",
            image: "/img/SongsImg/cole.png"

        }
        ,
        {
            name: "Formula ",
            artist: "Labrinth ",
            src: "/tracks/labrinth_-_formula_e_mc_(Rilds.com).mp3",
            image: "img/SongsImg/euphoria---zendaya-.png"

        }
        ,
        {
            name: "My blood",
            artist: "Twenty one pilots ",
            src: "/tracks/Neizvesten_-_twenty_one_pilots_-_My_Blood_(Rilds.com).mp3",
            image: "/img/SongsImg/pilots.webp"

        }
        ,
        {
            name: "Catch hell blues",
            artist: "The white stripes ",
            src: "/tracks/The_White_Stripes_-_Catch_Hell_Blues_(Rilds.com).mp3",
            image: "/img/SongsImg/white_stripes.webp"

        }
        ,
        {
            name: "Love is a bitch",
            artist: "Two feet ",
            src: "/tracks/Two_Feet_-_Love_is_a_Bitch_(Rilds.com).mp3",
            image: "/img/SongsImg/two_feet.jpg"


        }
        ,
        {
            name: "Remember me",
            artist: "Danitsa ",
            src: "/tracks/Danitsa_-_Remember_Me_(Rilds.com).mp3",
            image: "/img/SongsImg/remember.jpg"

        }
        ,
        {
            name: "Bad boys",
            artist: "Inner circle ",
            src: "/tracks/Inner_CIrcle_-_Bad_Boys_Theme_From_Cops_Original_Version_(Rilds.com).mp3",
            image: "/img/SongsImg/boys.jpg"

        }
        ,
        {
            name: "Bang Bang Bang Bang",
            artist: "SohoDolls ",
            src: "/tracks/Sohodolls_-_Bang_Bang_Bang_Bang_(musmore.com).mp3",
            image: "/img/SongsImg/bang_bang.jpg"

        }
        ,
        {
            name: "Loser",
            artist: "Jagwar Twin ",
            src: "/tracks/Jagwar_Twin_-_Loser_(Rilds.com).mp3",
            image: "/img/SongsImg/loser.jpg"

        }
    ]
    )
    return {
        play, setPlay, track, setTrack, photo, setPhoto, show, setShow, i, setI,
    }
}