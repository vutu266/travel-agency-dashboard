// @ts-nocheck
import React from 'react'
import { Link } from 'react-router'
import {Sidebar, SidebarComponent} from "@syncfusion/ej2-react-navigations"
import NavItems from './NavItems'

const MobileSidebar = () => {
  let sidebar : SidebarComponent

  const toggleSidebar = () => {
    if(sidebar) sidebar.toggle() //now the typescript sidebar becomes the syncfusion Sidebar.
  }
  
  return (
    <div className='mobile-sidebar wrapper'>
      <header>
        <Link to="/">
          <img 
              src="/assets/icons/logo.svg" 
              alt="logo" 
              className='size-[30px]'/>
          <h1>Tourvisto</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="assets/icons/menu.svg" alt="menu" className='size-7'/>
        </button>
          
      </header>

      <SidebarComponent 
        width={270}
        ref={(Sidebar) => sidebar = Sidebar} // make the variable sidebar equal to syncfusion Sidebar
        created={() => sidebar.hide()} // create the sidebar 
        closeOnDocumentClick={true} //  Sidebar closes when clicking outside
        showBackdrop={true} //  Adds a background overlay when sidebar is open
        type="over"
      >
        <NavItems handleClick={toggleSidebar}/>
      </SidebarComponent>
    </div>
  )
}

export default MobileSidebar