// import AboutItem from './AboutItem'

// const data  = [
//     {
//         title: 'Personal',
//         details: 'My name is Emily Coleman. I am a Virginia native but currently reside in Michigan. You\'ll often find me outdoors, exploring nature\'s wonders with my wife and daughter. When we\'re not soaking up the sunshine, you\'ll likely find us whipping up delicious meals in the kitchen or cozied up on the couch having a movie night together.'
//     },
//     {
//         title: 'Professional',
//         details: 'My professional background is primarily in shipping and receiving management. However, I am actively transitioning my career trajectory towards web development. This shift follows the successful completion of the Full Stack Web Developer Bootcamp offered by edX through Michigan State University. During the bootcamp, I acquired comprehensive skills and knowledge in modern web development practices. '
//     },
// ]
// const About = () => {
//     return (
//         <div id='about' className="font-amatic-sc-regular font-bold max-w-[1040px] m-auto md:pl-20 p-4 py-16">
//             <h1 className="text-4xl font-bold text-center text-[#483C32]">About Me</h1>
//             {data.map((item, idx)=>(
//                 <AboutItem 
//                 key={idx} 
//                 title={item.title} 
//                 details={item.details} 
//                 />
//             ))}

//         </div>
//     )
// }

// export default About

const About = () => {
    return (
        <div id="about" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-10 mt-10"> 
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-52" src='/images/studio.jpg' alt="Indy's Studio"></img>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-[#483C32] font-semibold text-decoration-line: underline">ABOUT ME</div>
                    
                    <p className="mt-2 text-[#483C32]"> 
                        Welcome! My name is Indy Fitzgerald. I am a photographer that specializes in newborn, children and family photos. On my off days, I love spending time with my family. Please feel free to reach out for availability I would love to meet you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
