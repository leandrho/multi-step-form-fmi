
type InputInfoProps = {
    id:string,
    label: string,
    type: string,
    value: string,
    error: boolean,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    refInput :React.RefObject<HTMLInputElement>
}
export const InputInfo = ({id, label, type, value, handleChange, error, refInput}:InputInfoProps) => {
  return (
    <div className="parent">
        <div className="flex justify-between items-center">
            <label htmlFor={id} className="text-sm text-(--Marine-blue)">{label}</label>{/*'need to use useID in the input field if you want to re-use the component..'*/}
                {
                    error ? <p className="text-(--Strawberry-red) text-xs font-medium">This field is required</p> :''
                }
        </div>
        <input id={id} 
            ref={refInput}
            type={type} 
            placeholder="e.g. stephenking@lorem.com" 
            className="mt-1 text-(--Marine-blue) block w-full font-medium outline outline-(--Light-gray) hover:outline-(--Purplish-blue) focus:outline-(--Purplish-blue)   rounded-sm px-4 py-2 placeholder:text-(--Cool-gray) placeholder:text-[15px]"
            value={value}
            onChange={(e)=>handleChange(e)}
        />
    </div>
  )
}
