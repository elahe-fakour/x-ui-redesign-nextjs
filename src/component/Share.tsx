"use client"

import React, { ChangeEvent, useState } from "react"
import Image from "./Image"
import NextImage from "next/image"
import { shareAction } from "@/actions"
import ImageEditor from "./ImageEditor"

export default function Share() {
  const [media, setMedia] = useState<File | null>(null)
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean
  }>({
    type: "original",
    sensitive:false,
  })

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }

  const previewUrl = media ? URL.createObjectURL(media) : null;

  return (
    <form action={shareAction} className="p-4 flex gap-4">
      {/* لوگو  */}
      <div>
        <div className=" relative w-10 h-10 rounded-full overflow-hidden">
          <Image path={"general/avatar.png"} alt="devwitheli" w={100} h={100} tr={true} />
        </div>
      </div>
      {/* بقیعه */}
      <div className="flex-1 flex flex-col gap-4">
        <input name="description" type="text" placeholder="چه خبر؟" className="bg-transparent outline-none placeholder:text-textGray text-xl" />
       {/* پیش نمایش عکس */}
           {
            previewUrl ? <div className="relative rounded-xl overflow-hidden">
                <NextImage src={previewUrl} alt=""  width={600} height={600}/>
            <div onClick={() => setEditorOpen(true)} className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer">
              ویرایش
            </div>
            </div> : null
           }
        {
          editorOpen && previewUrl ? (
            <ImageEditor onClose={() => setEditorOpen(false)}
             previewUrl={previewUrl}
             settings={settings}
             setSettings={setSettings}
             />
          ) : null
        }
  
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input name="file" className="hidden" id="file" type="file" onChange={handleFileChange} />
           
            <label htmlFor="file">
              <Image path="icons/image.svg" alt="" w={20} h={20} className="cursor-pointer" />
            </label>
            <Image path="icons/gif.svg" alt="" w={20} h={20} className="cursor-pointer" />
            <Image path="icons/poll.svg" alt="" w={20} h={20} className="cursor-pointer" />
            <Image path="icons/emoji.svg" alt="" w={20} h={20} className="cursor-pointer" />
            <Image path="icons/schedule.svg" alt="" w={20} h={20} className="cursor-pointer" />
            <Image path="icons/location.svg" alt="" w={20} h={20} className="cursor-pointer" />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">پست کردن</button>
        </div>
      </div>
    </form>
  )
}
