import { useContext } from "react"
import { addons } from "../data";

import { MultiStepContext } from "../context/MultiStepsProvider";
import { AddOn } from "../types";

export const AddOnsForm = () => {
    const { monthly, addOns, addAddOn, deleteAddOn } = useContext(MultiStepContext);
    const handleChange = ( a :AddOn )=>{
        if(addOns.some((ad)=>ad.name==a.name))
            deleteAddOn(a);
        else
            addAddOn(a);
    }
    return (
        <div className="flex flex-col gap-4 ">
            {
                addons.map((addon)=>(
                    <div key={addon.name} className="flex items-center justify-between rounded-md border border-gray-300 px-3 py-2 has-checked:bg-gray-100 has-checked:border-gray-500">
                        <div className="flex gap-4 items-center">
                            <label htmlFor={addon.name} 
                                className="w-[20px] h-[20px] rounded-sm border border-gray-400 has-checked:bg-purple-900 flex items-center justify-center"
                            >
                                <input id={addon.name} type="checkbox" className="hidden" checked={addOns.some((a)=>addon.name==a.name)} onChange={()=>handleChange(addon)}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                            </label>
                            <div className="">
                                <h2 className="text-sm font-medium">{addon.name}</h2>
                                <p className="text-xs">{addon.details}</p>
                            </div>
                        </div>
                        <p className="text-[13px]">{ monthly ? `+$${addon.price}/mo` : `+$${addon.price*10}/yr` }</p>
                    </div>
                ))
            }
        </div>
    )
};
