import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

  
 export default async function ServiceDetailsPage({params}) {
  const p = await params
  const serviceCollection = await dbConnect(collectionNamesObj.servicesCollection)
  const data = await serviceCollection.findOne({_id:new ObjectId(p.id)})
   return (
     <div>
       <p>{JSON.stringify(p)}</p>
       <p>{JSON.stringify(data)}</p>
     </div>
   )
 }
 