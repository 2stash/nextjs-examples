import Sidebar from './sidebar/sidebar'

export default function Layout({children}){
    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className='bg-sky-100'>{children}</div>
            
        </div>
    )
}