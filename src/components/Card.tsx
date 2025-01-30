import  { ReactNode } from 'react'

type CardProps = {
    name :string,
    description: string,
    children : ReactNode
}
export const Card = ( { name, description, children } : CardProps ) => {

  return (
    <div className="bg-white rounded-xl shadow-md md:shadow-none px-6 py-8 mx-4 flex flex-col gap-2 md:w-[450px] md:px-0">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-base pb-2">{description}</p>   
        {children}
    </div>
  )
};
