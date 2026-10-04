type ProfilePageAgeProps = {
    params: Promise<{ name: string, age: string }>;
}

export default  async function ProfilePage({params}:ProfilePageAgeProps){
    const pageParams = await params

    const username = pageParams.name
    const userage = pageParams.age

    const users= [
        {
        id:1,
        name:"Neha",
        email:"neha.sharma@gmail.com",
        bio:"Ameer Huuu",
        age:22,
        },
        {
        id:1,
        name:"Neha",
        email:"neha.sharma@gmail.com",
        bio:"Ameer Huuu",
        age:23
        },
        {
        id:1,
        name:"Neha",
        email:"neha.sharma@gmail.com",
        bio:"Ameer Huuu",
        age:24
        }
        
    ]
    const user = users.find(user => user.name.toLocaleLowerCase()== username.toLocaleLowerCase() 
                                    && user.age.toString()==userage)


    if(!user){
        return(
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                    <h1>USER NOT FOUND !!!</h1>
            </div>
        )
    }

    return(
            <div>
                <h1> {user?.name}'s profile page </h1>
                <p>Email:{user?.email}</p>
                <p>age:{user?.age}</p>
                <p>Bio:{user?.bio}</p>
            </div>
    )
}
