"use server"
import ImageKit from "imagekit";
import { buffer } from "stream/consumers";


const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});


export const shareAction = async (formData: FormData) => {
   const file = formData.get("file") as File;
   // const description = formData.get("description") as string;
     
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation:{
         pre: "w-600"
      }
    },function(error, result) {
      if(error) console.log(error);
      else console.log(result);
    })
  }