
import { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react"
import { MultiStepContext } from "../context/MultiStepsProvider";
import { InputInfo } from './InputInfo';

export const PersonalInfoForm = forwardRef(({}, ref) => {
    const {personalInfo, setPersonInfo} = useContext(MultiStepContext);
    const [errors, setErrors ] = useState({name:false, email: false, phone:false})
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const validateInputs = () :boolean => {
        let ret :boolean = true;
        let errs = {name:false, email: false, phone: false};
        if(nameRef.current && nameRef.current.value==''){
            errs = {...errs, name:true};
            ret=false;
        }
        if(emailRef.current && emailRef.current.value==''){
            errs = {...errs, email:true};
            ret=false;
        }
        if(phoneRef.current && phoneRef.current.value==''){
            errs = {...errs, phone:true};
            ret=false;
        }
        if(!ret)
            setErrors(errs)
        return ret;
    }
    useImperativeHandle(ref, ()=>({
        validateInputs
    }));

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        switch (e.target.getAttribute('id')) {
            case 'person-name':
                setPersonInfo({...personalInfo, name: e.target.value})    
                break;
            case 'person-email':
                setPersonInfo({...personalInfo, email: e.target.value})    
                break;
            case 'person-phone':
                setPersonInfo({...personalInfo, phone: e.target.value})    
                break;
            default:
                break;
        }
           
    }    
    return (
        <div className="flex flex-col gap-4 md:mt-6">        
            <InputInfo id={'person-name'} refInput={nameRef} label={'Name'} type="text" value={personalInfo.name} handleChange={handleChange} error={errors.name}/>
            <InputInfo id={'person-email'} refInput={emailRef} label={'Email Address'} type="email" value={personalInfo.email} handleChange={handleChange} error={errors.email}/>
            <InputInfo id={'person-phone'} refInput={phoneRef} label={'Phone number'} type="text" value={personalInfo.phone} handleChange={handleChange} error={errors.phone}/>
        </div>
    )
});
