"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 md:p-8 border border-gray-100 dark:border-gray-700 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-red-100 dark:text-red-900/30 select-none">
          &ldquo;
        </div>

        <div className="flex flex-col gap-4 justify-between h-full z-10 relative">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-base text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start mt-2 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-700 shadow-md overflow-hidden flex-shrink-0 ring-2 ring-red-50 dark:ring-gray-800 group-hover:ring-red-100 dark:group-hover:ring-red-900/10 transition-all duration-300">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500">
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial } 