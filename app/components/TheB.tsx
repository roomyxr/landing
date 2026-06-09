'use client';

export default function theb() {
    return (
        <div 
          className="w-screen mx-auto "
        >
            <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-[-10px] tracking-tighter pl-10 lg:pl-40">Backed by the Best:</h3>
            <div className=" bg-primary ">
                <div className="max-w-screen-2xl mx-auto gap-12 p-6 lg:p-8">
                    <p className="text-xl text-white/80 font-medium leading-relaxed italic">Roomy is a verified XR project supported by: </p>
                     <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center text-center p-6 lg:p-8 gap-6">
                        <div className="group">
                            <h4 className="font-extrabold text-white text-xl flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center"> 
                                <span className="text-xl text-white/80 font-medium leading-relaxed italic">
                                Accelerated by:
                                </span> 
                                <span>Start Up Club Skopje</span>
                            </h4>
                        </div>
                        <div className="group">
                            <h4 className="font-extrabold text-white text-xl flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center"> 
                                <span className="text-xl text-white/80 font-medium leading-relaxed italic">
                                    Sponsored by:
                                </span>
                                <span>In 3D Technology</span>
                            </h4>
                        </div>
                    </div>
                    <div className="group">
                        <p className="text-xl text-white/80 font-medium leading-relaxed italic">
                            <span className="inline-block text-teal-300 group-hover:scale-125 transition-transform duration-300">
                            ✔
                            </span> 
                            {" "}We're combining high end tech with professional mentorship to build your ultimate digital sanctuary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}