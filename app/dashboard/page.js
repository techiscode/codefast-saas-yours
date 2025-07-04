import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

async function getUser() {
  const session = await auth();
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

export default async function Dashboard() {
  const user = await getUser();
  //console.log(user);

  return (
    <main className="bg-base-200 min-h-screen">
      {/* HEADER */}
      <section className="bg-base-100">
        <div className="bg-base-100 px-5 py-3 flex justify-end">
          <ButtonLogout />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
        <FormNewBoard />

        <div>
          <h1 className="font-extrabold text-xl">
            {user.boards.length} Boards
          </h1>
          <ol>
            <li className="space-y-4">
              {user.boards.map((board) => {
                return (
                  <div key={board._id} className="bg-base-100 p-6 rounded-3xl">
                    {board.name}
                  </div>
                );
              })}
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
