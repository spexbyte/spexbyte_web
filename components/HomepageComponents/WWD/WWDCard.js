

export default function WhatWeDoCard({item}){
    const {title, body, buttonText} = item;
    return (
        <div className="max-w-xs flex flex-col items-left gap-2">
            <h4 className="font-al mb-0">{title}</h4>
            <p className='font-la font-light text-base mb-0'>{body}</p>
            <p className="text-sm font-la font-bold underline hover:cursor-pointer decoration-accent mb-0">{buttonText}</p>
        </div>
    )
}