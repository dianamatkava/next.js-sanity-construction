function AppFooter () {
  return (
    <div
      className="self-stretch h-[632px] px-[60px] pt-[50px] pb-2.5 bg-[#050505] flex-col justify-between items-start flex">
      <div
        className="self-stretch grow shrink basis-0 pt-2.5 pb-10 border-b border-black justify-between items-start inline-flex">
        <div className="justify-start items-center gap-[88px] flex">
          <div className="w-[424.67px] h-[425px] flex-col justify-start items-start gap-[61px] inline-flex">
            <div className="h-[204px] relative">
              <div
                className="w-[424.67px] h-[69px] left-0 top-0 absolute justify-start items-center gap-5 inline-flex">
                <img className="w-[65px] h-[69px] rounded-full" src="https://via.placeholder.com/65x69"/>
                <div
                  className="grow shrink basis-0 text-[#f5efe7] text-2xl font-bold font-playfair">AMERICAN
                  ESSENTIAL CONSTRUCTION GROUP
                </div>
              </div>
              <div
                className="w-[424.67px] left-0 top-[99px] absolute text-[#828181] text-lg font-semibold font-['Open Sans'] leading-[35px]">We
                ensure a comprehensive assessment of damages, followed by repair, restoration and any necessary
                remediation measure
              </div>
            </div>
            <div className="self-stretch h-[58px] justify-start items-center gap-5 inline-flex">
              <div
                className="w-[57px] h-[57px] rounded-[100px] border border-[#202020] justify-center items-center flex">
                <div
                  className="w-5 h-5 p-2.5 rounded-[3px] border-2 border-[#828181] flex-col justify-center items-center gap-2.5 inline-flex"/>
              </div>
              <div
                className="w-[57px] h-[57px] px-[25px] rounded-[100px] border border-[#202020] justify-center items-center gap-2.5 flex"/>
              <div
                className="w-[57px] h-[57px] p-[15px] rounded-[100px] border border-[#202020] justify-center items-center flex"/>
              <div
                className="w-[57px] self-stretch px-[7px] py-3 rounded-[100px] border border-[#202020] justify-center items-center gap-2.5 flex"/>
            </div>
          </div>
          <div className="w-[242px] h-[425px] py-[25px] flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-white text-[28px] font-bold font-['Open Sans']">Services</div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">General
                Construction
              </div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">House Remodeling
              </div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">Water Damage
                Restoration
              </div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">Roofing</div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">Plumbing</div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">Public Adjusting
              </div>
            </div>
          </div>
          <div className="w-[242px] h-[425px] py-[25px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-white text-[28px] font-bold font-['Open Sans']">Links<br/></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">About Us</div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">Articles & News</div>
              <div className="w-[242px] text-[#828181] text-lg font-semibold font-['Open Sans']">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-[25px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="text-white text-[28px] font-bold font-['Open Sans']">Lets get Started</div>
          <div className="self-stretch h-[86.50px] flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#828181] text-sm font-normal font-['Open Sans']">Your Email</div>
              <div className="justify-start items-start gap-2.5 flex">
                <div className="w-6 h-5 relative"/>
                <div className="text-[#e2e2e2] text-lg font-semibold font-['Open Sans']">Send</div>
              </div>
            </div>
            <div className="self-stretch h-[0px] border border-[#828181]"></div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="justify-start items-start gap-[5px] flex"/>
              <div className="text-[#828181] text-base font-normal font-['Open Sans']">I agree to the Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch pt-[30px] pb-2.5 border-t border-neutral-700 justify-between items-start inline-flex">
        <div className="text-[#e2e2e2] text-lg font-normal font-['Open Sans']">© 2025 AMESC Group All Rights Reserved
          by site
        </div>
        <div className="text-[#e2e2e2] text-lg font-normal font-['Open Sans']">Privacy Policy | Terms of Service</div>
      </div>
    </div>
  )
}

export default AppFooter;