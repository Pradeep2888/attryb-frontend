import React from 'react'

function Sidebar() {
  return (
    <div className='sidebarcontainer'>
        <div> 
            <span>Price:</span>
            <select>
                <option>Select Price</option>
                <option value="lowtohigh" >Low To High</option>
                <option value="hightolow" >High To Low</option>
            </select>
        </div>
        <div> 
            <div>Colour:</div>
            <div>
               <input type="checkbox" value={"Red"} />
               <span>Red</span>
            </div>
            <div>
               <input type="checkbox" value={"Blue"} />
               <span>Blue</span>
            </div>
            <div>
               <input type="checkbox" value={"Green"} />
               <span>Green</span>
            </div>
            <div>
               <input type="checkbox" value={"Red"} />
               <span>Pink</span>
            </div>
            <div>
               <input type="checkbox" value={"Black"} />
               <span>Black</span>
            </div>
            <div>
               <input type="checkbox" value={"Red"} />
               <span>White</span>
            </div>
        </div>
        
        <div> 
            <span>Mileage:</span>
            <select>
                <option>Select Mileage</option>
                <option value="0-10" >0-10</option>
                <option value="10-20" >10-20</option>
                <option value="20-30" >20-30</option>
                <option value="30-40" >30-40</option>
                <option value="40-40" >40-50</option>
                <option value="50ormore" >50 or more</option>
            </select>
        </div>
    </div>
  )
}

export default Sidebar