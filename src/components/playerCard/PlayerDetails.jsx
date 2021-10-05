import React, { useEffect, useState } from 'react';
import './PlayerDetails.scss';
import Prout from "../../assets/prout.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaDiscord } from 'react-icons/fa';
import axios from 'axios';

function PlayerDetails(props) {
    const [playerDetails, setPlayerDetails] = useState("");
    const playerId = props.match.params.id

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/players/${playerId}`)
        .then((res) => res.data)
        .then((data) => setPlayerDetails(data))
    }, [])

console.log(playerDetails)

    return (
        <div className="Main">
           <div className="panel">
                <div className="left-panel">
                <img className="joueur" alt={playerDetails.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerDetails.picture_player}/>
                </div>
                <div className="right-panel">
                    <p className="citation">"{playerDetails.quotes}"</p>
                        <div className="name">
                            <p>{playerDetails.firstname}</p>
                            <p>{playerDetails.lastname} </p>
                        </div>

                    <div className="main-info-container"> 

                        <div className="container-1">
                            <img src={Prout} alt="" />
                            <ul>
                                <li className="cardTextStyle">{playerDetails.occupation}</li>
                                <li className="cardTextStyle">{playerDetails.age}</li>
                                <li className="cardTextStyle">{playerDetails.qualities}</li>
                            </ul>
                        </div>

                        <div className="empty">
                        </div>

                        <div className="container-2">
                        <img src={Prout} alt="" />
                        <ul>
                            <li className="cardTextStyle">{playerDetails.palmares}</li>
                            <li className="cardTextStyle">{playerDetails.description_player}</li>
                        </ul>
                        </div>

                    </div>

                    <div className="second-info">
                    <img src={Prout} alt="" />
                    <ul>
                        <li className="cardTextStyle">{playerDetails.other_games}</li>
                        <li className="cardTextStyle">{playerDetails.discord}</li>
                        <div className="gridSocial">
                        <li className={`${playerDetails.twitter}` === "" ? 'empty' : 'full'}><a href={playerDetails.twitter} target="blank_"><FaTwitter/></a></li>
					<li className={`${playerDetails.twitch}` === "" ? 'empty' : 'full'}><a href={playerDetails.twitch} target="blank_"><FaTwitch/></a></li>
					<li className={`${playerDetails.instagram}` === "" ? 'empty' : 'full'}><a href={playerDetails.instagram} target="blank_"><FaInstagram/></a></li>
					<li className={`${playerDetails.facebook}` === "" ? 'empty' : 'full'} ><a href={playerDetails.facebook} target="blank_"><FaFacebookF/></a></li>
					<li className={`${playerDetails.tiktok}` === "" ? 'empty' : 'full'}><a href={playerDetails.tiktok} target="blank_"><FaTiktok/></a></li>
                    </div>
                    </ul>
                    </div>
                </div>
            </div>
           
           <div className="panel">
                <div className="left-panel">
                    
                </div>
            </div>    
        </div>
    )
}

export default PlayerDetails
