import { useContext } from "react"
import { MultiStepContext } from "../context/MultiStepsProvider";
import { Step } from './Step';

export const Header = () => {
  const { step } = useContext(MultiStepContext);
  return (
    <header className="headerbg rounded-md w-full min-h-[172px] md:max-w-[274px] md:h-full">
        <div className="flex gap-4 justify-center pl-8 pt-8 md:flex-col">
          <Step step={1} description={"Your info"} active={step==0}/>
          <Step step={2} description={"Select plan"} active={step==1}/>
          <Step step={3} description={"Add-ons"} active={step==2}/>
          <Step step={4} description={"Summary"} active={step==3}/>
        </div>
    </header>
  )
}
