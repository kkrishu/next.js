type ProfilePageProps = {
    params: Promise<{ name: string }>;
}

export default  async function ProfilePage({params}:ProfilePageProps){

    const users =[
        {
        id:1,name:"Neha",
        email:"neha.sharma@gmail.com",
        bio:"Ameer Huuu"
        },
        {
        id:1,name:"Rohan",
        email:"rohan.sharma@gmail.com",
        bio:"Buss roji roti chal raha hai "
        },
        {
        id:1,name:"raj",
        email:"raj.sharma@gmail.com",
        bio:"Berojgaar"
        }
]

    const pageParams = await params

    const username = pageParams.name

    const user = users.find(user => user.name.toLocaleLowerCase()== username.toLocaleLowerCase())

    if(!user){
        return(
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                    <h1>USER NOT FOUND !!!</h1>
            </div>
        )
    }
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>{user?.name}'s Profile Page</h1>
            <p>Welcome to {user?.name}'s profile!! Here you can find info about Mee.</p>
            <p>Email:{user?.email}</p>
            <p>Bio:{user?.bio}</p>

        </div>
    )
}