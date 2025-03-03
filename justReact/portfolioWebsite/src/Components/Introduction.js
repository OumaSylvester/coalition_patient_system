import {user} from '../data.js';

export  const Introduction =  ()=>{

    return (
        <div className=''>
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">               
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5>Hello there, I am</h5>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                    <h5>{user.workTitle}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {user.description}
                    <div>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</button>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Learn More</button>
                    </div>
                </p>
                </div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={require(`../images/${user.image}`)} alt=""/>
            </a>
            

        </div>
    )
}