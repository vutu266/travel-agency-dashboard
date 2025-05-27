import { calculateTrendPercentage, cn } from "~/lib/utils"



const StatsCard = ({total, headerTitle, currentMonthCount, lastMonthCount}: StatsCard) => {

    const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount);
    
    const isDecrement = trend === "decrement"

  return (
    <article className="stats-card">
        <h1 className="text-base font-medium">
            {headerTitle}
        </h1>

        <div className="content">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl">{total}</h2>

                <div className="flex items-center gap-2">
                    <figure className="flex items-center gap-1">
                        <img src={`/assets/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`}
                        className="size-5" alt='arror'/>
                        <figcaption className={cn('text-sm font-medium', 
                        isDecrement ? 'text-red-500' : 'text-success-700')}>
                            {Math.round(percentage)}%
                        </figcaption>
                    </figure>
                    <p className='text-sm font-medium text-gray-100 truncate'>vs last month</p>
                </div>
            </div>
            <img src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`}
                className="xl:w-32 w-full h-full md:h-32 xl:h-full" alt="trend"/>
        </div>
    </article>
  )
}

export default StatsCard