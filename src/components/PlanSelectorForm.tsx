import { useContext, useEffect } from 'react'

import { plans } from '../data';
import { MultiStepContext } from '../context/MultiStepsProvider';

export const PlanSelectorForm = () => {

    const {monthly, setMonthlyPlan, setPlanSelected, plan:curPlan} = useContext(MultiStepContext)
    useEffect(() => {
        if(curPlan.name=='')//el plan del state debe poder ser null, para evitar la comparacion con name vacio..
            setPlanSelected(plans[0])
    }, [])

    return (  
            <div className='w-full md:mt-6'>
                <div className='flex flex-col gap-4 md:flex-row'>
                    {
                    plans.map((plan, index)=>(
                        <label htmlFor={plan.name} key={plan.name} className='flex gap-4 p-4 border border-(--Light-gray) hover:border-(--Purplish-blue) cursor-pointer rounded-lg has-checked:border-(--Purplish-blue) has-checked:bg-(--Alabaster) md:flex-col md:gap-8 md:basis-0 md:grow' >
                            <input type="radio" name='plan' id={plan.name} className='hidden' defaultChecked={ curPlan.name==plan.name || (index==0 && !curPlan.name) } onChange={()=>setPlanSelected(plan)}/>
                            <figure>
                                <img src={plan.icon} alt="icon of plan" />
                            </figure>
                            <div className=''>
                                <h3 className='text-base font-medium text-(--Marine-blue)'>{plan.name}</h3>
                                <p className='text-sm text-(--Cool-gray)'>{ monthly ? `$${plan.price}/mo` : `$${plan.price*10}/yr` } </p>
                                { !monthly && <p className='text-[13px] text-(--Marine-blue)'>{`${plan.freeMonthsYearly} months free`}</p> }
                            </div>
                        
                        </label>
                    ))
                    }
                </div>
                <div className='flex gap-4 justify-center py-3 bg-(--Alabaster) rounded-lg text-sm font-medium mt-6'>
                    <p className={`${monthly?'text-(--Marine-blue)':'text-(--Cool-gray)'}`}>Monthly</p>
                    <div className='w-10 h-5 bg-(--Marine-blue) rounded-full relative'>
                        
                        <label htmlFor="monoryear" aria-label='select monthly or yearly'
                            className='absolute top-[50%] left-1 translate-y-[-50%] w-3 h-3 rounded-full bg-white  has-checked:translate-x-[21px] transition-all'
                        >
                            <input id='monoryear' type="checkbox" onChange={()=>setMonthlyPlan(!monthly)} checked={!monthly} className='hidden'/>
                        </label>
                    </div>
                    <p className={`${!monthly?'text-(--Marine-blue)':'text-(--Cool-gray)'}`}>Yearly</p>
                </div>
            </div>
    )
};
