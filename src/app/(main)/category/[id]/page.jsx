import LeftSidder from "@/components/Homepage/News/LeftSidder";
import NewsCard from "@/components/Homepage/News/NewsCard";
import RightSidebar from "@/components/Homepage/News/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";




const NewsCategory = async ({ params }) => {
    const { id } = await params
    const categorys = await getCategories()
    const AllNews = await getNewsByCategoryId(id)
    // console.log(id);
    return (
        <div className="grid sm:grid-cols-4 container mx-auto gap-4 my-15">
            <LeftSidder categorys={categorys} activeId={id}></LeftSidder>
            <div className="sm:col-span-2"><h2 className="text-xl font-bold">All News</h2>
                <div className="space-y-4">{
                    AllNews.length > 0 ? AllNews.map(n => {
                        return <NewsCard  
                        news={n}
                         key={n._id}>
                            
                        </NewsCard>
                    }): <h2 className="text-2xl font-bold flex items-center justify-center mt-10 text-slate-400">No News found 
                    </h2>
                }</div>
            </div>
            <div className="sm:col-span-1"><RightSidebar></RightSidebar></div>
        </div>
    );
};

export default NewsCategory;