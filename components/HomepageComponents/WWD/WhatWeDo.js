import WhatWeDoCard from './WWDCard';
import data from './data';

export default function WhatWeDo(){
    return (
        <section className="ml-52 mb-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="h-28 w-1 bg-accent"></div>
                <div>
                    <h2 className='font-al text-5xl font-bold mb-0'>What We Do</h2>
                    <p className='text-lg max-w-xl font-light font-la'>We help businesses to find their voice and build a digital identity that is worth a pretty penny—and the ugly one too. </p>
                </div>
            </div>
            <div className="flex items-center gap-16">
                {data && data.map((item) => (
                    <WhatWeDoCard key={item.id} item={item}/>
                ))}
            </div>
        </section>
    )
};