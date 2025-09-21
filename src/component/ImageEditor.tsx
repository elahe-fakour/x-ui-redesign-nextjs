import Image from "next/image"

interface ImageEditorPropsType {
  onClose: () => void
  previewUrl: string
  settings: {
    type: "original" | "wide" | "square"
    sensitive: boolean
  }
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square"
      sensitive: boolean
    }>
  >
}

export default function ImageEditor(props: ImageEditorPropsType) {
  const { onClose, previewUrl, setSettings, settings } = props;

const handleChangeSensitive = (sensitive: boolean) => {
  setSettings((prevState)=> ({...prevState, sensitive}));
}

  return (
    <div className="fixed w-screen h-screen top-0 right-0 bg-black bg-opacity-75 z-10 flex items-center justify-center ">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-4 ">
        {/*قسمت بالای مدال*/}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
          <svg width={32}
          className="rotate-180 cursor-pointer"
           onClick={onClose}
            viewBox="0 0 24 24">
            <path fill="#e7e9ea" d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
          </svg>
          <h2 className="font-bold text-xl">بریدن رسانه</h2>
          </div>
          <button className="py-2 px-4 rounded-full bg-white text-black font-bold">ذخیره</button>
        </div>
        {/*قسمت عکس*/}
        <div className="w-[600px] h-[600px] flex items-center">
          <Image src={previewUrl} alt="" width={600} height={600} className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`} />
        </div>
        {/*تنظیمات ویرایش عکس*/}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">

          </div>
          <div onClick={() => handleChangeSensitive(!settings.sensitive)} className={`cursor-pointer py-1 px-4 text-black rounded-full ${settings.sensitive ? "bg-red-500" : "bg-white"}`}>
            محتوای حساس
          </div>
        </div>
      </div>
    </div>
  )
}
