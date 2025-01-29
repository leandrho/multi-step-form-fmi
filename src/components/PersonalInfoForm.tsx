
import { forwardRef, useImperativeHandle } from "react"

type PersonalInfoFormProps = {

}
export const PersonalInfoForm = forwardRef(({  } :PersonalInfoFormProps, ref) => {
//   const {personalInfo, setPersonInfo} = useMultiSteps();
    const validateInputs = () :boolean => {
        console.log('VALIDANDO PERSONAL INFO..');
        return false;
    }
    useImperativeHandle(ref, ()=>({
        validateInputs
    }));
        
    return (
        <div className="">        
            <div className="">
                <label htmlFor="person-name" className="text-sm">Name</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                <input id="person-name" 
                    type="text" 
                    placeholder="e.g. Stephen King" 
                    className=" block w-full font-medium outline-hidden border rounded-sm px-4 py-2 "
                />
            </div>
            <div className="">
                <label htmlFor="person-email" className="text-sm">Email Address</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                <input id="person-email" 
                    type="email" 
                    placeholder="e.g. stephenking@lorem.com" 
                    className=" block w-full font-medium outline-hidden border rounded-sm px-4 py-2 "
                />
            </div>
            <div className="">
                <label htmlFor="person-phone" className="text-sm">Phone Number</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                <input id="person-phone" 
                    type="text" 
                    placeholder="e.g. +1 234 567 890" 
                    className=" block w-full font-medium outline-hidden border rounded-sm px-4 py-2"
                />
            </div>
        </div>
    )
});
