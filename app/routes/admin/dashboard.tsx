import React from 'react'
import { Header, StatsCard, TripCard } from 'components'

const Dashboard = () => {
  
  const user = {name: "Tu"}

  const dashboardStats = {
    totalUsers: 12450,
    userJoined: {currentMonth: 218, lastMonth: 176},
    totalTrips: 3210,
    tripCreated: {currentMonth: 150, lastMonth: 250},
    userRole: {total: 62, currentMonth: 25, lastMonth: 15}
  }
  const {totalUsers, userJoined, totalTrips, tripCreated, userRole} = dashboardStats

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
  
      <TripCard />

    </main>
  )
}

export default Dashboard