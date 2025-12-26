import { Color, Piece, Position } from "@/app/types"

interface SquareProps {
  bgColor: Color,
  piece: Piece | null
  position: [number, number]
}

export function Square({ bgColor, piece, position }: SquareProps) {
  return (
    <div
      className={`aspect-square flex items-center justify-center ${bgColor === "white" ? "bg-[var(--white)]" : "bg-[var(--black)]"}`}>
      {piece &&
        <img
          className="select-none cursor-pointer object-contain"
          src={piece.svgPath}
          draggable={false}
          alt={piece.color + " " + piece.name}
        />
      }
    </div>
  );
}

interface BoardProps {
  state: Position
  colorOnBottom: Color
}

export function Board({ state, colorOnBottom }: BoardProps) {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((str) => (str.toUpperCase()));
  const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const displayFiles = colorOnBottom === "white" ? files : [...files].reverse();
  const displayRanks = colorOnBottom === "white" ? [...ranks].reverse() : ranks;

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col">
            {displayRanks.map((rank) => (
              <div key={rank} className="flex-1 w-6 flex items-center justify-center text-xs font-bold text-gray-400">
                {rank}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-8 aspect-square w-full max-w-full max-h-full border border-gray-800">
            {colorOnBottom === "white" ?
              state.map((row, rowIndex) =>
                row.map((piece, colIndex) => {
                  const color = (((rowIndex + colIndex) % 2) === 0 ? "white" : "black") as Color;
                  return <Square key={`${rowIndex}-${colIndex}`} bgColor={color} piece={piece} position={[colIndex, rowIndex]} />;
                })
              )
              :
              state.toReversed().map((row, rowIndex) =>
                row.toReversed().map((piece, colIndex) => {
                  const actualRowIndex = 7 - rowIndex;
                  const actualColIndex = 7 - colIndex;
                  const color = (((actualRowIndex + actualColIndex) % 2) === 0 ? "white" : "black") as Color;
                  return <Square key={`${rowIndex}-${colIndex}`} bgColor={color} piece={piece} position={[colIndex, rowIndex]} />;
                })
              )
            }
          </div>
        </div>

        <div className="flex">
          <div className="w-6" />
          <div className="grid grid-cols-8 w-full">
            {displayFiles.map((file) => (
              <div key={file} className="flex items-center justify-center text-xs font-bold text-gray-400 h-6">
                {file}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}