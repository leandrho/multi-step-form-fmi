import { useContext } from 'react'
import { MultiStepContext } from '../context/MultiStepsProvider';


export const FinishingUpForm = () => {

    const { plan, monthly, addOns, jumpStep } = useContext(MultiStepContext);
;
    const calculateTotal = ()=>{
      let total = 0;
      addOns.forEach((a)=>total+=a.price);
      total+=plan.price;
      return total;
    }
    return (
      <div className='md:mt-4'>
        <div className='bg-(--Alabaster) p-4 rounded-md flex flex-col gap-4'>
          <div>
            <div className='flex justify-between items-center mb-2'>
              <div>
                <p className='text-(--Marine-blue) font-medium text-[15px]'>{`${plan.name} (${monthly?'Monthly':'Yearly'})`}</p>
                <button className='underline text-[15px] text-(--Cool-gray) cursor-pointer hover:text-(--Purplish-blue)' onClick={()=>jumpStep(1)}>Change</button>
              </div>
              <p className='text-(--Marine-blue) font-bold text-[15px]'>{ monthly ? `$${plan.price}/mo` : `$${plan.price*10}/yr` }</p>
            </div>
            <hr className='border-gray-300'/>
          </div>
          <div className='flex flex-col gap-3'>
            {
              addOns.map((addon)=>(
                <div key={addon.name+'_fin'} className='flex justify-between items-center'>
                    <p className='text-(--Cool-gray) text-[15px]'>{addon.name}</p>
                    <p className='text-(--Marine-blue) text-[15px]'>{ monthly ? `+$${addon.price}/mo` : `+$${addon.price*10}/yr` }</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex justify-between items-center p-4 mt-4'>
                    <p className='text-[15px] text-(--Cool-gray)'>{ `Total (per ${monthly?'month':'year'})` }</p>
                    <p className='font-bold text-(--Purplish-blue)'>{ monthly ? `$${calculateTotal()}/mo` : `$${calculateTotal()*10}/yr` }</p>
        </div>
      </div>
    )
}
