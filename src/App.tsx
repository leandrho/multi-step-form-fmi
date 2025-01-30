import { StepsManager } from './components/StepsManager';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <main className='bg-gray-200 h-screen w-full'>
      <div className='flex h-full justify-center items-center '>
        <div className=' h-full md:h-[576px] flex flex-col md:flex-row  md:p-2 rounded-md max-w-[940px] w-full md:bg-white'>
            <Header />
            <div className='relative w-full flex flex-col md:flex md:flex-col md:items-center h-full md:bg-white '>
              <div className='absolute top-[-75px] h-absfull max-h-[912px] flex justify-center w-full md:static  md:h-full '>
                <StepsManager />
              </div>
            </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
