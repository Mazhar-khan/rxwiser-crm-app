import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!'

export default function Calender () {
    return (
        <>
        
            <div>
                <FullCalendar 
                style = {{ width:'100vw' }}
                headerToolbar={{
                    left: 'prev,next today', // Controls on the left
                    center: 'title', // Title in the center
                    right: 'dayGridWeek', // Views on the right
                }}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    //
                    
                />     
                  <style>
                {`
                   .fc-toolbar {
                        background-color: white; }
                    .fc-toolbar-title {
                        font-size: 10px; /* Adjust size here */
                        font-weight: normal; /* Optional: Make it thinner */
                        color: #333; /* Optional: Change color */
                    }
                     
                `}
            </style>
            
            </div>
        
 
        </>
    )
}