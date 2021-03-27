import {Button} from "../components/Button"



export default function Home() {
    return (
      <div className='bg-white'>
          <Button label="Press Me!" />
        <div className='max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <div className='flex justify-center'>
          </div>
          <div className='h-10'></div>
          <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
            Ready to dive in?
            <br />
            Start building something amazing.
          </h2>
          <div className='mt-8 flex justify-center'>
          </div>
        </div>
      </div>
    )
  }