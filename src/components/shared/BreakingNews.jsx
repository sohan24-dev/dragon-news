import Marquee from "react-fast-marquee";
const data = [
    {
        "id": 1,
        "title": "New Technology Revolutionizes Web Development"
    },
    {
        "id": 2,
        "title": "Global Economy Shows Signs of Recovery"
    },
    {
        "id": 3,
        "title": "Local Sports Team Wins Championship"
    }
]

const BreakingNews = () => {
    return (
        <div className="flex justify-between bg-gray-200 container mx-auto py-3 px-2 rounded-xl">
            <button className="btn bg-pink-500 text-white ">Latest News </button>
            <Marquee pauseOnHover={true} speed={150}>
                {
                    data.map(datas => <div className="ml-8" key={datas.id}><p>{datas.title}</p></div>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;