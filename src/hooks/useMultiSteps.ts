import { useState } from 'react'
import { Plan, PersonalInfo, AddOn, MultiStepsFormType } from '../types';

const initialState :MultiStepsFormType = {
    step1: {name: '', email: '', phone: ''},
    step2: {name: '', price: 0, freeMonthsYearly: 0, icon:''},
    step3: []
}
const MAXSTEPS :number = 5;
export const useMultiSteps = () => {
    
    const [multiStepsState, setMultiStepsState] = useState<MultiStepsFormType>(initialState);
    const [monthly, setMonthly] = useState<boolean>(true);
    const [step, setStep ] = useState<number>(0);

    const setMonthlyPlan = (m :boolean) => { 
        if(m == monthly)
            return;
    
        setMonthly(m);
    }
    const setPersonInfo = (p :PersonalInfo)=>{
        setMultiStepsState(prev => ({...prev, step1: p}));
    }
    const setPlanSelected = (p:Plan)=>{
        setMultiStepsState(prev => ({...prev, step2: p}));
    }
    const addAddOn = (addOn :AddOn)=>{
        setMultiStepsState(prev=>({...prev,step3: [...prev.step3, addOn]}));
    }
    const deleteAddOn = (addOn :AddOn)=>{
        setMultiStepsState(prev=>({...prev,step3: prev.step3.filter((a)=>a.name!==addOn.name)}));
    }
    const nextStep = () => {
        if(step < MAXSTEPS)
            setStep(prev=>prev+1)
    }
    const prevStep = () => {
        if(step > 0)
            setStep(prev=>prev-1)
    }
    const jumpStep = (s:number) => {
        if(s >= 0 && s < MAXSTEPS)
            setStep(s)
    }
    return {
        step,
        nextStep,
        prevStep,
        jumpStep,
        monthly,
        personalInfo :multiStepsState.step1,
        plan :multiStepsState.step2,
        addOns :multiStepsState.step3,
        setMonthlyPlan,
        setPersonInfo,
        setPlanSelected,
        addAddOn,
        deleteAddOn
    }
}
