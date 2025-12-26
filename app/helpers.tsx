import { Color, Piece, PieceName, Rank, File, Position } from "./types";

export function indexToRankFile(row: number, col: number): [Rank, File] {
    const rank: Rank = (8 - row) as Rank;
    const file: File = String.fromCharCode(97 + col) as File;
    return [rank, file];
}

export function randomPiece(): Piece {
    const colors: Color[] = ["white", "black"];
    const names: PieceName[] = ["king", "queen", "rook", "bishop", "knight", "pawn"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    return new Piece(color, name);
}

export function emptyBoardState(): Position {
    // Board full of nulls
    const state: Position = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));
    return state;
}

export function initialBoardState(): Position {
    const state: Position = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));

    // Pawns
    for (let i = 0; i < 8; i++) {
        state[1][i] = new Piece("black", "pawn");
        state[6][i] = new Piece("white", "pawn");
    }

    // Rooks
    state[0][0] = new Piece("black", "rook");
    state[0][7] = new Piece("black", "rook");
    state[7][0] = new Piece("white", "rook");
    state[7][7] = new Piece("white", "rook");

    // Knights
    state[0][1] = new Piece("black", "knight");
    state[0][6] = new Piece("black", "knight");
    state[7][1] = new Piece("white", "knight");
    state[7][6] = new Piece("white", "knight");

    // Bishops
    state[0][2] = new Piece("black", "bishop");
    state[0][5] = new Piece("black", "bishop");
    state[7][2] = new Piece("white", "bishop");
    state[7][5] = new Piece("white", "bishop");

    // Queens
    state[0][3] = new Piece("black", "queen");
    state[7][3] = new Piece("white", "queen");

    // Kings
    state[0][4] = new Piece("black", "king");
    state[7][4] = new Piece("white", "king");

    return state;
}