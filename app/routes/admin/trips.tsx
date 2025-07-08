import { Header } from "components"
import type { LoaderFunctionArgs } from "react-router";
import { getAllTrips } from "~/appwrite/trips";
import { parseTripData } from "~/lib/utils";
import type {Route} from "./+types/trips"
import {TripCard} from "components";

export const loader = async ({request}: LoaderFunctionArgs) => {
   const limit = 8;
   const url = new URL(request.url);
   const page = parseInt(url.searchParams.get('page') || '1', 10)
   const offset = (page - 1) * limit

    const {allTrips, total} = await getAllTrips(limit, offset)

        
    return {
         total,
         Trips: allTrips.map(({$id, tripDetail, imageUrls}) => ({
            id: $id,
            ...parseTripData(tripDetail),
            imageUrls: imageUrls ?? [],
        }))
    }
}

const Trips = ({loaderData}: Route.ComponentProps) => {

   const trips = loaderData.Trips as Trip[] | [];

   return (
     <main className='all-users wrapper'>
        <Header 
            title="Trips"
            description="View and edit AI-generated travel plans"
            ctaText="Create a trip"
            ctaUrl="/trips/create"
        />

        <section>
            <h1 className="p-24-semibold text-dark-100 mb-4">
               Manage Created Trips
            </h1>
            <div className="trip-grid">
                    {trips.map(({id, name, imageUrls, itinerary, interests, travelStyle, estimatedPrice}) => (
                        <TripCard 
                            id={id}
                            key={id}
                            name={name}
                            location={itinerary?.[0].location ?? ''}
                            imageUrl={imageUrls[0]}
                            tags={[interests, travelStyle]}
                            price={estimatedPrice}
                            />
                    ))}      
            </div>
        </section>
     </main>
  )
}

export default Trips