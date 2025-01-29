import { useRef } from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';
import { useMultiSteps } from '../hooks/useMultiSteps';
import { PlanSelectorForm } from './PlanSelectorForm';
import { Card } from './Card';
import { AddOnsForm } from './AddOnsForm';

export const StepsManager = () => {
    const {nextStep, prevStep, step} = useMultiSteps();
    const personFormRef = useRef<{ validateInputs: () => boolean } | null>(null)
    const planFormRef = useRef<{ validateInputs: () => boolean } | null>(null)
    const addonsFormRef = useRef<{ validateInputs: () => boolean } | null>(null)
    const validate = () => {
        switch(step){
            case 0:
                if(personFormRef.current){
                    if(personFormRef.current.validateInputs())
                        console.log('VALIDO.. DO NEXT')
                    else
                        console.log('NO VALIDO NO NEXT..')
                }
                break;
            case 1:
                if(planFormRef.current){
                    if(planFormRef.current.validateInputs())
                        console.log('PLAN VALIDO.. DO NEXT STEP 2')
                    else
                        console.log('PLAN NO VALIDO NO NEXT.. STEP 2')
                }
                break;
        }
        nextStep();
  
    }
    return (
        <section className='flex flex-col justify-end gap-4 items-end'>
        
            {
                step==0 && <Card name='Personal info' description='Please provide your name, email address, and phone number.'>
                    <PersonalInfoForm ref={personFormRef} /> 
                </Card>
            }
            {
                step==1 && <Card name='Select your plan' description='You have the option of monthly or yearly billing.'>
                    <PlanSelectorForm ref={planFormRef}/>
                </Card>
            }
            {
                step==2 && <Card name='Pick add-ons' description='Add-ons help enhance your gaming experience.'>
                    <AddOnsForm ref={addonsFormRef}/>
                </Card>
            }
            <button onClick={()=>validate()}
                className='px-8 py-2 bg-black rounded-md text-white mx-4 hover:bg-gray-700 cursor-pointer'
            >Next</button>
             <button onClick={()=>prevStep()}
                className='px-8 py-2 bg-black rounded-md text-white mx-4 hover:bg-gray-700 cursor-pointer'
            >Prev</button>
        </section>
    )
}
