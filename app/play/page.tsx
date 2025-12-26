"use client"

import { Piece, PieceName, Color, Position, Rank, File } from "../types";
import { Board } from "../Board";
import { Plus, Flag, Handshake, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { initialBoardState } from "../helpers"



// User database schema
// - name, username, email, uuid, circle color, board theme, piece theme

// Game schema
// - players' ids, timestamp, winner, PGN, final FEN

export default function Home() {

    const state = initialBoardState();

    // change to the player's color
    const [colorOnBottom, setColorOnBottom] = useState<Color>("white")
    const flipBoard = () => {
        setColorOnBottom(colorOnBottom == "white" ? "black" : "white");
    }

    const PlayerProfile = ({ username, color }: { username: string, color: string }) => (
        <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
                <span className="text-xl font-bold">
                    {username[0].toUpperCase()}
                </span>
            </div>
            <div>
                <h3 className="font-semibold">{username}</h3>
                <p className="text-sm text-gray-400">Rating: 1500</p>
            </div>
        </div>
    );

    const GameButtons = () => (
        <>
            <button
                className="text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition cursor-pointer text-white">
                <Plus className="w-7 h-7" />
                <span className="text-md">New Game</span>
            </button>

            <button
                className="text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition cursor-pointer text-white"
                onClick={flipBoard}
            >
                <ArrowUpDown className="w-7 h-7" />
                <span className="text-md">Flip Board</span>
            </button>

            <button
                className="text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition cursor-pointer text-white">
                <Handshake className="w-7 h-7" />
                <span className="text-md">Offer Draw</span>
            </button>

            <button
                className="text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition cursor-pointer text-white">
                <Flag className="w-7 h-7" />
                <span className="text-md">Resign</span>
            </button>
        </>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row md:h-screen">
            <div className="md:w-64 p-4 md:p-6 flex md:flex-col gap-4 border-b md:border-b-0 md:border-r border-gray-700 justify-around md:justify-start">
                <PlayerProfile username={"flapjackzach"} color="bg-blue-500" />
                <PlayerProfile username={"ViaNuke"} color="bg-red-500" />
            </div>

            <div className="flex-1 flex items-center justify-center p-4 min-h-0 min-w-0">
                <div className="w-full h-full max-w-[min(600px,100%)] max-h-[min(600px,100%)]">
                    <Board colorOnBottom={colorOnBottom} state={state} />
                </div>
            </div>

            <div className="md:w-64 p-4 md:p-6 gap-3 border-t md:border-t-0 md:border-l border-gray-700 grid grid-cols-2 md:grid-cols-1">
                <GameButtons />
            </div>
        </div>
    );
}