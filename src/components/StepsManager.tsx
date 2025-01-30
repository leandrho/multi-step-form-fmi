import { useContext, useRef } from 'react';
import { MultiStepContext } from '../context/MultiStepsProvider';
import { StepList } from './StepList';


export const StepsManager = () => {
    const {nextStep, prevStep, step} = useContext(MultiStepContext);
    const personFormRef = useRef<{ validateInputs: () => boolean } | null>(null)
    const validate = () => {
        switch(step){
            case 0:
                if(personFormRef.current){
                    if(personFormRef.current.validateInputs())
                        nextStep();
                }
                break;
            case 1:
            case 2:
            case 3:
                nextStep();
                break;
        }

    }
    return (
        <section className='flex flex-col grow justify-between gap-4  md:h-full md:justify-between md:py-6 '>
        
            <StepList personFormRef={personFormRef}/>
            <div className='flex justify-center'>
            {
                step!==4 && <div className={`flex bg-white  w-full py-4 ${(step>0 && step<4)?'justify-between':'justify-end'} md:max-w-[450px]`}>
                    {
                    (step>0 && step<4) &&  <button onClick={()=>prevStep()}
                        className='px-4 text-(--Cool-gray) cursor-pointer font-bold text-sm hover:text-(--Marine-blue)'
                        >
                            Go Back
                        </button>
                    }
                    <button onClick={()=>validate()}
                        className={`px-5 font-medium py-[10px] text-sm  rounded-lg text-(--Magnolia) mx-4 cursor-pointer ${step!==3?' bg-(--Marine-blue) hover:bg-(--Marine-blue-hover) ':' bg-(--Purplish-blue) hover:bg-(--Purplish-blue-hover) '}`}
                    >
                        {step!==3?'Next Step':'Confirm'}
                    </button>
                </div>
            }
            </div>
        </section>
    )
}
