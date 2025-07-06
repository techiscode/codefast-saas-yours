import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";

const getBoard = async (boardId) => {
  await connectMongo();
  const board = await Board.findById(boardId);

  if (!board) {
    redirect("/");
  }

  return board;
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;

  //get board with objectId 'boardId'
  //return <main>A dynamic page</main>;
  const board = await getBoard(boardId);
  return <main>{board.name}(public)</main>;
}
