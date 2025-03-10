import linkedIn from '../assets/linkedin.png';

function Navbar() {
    return (
        <nav className="top-0 z-20 w-full px-[24px] xl:px-0">
            <div className="flex flex-wrap items-center justify-between max-w-[1160px] w-full py-7 mx-auto">
                <div className="lg:text-[28px] text-2xl font-black text-neutral-300">Clarisse.</div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-between items-center  gap-[13px] ">
                        <a href='https://github.com/clariise' className='z-30' target='_blank'> 
                            <div>
                                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0C4.02975 0 0 4.09285 0 9.14092C0 13.4242 2.904 17.0082 6.819 18C6.777 17.8766 6.75 17.7334 6.75 17.5559V15.9936C6.38475 15.9936 5.77275 15.9936 5.619 15.9936C5.00325 15.9936 4.45575 15.7247 4.19025 15.225C3.8955 14.6697 3.8445 13.8203 3.114 13.3008C2.89725 13.1279 3.06225 12.9306 3.312 12.9573C3.77325 13.0898 4.15575 13.4113 4.51575 13.8881C4.87425 14.3657 5.043 14.4739 5.71275 14.4739C6.0375 14.4739 6.5235 14.4548 6.981 14.3817C7.227 13.7472 7.65225 13.1629 8.172 12.8872C5.175 12.5741 3.74475 11.0598 3.74475 9.00381C3.74475 8.11866 4.116 7.26246 4.74675 6.54109C4.53975 5.82505 4.2795 4.36479 4.82625 3.80872C6.17475 3.80872 6.99 4.69691 7.18575 4.93686C7.85775 4.703 8.59575 4.57046 9.37125 4.57046C10.1482 4.57046 10.8892 4.703 11.5627 4.93838C11.7562 4.69996 12.5723 3.80872 13.9237 3.80872C14.4728 4.36555 14.2095 5.83191 14.0002 6.54642C14.6272 7.26627 14.9963 8.12019 14.9963 9.00381C14.9963 11.0582 13.5682 12.5718 10.5758 12.8864C11.3993 13.3229 12 14.5493 12 15.4733V17.5559C12 17.6351 11.9827 17.6923 11.9738 17.7601C15.4808 16.5116 18 13.1294 18 9.14092C18 4.09285 13.9703 0 9 0Z" fill="white" />
                                </svg>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/clarisse-carmona-581aa527b/' className='z-30' target='_blank'> 
                            <div>
                                <img className='rounded-full' width={26} height={26} src={linkedIn}/>
                            </div>
                        </a>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full gap-16 md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col items-center w-[90%] justify-center gap-4 md:gap-[30px] p-4 mt-4 font-medium absolute md:left-1/2 md:-translate-x-1/2  z-20 bg-[#141414]/[20%] md:bg-transparent border backdrop-blur-2xl md:backdrop-blur-0 border-[#222222] rounded-lg md:p-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li className="text-center">
                            <a href="#home" className="block text-center text-white rounded md:bg-transparent">Home</a>
                        </li>
                        <li className="text-center">
                            <a href="#services" className="block text-center text-white rounded md:bg-transparent">Services</a>
                        </li>
                        <li className="text-center">
                            <a href="#portfolio" className="block text-center text-white rounded md:bg-transparent">Portfolio</a>
                        </li>
                        <li className="text-center">
                            <a href="#contact" className="block text-center text-white rounded md:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;