import { calculateTrendPercentage } from "~/lib/utils"


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
                    </figure>
                </div>
            </div>
        </div>
    </article>
  )
}

export default StatsCard