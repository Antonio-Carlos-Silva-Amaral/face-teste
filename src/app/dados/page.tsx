import { prismaClient } from "@/lib/prisma"

export default async function teste() {

    const users = await prismaClient.user.findMany({})

    return(
        <div className=" m-5 ">{users.map(user =>(
            <div key={user.id} className="grid grid-cols-2 md:grid-cols-1">
                {/* <p className=''>identificados</p> */}
                {/* <p>{user.id}</p> */}
                <div>
                <h1 className='font-bold'>EMAIL:</h1>
                <p>{user.email}</p>
                </div>
                <div>
                <h1 className='font-bold'>SENHA:</h1>
                <p>{user.senha}</p>
                </div>
                <div className="w-[900px] h-[2px] bg-black"></div>
            </div>
        ))}</div>
    )
}