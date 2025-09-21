import React from "react"
import Image from "./Image"
import Postinfo from "./Postinfo"
import PostInteractions from "./PostInteractions"

export default function Post() {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/*نوع پست*/}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path 
          fill="#71767b"
          d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" />
        </svg>
        <span>Elahe باز پست کرد</span>
      </div>
      {/*محتوای پست*/}
      <div className="flex gap-4">
        {/*لوگو */}
        <div className=" relative w-10 h-10 rounded-full overflow-hidden">
          <Image path={"general/avatar.png"} alt="devwitheli" w={100} h={100} tr={true} />
        </div>
        {/*محتوا */}
        <div className="flex-1 flex flex-col gap-2 ">
          {/* بالا*/}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-bold text-md">Elahe Fakour</h2>
              <span className="text-textGray ">@devwitheli</span>
              <span className="text-textGray ">1 روز پیش</span>
            </div>
            <Postinfo />
          </div>
          {/*متن پست و رسانه */}
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis voluptatibus hic ipsa pariatur nostrum quisquam adipisci quasi sed obcaecati? Et voluptate totam pariatur beatae ab corrupti velit minus optio.</p>
          <Image path="https://ik.imagekit.io/701xnikjg/general/post.jpg?updatedAt=1756206982843" alt="" w={600} h={600} />
          <PostInteractions />
        </div>
      </div>
    </div>
  )
}
