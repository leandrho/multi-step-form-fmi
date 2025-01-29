import { forwardRef, useContext, useImperativeHandle } from 'react'

import { plans } from '../data';
import { MultiStepContext } from '../context/MultiStepsProvider';

export const PlanSelectorForm = forwardRef(({},ref) => {

    const {monthly, setMonthlyPlan, setPlanSelected, plan:curPlan} = useContext(MultiStepContext)

    const validateInputs = ()=>{
        return true;
    }
    useImperativeHandle(ref,()=>({
        validateInputs
    }));
    
    return (  
            <div className=''>
                <div className='flex flex-col gap-3'>
                    {
                    plans.map((plan, index)=>(
                        <label htmlFor={plan.name} key={plan.name} className='flex  gap-4 p-4 border border-gray-300 rounded-lg has-checked:border-gray-800 has-checked:bg-gray-100' >
                            <input type="radio" name='plan' id={plan.name} className='hidden' defaultChecked={ curPlan.name==plan.name || (index==0 && !curPlan.name) } onChange={()=>setPlanSelected(plan)}/>
                            <figure>
                                <img src={plan.icon} alt="icon of plan" />
                            </figure>
                            <div className=''>
                                <h3 className='text-base font-medium'>{plan.name}</h3>
                                <p className='text-sm text-gray-400'>{ monthly ? `$${plan.price}/mo` : `$${plan.price*10}/yr` } </p>
                                { !monthly && <p className='text-sm'>{`${plan.freeMonthsYearly} months free`}</p> }
                            </div>
                        
                        </label>
                    ))
                    }
                </div>
                <div className='flex gap-4 justify-center py-3 bg-gray-100 rounded-lg text-sm font-medium mt-6'>
                    <p className={`${monthly?'text-blue-500':'text-gray-400'}`}>Monthly</p>
                    <div className='w-10 h-5 bg-blue-950 rounded-full relative'>
                        
                        <label htmlFor="monoryear" aria-label='select monthly or yearly'
                            className='absolute top-[50%] left-1 translate-y-[-50%] w-3 h-3 rounded-full bg-white  has-checked:translate-x-[21px] transition-all'
                        >
                            <input id='monoryear' type="checkbox" onChange={()=>setMonthlyPlan(!monthly)} checked={!monthly} className='hidden'/>
                        </label>
                    </div>
                    <p className={`${!monthly?'text-blue-500':'text-gray-400'}`}>Yearly</p>
                </div>
            </div>
    )
});
