import React from 'react'
import { Header, StatsCard, TripCard } from 'components'
import {users, dashboardStats, allTrips, user} from '~/constants'
const {totalUsers, userJoined, totalTrips, tripCreated, userRole} = dashboardStats

const Dashboard = () => {
  return (
    <main className='dashboard wrapper'>
      <Header 
        title={`Welcome, ${user?.name ? user.name : "guest"}`}
        description="Track activity, trends and popular destinations in real time"
      />
      <section className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers} 
            currentMonthCount={userJoined.currentMonth}
            lastMonthCount={userJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips} 
            currentMonthCount={tripCreated.currentMonth}
            lastMonthCount={tripCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users Today"
            total={userRole.total} 
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <section className='container'>
        <h1 className='text-xl font-semibold text-dark-100'>
          Created Trips
        </h1>
        <div className='trip-grid'>
          {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice}) => (
            <TripCard 
              key={id}
              id={id.toString()}
              name={name}
              imageUrl={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ''}
              tags={tags}
              price={estimatedPrice}
              />
          ))}
        </div>
      </section>
      
     

    </main>
  )
}

export default Dashboard