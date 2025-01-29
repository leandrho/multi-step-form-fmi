import { useContext, useRef } from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';
import { PlanSelectorForm } from './PlanSelectorForm';
import { Card } from './Card';
import { AddOnsForm } from './AddOnsForm';
import { FinishingUpForm } from './FinishingUpForm';
import { MultiStepContext } from '../context/MultiStepsProvider';
import { Message } from './Message';

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
        <section className='flex flex-col justify-end gap-4 items-end'>
        
            {
                step==0 && <Card name='Personal info' description='Please provide your name, email address, and phone number.'>
                    <PersonalInfoForm ref={personFormRef} /> 
                </Card>
            }
            {
                step==1 && <Card name='Select your plan' description='You have the option of monthly or yearly billing.'>
                    <PlanSelectorForm />
                </Card>
            }
            {
                step==2 && <Card name='Pick add-ons' description='Add-ons help enhance your gaming experience.'>
                    <AddOnsForm />
                </Card>
            }
            {
                step==3 && <Card name='Finishing up' description='Double-check everything looks OK before confirming.'>
                    <FinishingUpForm />
                </Card>
            }
             {
                step==4 && <Card name='' description=''>
                    <Message />
                </Card>
            }
            <div className='flex justify-between w-full'>
                <button onClick={()=>prevStep()}
                    className='px-8 py-2 bg-black rounded-md text-white mx-4 hover:bg-gray-700 cursor-pointer'
                >
                    Prev
                </button>
                <button onClick={()=>validate()}
                    className='px-8 py-2 bg-black rounded-md text-white mx-4 hover:bg-gray-700 cursor-pointer'
                >
                    {step!==3?'Next':'Confirm'}
                </button>
               
            </div>
            
        </section>
    )
}
