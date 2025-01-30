import { useContext } from "react"
import { MultiStepContext } from "../context/MultiStepsProvider"
import { PersonalInfoForm } from './PersonalInfoForm';
import { PlanSelectorForm } from './PlanSelectorForm';
import { Card } from './Card';
import { AddOnsForm } from './AddOnsForm';
import { FinishingUpForm } from './FinishingUpForm';
import { Message } from "./Message";

type StepListProps = {
    personFormRef :React.MutableRefObject<{ validateInputs: () => boolean; } | null>
}

export const StepList = ({personFormRef}:StepListProps) => {
    const {step} = useContext(MultiStepContext)
  return (
    <div className="">
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
    </div>
  )
}
