import Portfolio1 from '../assets/porfolio/portfolio-1.png'
import Portfolio2 from '../assets/porfolio/portfolio-2.png'
import Portfolio3 from '../assets/porfolio/portfolio-3.jpg'
import Portfolio4 from '../assets/porfolio/portfolio-4.png'



function Portfolio() {
    return (
        <section id="portfolio" className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
            <h3 className="text-2xl text-[#C1C1C1]">PORTFOLIO</h3>
            <h3 className="text-[56px] font-bold text-white leading-[1]">My Recent Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-[51px]">
                <div className="grid gap-4" >
                    <a href="" target="_blank" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" 
                        src={Portfolio1} alt="" />
                    </a>
                </div>
                <div className="grid gap-4" >
                    <a href="" target="_blank" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio2} alt="" />
                    </a>
                </div>
                <div className="grid gap-4" >
                    <a href="" target="_blank" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio3} alt="" />
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                    <a href="" target="_blank" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio4} alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;