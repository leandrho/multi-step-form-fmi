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
        <div className="flex flex-col gap-4 md:mt-4">
            {
                addons.map((addon)=>(
                    <div key={addon.name} className="flex items-center justify-between rounded-md border border-(--Light-gray) hover:border-(--Purplish-blue) cursor-pointer px-3 py-3 md:py-4 md:px-6 has-checked:bg-(--Alabaster) has-checked:border-(--Purplish-blue)">
                        <div className="flex gap-4 items-center">
                            <label htmlFor={addon.name} 
                                className="w-[20px] h-[20px] rounded-sm border border-(--Light-gray) has-checked:bg-(--Purplish-blue) flex items-center justify-center"
                            >
                                <input id={addon.name} type="checkbox" className="hidden" checked={addOns.some((a)=>addon.name==a.name)} onChange={()=>handleChange(addon)}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                            </label>
                            <div className="">
                                <h2 className="text-sm font-medium text-(--Marine-blue)">{addon.name}</h2>
                                <p className="text-xs text-(--Cool-gray)">{addon.details}</p>
                            </div>
                        </div>
                        <p className="text-[13px] text-(--Purplish-blue)">{ monthly ? `+$${addon.price}/mo` : `+$${addon.price*10}/yr` }</p>
                    </div>
                ))
            }
        </div>
    )
};
