const Stats = () => {
    return ( 
        <div className="bg-purple-500">
            <h2 className="text-4xl font-bold text-white text-center">Trusted by Millions, Built for You</h2>
            <div className="stats h-80 w-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Stats;