import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id)
    return {
        title: news.title,
        description:news.details,
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);

    // console.log(id);
    // console.log(news);

    return (
        <div className="max-w-5xl mx-auto my-6">
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
                    <p className="">{news.details}</p>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h2 className="flex items-center gap-1"><FaStar className="text-lg text-yellow-500" />{news.rating.number}</h2>
                            <h2 className="flex items-center gap-1"><FaEye className="text-lg" />{news.total_view}</h2>
                        </div>
                        <Link href={`/category/${news.category_id}`}>
                            <button className="btn gap-2 bg-pink-600 text-white">
                                <FaArrowLeftLong />
                                See other News for this category
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;