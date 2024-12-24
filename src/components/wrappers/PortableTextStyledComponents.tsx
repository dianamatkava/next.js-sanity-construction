import Image from "next/image";
import {v4 as uuidv4} from "uuid";
import {urlFor} from "@/app/ui/urlFor";
import {PortableText} from "next-sanity";
import React from "react";


export default function PortableTextStyledComponents ({content}) {
  const myPortableTextStyledComponents = {
    types: {
      image: ({value}) => <Image width={650} height={300} alt={uuidv4()} src={urlFor(value)}/>,
      callToAction: ({value, isInline}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
    list: {
      bullet: ({children}) =>
        <ul className="space-y-3 gap-2 py-4 px-2">
          {React.Children.map(children, (child, index) => (
            <li className="text-body-color dark:text-dark-6 flex text-base items-center">
              <span className="text-[#6F1D1B] mr-2.5 mt-0.5">
                 <svg
                   width="20"
                   height="20"
                   viewBox="0 0 20 20"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                    <path
                      d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                      fill="currentColor"
                    />
                 </svg>
              </span>
              {child}
            </li>
          ))}
      </ul>,
      number: ({children}) => (
        <ol className="space-y-3 gap-2 py-4 px-2">
          {React.Children.map(children, (child, index) => (
            <li className="text-body-color dark:text-dark-6 flex text-base gap-3">
              <span
                className="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
              >
                <span
                  className="bg-[#6F1D1B] absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"
                ></span>
                {index + 1}
              </span>
              {child}
            </li>
          ))}
        </ol>
      ),
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },

    block: {
    h4: ({ children }) => (
      <h4 className="text-sm font-bold">
        {children}
      </h4>
    ),
  },
  }

  return (
    <PortableText value={content} components={myPortableTextStyledComponents}/>
  )
}