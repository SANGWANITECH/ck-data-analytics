"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  initials: string;
}

export function TeamCard({ name, role, description, image, initials }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(image) && !imageError;

  return (
    <div className="card-base card-hover flex flex-col overflow-hidden p-0">
      <div className="relative w-full aspect-[4/5] bg-emerald-tint">
        {showImage ? (
          <Image
            src={image as string}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-emerald font-bold text-5xl">
            {initials}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h4 className="text-[16px] font-semibold text-navy">{name}</h4>
        <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-emerald">
          {role}
        </span>
        <p className="text-[14px] text-warmgray leading-relaxed">{description}</p>
      </div>
    </div>
  );
}