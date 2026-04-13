
const DetailsPage = async ({ params }) => {

  const { friendId } = await params;

  const res = await fetch("http://localhost:3000/data.json")
  const data = await res.json()

  const friend = data.find(f => f.id === Number(friendId))

  console.log(friend)


  return (
    <div>

      <h1>{friend.name}</h1>

    </div>
  );
};

export default DetailsPage;