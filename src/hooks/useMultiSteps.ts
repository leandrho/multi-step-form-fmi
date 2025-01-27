import { useState } from 'react'
import { Plan, PersonalInfo, AddOn, MultiStepsFormType } from '../types';

const initialState :MultiStepsFormType = {
    step1: {name: '', email: '', phone: ''},
    step2: {name: '', price: 0, freeMonthsYearly: 0, icon:''},
    step3: []
}

export const useMultiSteps = () => {
    
    const [multiStepsState, setMultiStepsState] = useState<MultiStepsFormType>(initialState);
    const [monthly, setMonthly] = useState<boolean>(true);
    const [step, setStep ] = useState<number>(0);

    const setMonthlyPlan = (m :boolean) => { 
        if(m == monthly)
            return;

        setMonthly(monthly);
    }
    const setPersonInfo = (p :PersonalInfo)=>{
        setMultiStepsState(prev => ({...prev, step1: p}));
    }
    const setPlanSelected = (p:Plan)=>{
        setMultiStepsState(prev => ({...prev, step2: p}));
    }
    const setAddOns = (addOns :AddOn[])=>{
        setMultiStepsState(prev=>({...prev,step3: addOns}));
    }
    const nextStep = () => {
        if(step < 4)
            setStep(prev=>prev+1)
    }
    const prevStep = () => {
        if(step > 0)
            setStep(prev=>prev-1)
    }
    return {
        step,
        nextStep,
        prevStep,
        monthly,
        personalInfo :multiStepsState.step1,
        plan :multiStepsState.step2,
        addOns :multiStepsState.step3,
        setMonthlyPlan,
        setPersonInfo,
        setPlanSelected,
        setAddOns
    }
}
