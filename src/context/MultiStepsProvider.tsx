import { createContext, ReactNode } from "react"
import { AddOn, PersonalInfo, Plan } from "../types";
import { useMultiSteps } from "../hooks/useMultiSteps";


type MultStepContextType = {

    step: number,
    prevStep: ()=>void,
    nextStep: ()=>void,
    jumpStep: (s:number)=>void,
    monthly: boolean,

    personalInfo: PersonalInfo
    plan: Plan,
    addOns: AddOn[],
    setMonthlyPlan: (m:boolean)=>void,
    setPersonInfo: (p:PersonalInfo)=>void
    setPlanSelected: (p:Plan)=>void
    addAddOn: (a:AddOn)=>void
    deleteAddOn: (a:AddOn)=>void

}
export const MultiStepContext = createContext({} as MultStepContextType);

type MultiStepsProviderProps = {
    children: ReactNode
}
export const MultiStepsProvider = ({children}:MultiStepsProviderProps) => {
   
    const multi = useMultiSteps();
   
    return (
        <MultiStepContext.Provider value={{
           ...multi
        }}>
            {children}
        </MultiStepContext.Provider>
    )
}
