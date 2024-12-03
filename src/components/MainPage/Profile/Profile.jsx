import avatar from '../../../assets/avatar.png'

export default function Profile() {
    const jobMessage = 'I am a strong junior web developer with one year experience in web app programming. Having strong, creative and analytical skills I am a team player with an eye for detail. Beyond my technical expertise, I also boast a solid background in marketing and business processes, enhancing my ability to deliver holistic solutions.'
    return (
        <section class="bg-white">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">{jobMessage}</p>
                </div>
                <div class="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={avatar} alt="avatar" className='max-w-md bg-white'/>
                </div>                
            </div>
        </section>
    )
}
