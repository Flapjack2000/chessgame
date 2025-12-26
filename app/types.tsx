export type Color = "white" | "black";

export type PieceName = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";

export class Piece {
  svgPath: string;
  constructor(public color: Color, public name: PieceName) {
    this.svgPath = `pieces/${name}-${color[0]}.svg`
  }
}

export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Position = (Piece | null)[][];


class BoardState { }