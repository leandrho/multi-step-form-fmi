
type StepProps = {
    step :number,
    description: string,
    active :boolean
}

export const Step = ({step, description, active}:StepProps) => {
  return (
    <div className="flex items-center gap-6 uppercase">
            <p className={`h-8 w-8 text-[15px] font-medium border-2 border-white rounded-full flex justify-center items-center ${active?' bg-white text-black' : ' bg-transparent text-white'}`}>
                {step}
            </p>
            <div className="hidden md:block">
              <p className="text-sm leading-5 font-medium text-gray-300">Step {step}</p>
              <p className="text-base leading-5 font-bold text-white">{description}</p>
            </div>
    </div>
  )
}
