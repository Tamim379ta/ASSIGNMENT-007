import CallBtn from "@/components/ui/Btn";
import Image from "next/image";
import { IoMdArchive } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const DetailsPage = async ({ params, handelcall }) => {

  const { friendId } = await params;

  const res = await fetch("https://assignment-007-eta.vercel.app/data.json", {
    cache: "no-store"
  })
  const data = await res.json()

  const friend = data.find(f => f.id === Number(friendId));

  const { picture, name, days_since_contact, email, next_due_date, goal, bio, tags, status } = friend;

  return (
    <div>

      <div className=" py-10 px-5 sm:px-5 md:px-10 flex flex-col md:flex-row    gap-5">
        <div className=" ">
          <div className="  text-center shadow-xl border border-gray-200 p-5 space-y-3 rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={picture}
                alt={name}
                width={60}
                height={30}
                className='rounded-4xl'
              />
            </div>

            <div className="space-y-3  ">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className={`text-white badge rounded-4xl font-semibold ${status === "overdue" ? "bg-red-400" : status === "on-track" ? "bg-green-800" : "bg-amber-300"}`} >{status}</div>
              <div className='flex gap-2 justify-center'>
                {
                  tags.map((tag, ind) => <span
                    className='badge bg-green-300 py-3 rounded-3xl font-semibold text-black'
                    key={ind}>{tag}</span>)
                }
              </div>
              <div className="text-gray-400">
                <p>{bio}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-2 mt-2">
            <button className="btn">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks</button>
            <button className="btn">
              <IoMdArchive /> Archive</button>
            <button className="btn  text-red-600">
              <MdDeleteOutline /> Delete </button>
          </div>

        </div>


        <div className="flex-1  px-2">

          <div className="grid grid-cols-3  gap-5">

            <div className="flex flex-col md:flex-row gap-5">

              <div className="text-center flex-1  shadow-2xl rounded-2xl py-10  border border-gray-200">
                <h1 className="font-bold text-3xl">{days_since_contact}</h1>
                <p className="text-gray-400">Days Scince Contact</p>
              </div>

              <div className="text-center flex-1  shadow-2xl rounded-2xl py-10 border border-gray-200">
                <h1 className="font-bold text-3xl">{goal}</h1>
                <p className="text-gray-400">Goal(Days)</p>
              </div>

              <div className="text-center flex-1 shadow-2xl rounded-2xl py-10 border border-gray-200">
                <h1 className="font-bold text-3xl">{next_due_date}</h1>
                <p className="text-gray-400">Next Due</p>
              </div>
            </div>


            <div className="shadow-2xl p-5 rounded-2xl border border-gray-300">

              <div className="flex justify-between">
                <h1 className="font-semibold">Relationship Goal</h1>
                <button className="btn">Edit</button>
              </div>

              <div>
                <p className="text-gray-400">Connect every <span className="font-bold text-black">{goal} days</span> </p>
              </div>

            </div>

            <div className="shadow-2xl p-5 border border-gray-300 rounded-2xl">
              <h1 className="font-semibold">Quick Check-In</h1>

              <CallBtn friend={friend}/>
            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default DetailsPage;