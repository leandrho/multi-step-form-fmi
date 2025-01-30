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
            
            {
                step!==4 && <div className={`flex bg-white w-full py-4 ${(step>0 && step<4)?'justify-between':'justify-end'}`}>
                    {
                    (step>0 && step<4) &&  <button onClick={()=>prevStep()}
                        className='px-4 text-gray-400 cursor-pointer font-bold'
                        >
                            Go Back
                        </button>
                    }
                    <button onClick={()=>validate()}
                        className='px-8 py-2 bg-black rounded-md text-white mx-4 hover:bg-gray-700 cursor-pointer'
                    >
                        {step!==3?'Next':'Confirm'}
                    </button>
                </div>
            }
            
        </section>
    )
}
