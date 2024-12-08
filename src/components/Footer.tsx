function AppFooter () {
  return (
    <div
      className="self-stretch px-[60px] pb-2.5 bg-[#050505] flex-col justify-between items-start flex">
      <div
        className="self-stretch grow shrink basis-0 pt-2.5 pb-10 border-b border-black justify-between items-start inline-flex flex-wrap">
        <div className="justify-start items-center gap-12 flex flex-wrap">
          <div className="flex-col w-1/3 justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-statext-[#828181]  font-semibold rt gap-4 inline-flex">
              <div
                className="justify-start items-center gap-5 inline-flex">
                <img className="rounded-full" src="https://via.placeholder.com/65x69"/>
                <div
                  className="grow shrink basis-0 text-[#f5efe7]  font-bold font-playfair">AMERICAN
                  ESSENTIAL CONSTRUCTION GROUP
                </div>
              </div>
              <div
                className="text-[#828181] font-semibold ">We
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
          <div class="flex-col justify-start items-start gap-8">
            <div className="py-[25px] flex-col justify-start items-start gap-10 inline-flex">
              <div className="self-stretch text-white text-md font-bold">Services</div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[242px] text-[#828181] font-semibold">General
                  Construction
                </div>
                <div className="w-[242px] text-[#828181] font-semibold">House Remodeling
                </div>
                <div className="w-[242px] text-[#828181] font-semibold">Water Damage
                  Restoration
                </div>
                <div className="w-[242px] text-[#828181] font-semibold">Roofing</div>
                <div className="w-[242px] text-[#828181] font-semibold">Plumbing</div>
                <div className="w-[242px] text-[#828181] font-semibold">Public Adjusting
                </div>
              </div>
            </div>
            <div className="py-[25px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-md font-bold">Links<br/></div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[242px] text-[#828181] font-semibold">About Us</div>
                <div className="w-[242px] text-[#828181] font-semibold">Articles & News</div>
                <div className="w-[242px] text-[#828181] font-semibold">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-1/4 py-[25px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="text-white text-md font-bold">Lets get Started</div>
          <div className="self-stretch h-[86.50px] flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#828181] text-sm font-normal">Your Email</div>
              <div className="justify-start items-start gap-2.5 flex">
                <div className="w-6 h-5 relative"/>
                <div className="text-[#e2e2e2] font-semibold">Send</div>
              </div>
            </div>
            <div className="self-stretch h-[0px] border border-[#828181]"></div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="justify-start items-start gap-[5px] flex"/>
              <div className="text-[#828181] text-base font-normal">I agree to the Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch pt-[30px] pb-2.5 border-t border-neutral-700 justify-between items-start inline-flex">
        <div className="text-[#e2e2e2] font-normal">© 2025 AMESC Group All Rights Reserved
          by site
        </div>
        <div className="text-[#e2e2e2] font-normal">Privacy Policy | Terms of Service</div>
      </div>
    </div>
  )
}

export default AppFooter;