import Link from "next/link";


const LeftSidder = ({categorys,activeId}) => {
    return (
        <div className=" col-span-1 py-4 "><h2 className="font-bold text-lg">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-4 font-bold">
                {
                    categorys?.map(category => (
                        <li className={`${activeId===category.category_id && "bg-purple-500 text-white"} rounded-md font-bold text-center text-md `} key={category.category_id}
                        
                        ><Link className="block py-2 " href={`${category.category_id}`}>{category.category_name}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LeftSidder;