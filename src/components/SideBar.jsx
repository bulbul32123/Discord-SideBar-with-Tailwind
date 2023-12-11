import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';



export default function SideBar() {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
            <SideBarIcon icon={<FaFire size='28' /> } name='Fire'
            />
            <SideBarIcon icon={<BsPlus size='32' />} name='Add' 
            />
            <SideBarIcon icon={<BsFillLightningFill size='20'  /> } name='Flash'
            />
            <SideBarIcon icon={<FaPoo size='20'  />} name='Pops'
            />
            <SideBarIcon icon={<BsGearFill size='20'  />} name='Setting'
            />
        </div>
    )
}

const text = [
    {
        id: 1,
        text: 'Fire'

    },
    {
        id: 2,
        text: 'Add'

    },
    {
        id: 3,
        text: 'Flash'

    },
    {
        id: 4,
        text: 'Pops'

    },
    {
        id: 5,
        text: 'Setting'

    },
]
const SideBarIcon = ({ icon, name }) => {
    return (
         <>
            <div className="sidebar-icon group">
                {icon}
                <span className='sidebar-tooltip group-hover:scale-100'>
                    {
                        text.map((items)=>{
                            if(items.text === name) {
                                return items.text
                            }

                        })
                    }
                </span>
            </div>


        </>
    )
}