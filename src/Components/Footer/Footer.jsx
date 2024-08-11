import { footerData } from "../../assets/Data/FooterData"


export const Footer = ()=>{
    return (
        <div className="border border-b-0 flex flex-row justify-between p-5 px-20 border-r-0 border-l-0 shadow-3xl">
            {footerData.map((item)=>{
                return (
                    <div key={item.headerId} className="font-platform-xl  text-left float-left">
                        <div id="headerTitle">
                            {item.headerName}
                        </div>
                        <div className="flex flex-col mt-4 items-start">
                        {
                            item.items.map((headerItem)=>{
                                return (
                                    <div className="hover-shadow-1 roboto-mono font-platform-2  cursor-pointer text-slate-500  font-light" key={headerItem.itemId}>
                                        {headerItem.itemName}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}