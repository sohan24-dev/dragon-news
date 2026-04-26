import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";


const NewsCard = ({ news }) => {
    // console.log(news, "news");
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                {/* author */}
                <div className="flex justify-between items-center bg-slate-200 p-2">
                    <div className="flex gap-1 items-center">
                        <Image
                            className="rounded-full"
                            src={news.author?.img}
                            width={40}
                            height={40}
                            alt={`${news.author?.name}`}
                        />
                        <div className="">
                            <h2>{news.author?.name}</h2>
                            <p className="text-xs">{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <figure>
                    <Image
                        src={news.image_url}
                        width={300}
                        height={300}
                        className="w-full"
                        alt={news.title}
                    />
                </figure>
                <p className="line-clamp-4">{news.details}</p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h2 className="flex items-center gap-1"><FaStar className="text-lg text-yellow-500" />{news.rating.number}</h2>
                        <h2 className="flex items-center gap-1"><FaEye className="text-lg" />{news.total_view}</h2>
                    </div>
                    <Link href={`/news/${news._id}`}><button className="btn">See Details </button></Link>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;