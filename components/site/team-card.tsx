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

export function TeamCard({
  name,
  role,
  description,
  image,
  initials,
}: TeamCardProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(image) && !imageError;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] hover:border-emerald/40">
      
      {/* Large Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-emerald-50">
        {showImage ? (
          <Image
            src={image as string}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-emerald font-bold text-5xl">
            {initials}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center text-center gap-1.5 px-5 py-5">
        <h4 className="text-[17px] sm:text-[18px] font-semibold text-navy transition-colors duration-300 group-hover:text-emerald">
          {name}
        </h4>

        <p className="text-[13px] font-medium text-warmgray">
          {role}
        </p>

        {/* Description */}
        <p className="mt-2 text-[13px] sm:text-[14px] text-warmgray leading-relaxed">
          {description}
        </p>


       
      </div>
    </div>
  );
}