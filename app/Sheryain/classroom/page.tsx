import FilterUser from "@/components/FilterUser";

export default async function classroom(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>Classroom</h1>
            <p>This is classroom page of application!! </p>
            <FilterUser users={users}/>

        </div>
    )
}