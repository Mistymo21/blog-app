import { NextResponse } from "next/server"
import connect from "@/utilis/d"
import Posts from "@/models/Posts"
export  const GET = async (request) => {
    try {

        await connect()

        const posts = await Posts.find()

        return new NextResponse(JSON.stringify(posts), {status:200})
        
    } catch (error) {
        return new NextResponse("Database Error", {status : 500});
        
    }
    

    
}