

const Lodingpage = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-slate-900">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="mt-4 text-slate-300 font-medium animate-pulse">
                Initializing environment...
            </p>
        </div>
    );
};

export default Lodingpage;