
import { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react"
import { MultiStepContext } from "../context/MultiStepsProvider";

type PersonalInfoFormProps = {

}
export const PersonalInfoForm = forwardRef(({  } :PersonalInfoFormProps, ref) => {
    const {personalInfo, setPersonInfo} = useContext(MultiStepContext);
    const [errors, setErrors ] = useState({name:false, email: false, phone:false})
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const validateInputs = () :boolean => {
        let ret :boolean = true;
        let errs = {name:false, email: false, phone: false};
        if(nameRef.current && nameRef.current.value==''){
            console.log('Error name')
            errs = {...errs, name:true};
            ret=false;
        }
        if(emailRef.current && emailRef.current.value==''){
            console.log('Error email')
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
        <div className="flex flex-col gap-4">        
            <div className="parent">
                <div className="flex justify-between items-center">
                    <label htmlFor="person-name" className="text-sm">Name</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                    {
                        errors.name && <p className="text-red-400 text-xs font-medium">This field is required</p>
                    }
                </div>
                <input 
                    ref={nameRef}
                    id="person-name" 
                    type="text" 
                    placeholder="e.g. Stephen King" 
                    className=" block w-full font-medium outline outline-gray-400  rounded-sm px-4 py-2 "
                    value={personalInfo.name}
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className="parent">
                <div className="flex justify-between items-center">
                    <label htmlFor="person-email" className="text-sm">Email Address</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                        {
                            errors.email ? <p className="text-red-400 text-xs font-medium">This field is required</p> :''
                        }
                </div>
                <input id="person-email" 
                    ref={emailRef}
                    type="email" 
                    placeholder="e.g. stephenking@lorem.com" 
                    className=" block w-full font-medium outline outline-gray-400 rounded-sm px-4 py-2 "
                    value={personalInfo.email}
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className="parent">
                <div className="flex justify-between items-center">
                <label htmlFor="person-phone" className="text-sm">Phone Number</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                        {
                            errors.phone ? <p className="text-red-400 text-xs font-medium">This field is required</p>:''
                        }
                </div>
                <input id="person-phone"
                    ref={phoneRef} 
                    type="text" 
                    placeholder="e.g. +1 234 567 890" 
                    className=" block w-full font-medium outline outline-gray-400 rounded-sm px-4 py-2"
                    value={personalInfo.phone}
                    onChange={(e)=>handleChange(e)}
                />
            </div>
        </div>
    )
});
