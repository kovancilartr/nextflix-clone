import serverAuth from "../../libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '../../libs/prismadb'


export default async function handler (req : NextApiRequest, res: NextApiResponse){

    try{
        if(req.method !== 'GET')
        {
            return res.status(405).end();
        }

         const  {currentUser} =  await serverAuth(req, res);

         const favoriMovie = await prismadb.movie.findMany({
            where : {
                id: {
                    in:currentUser?.favoriteIds,
                }
            }
         })

         return res.status(200).json(favoriMovie);

       
       
    
    }
    catch(error){
        console.log(error);
        return res.status(500).end();
    }


}