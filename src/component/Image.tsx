// مسیر فایل: src/component/Image.tsx (یا .js)

"use client"

import React from "react"
import { Image as ImageKitComponent } from "@imagekit/next"

interface ImageProps {
  path: string,
  w?: number,
  h?: number,
  alt: string,
  className?: string,
  tr?: boolean,
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

export default function Image(props: ImageProps) {
  const { path, alt, className, h, w, tr } = props;

  // آبجکت transformation را به صورت شرطی می‌سازیم
  const transformationProps = tr ? {
    transformation: [
      {
        width: `${w}`,
        height: `${h}`,
      }
    ]
  } : {};

  return (
    <ImageKitComponent
      urlEndpoint={urlEndpoint}
      src={path}
      alt={alt}
      className={className}
      // کلید حل مشکل: width و height همیشه باید به عنوان پراپ اصلی ارسال شوند
      width={w}
      height={h}
      // پراپرتی transformation را فقط در صورت نیاز با استفاده از spread operator اضافه می‌کنیم
      {...transformationProps}
    />
  )
}