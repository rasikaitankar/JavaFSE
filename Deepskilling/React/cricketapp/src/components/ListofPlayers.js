import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Sachin", score: 90 },
        { name: "Sehwag", score: 65 },
        { name: "Dravid", score: 80 },
        { name: "Dhoni", score: 55 },
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 60 },
        { name: "Rahul", score: 45 },
        { name: "Hardik", score: 75 },
        { name: "Jadeja", score: 68 },
        { name: "Bumrah", score: 50 },
        { name: "Gill", score: 88 }
    ];

    const lowScorePlayers = players.filter(
        player => player.score < 70
    );

    return (
        <div>

            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    Mr. {player.name} <span>{player.score}</span>
                </p>
            ))}

            <hr />

            <h2>List of Players having Scores Less than 70</h2>

            {lowScorePlayers.map((player, index) => (
                <p key={index}>
                    Mr. {player.name} <span>{player.score}</span>
                </p>
            ))}

        </div>
    );
}

export default ListofPlayers;