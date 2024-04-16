import React from 'react';
import Camera from "../assets/DashboardImages/cameraImg.png"

const UserProfile = () => {
  return (
    <div>
       <div className="py-[48px] px-[170px] bg-[rgb(250,250,250)] h-full min-h-[86vh]">
     
        
      <div className="uploadImgWrap">
                    <img
                      src={Camera}
                      alt="Profile" 
                    />
                    <input
                      type="file"
                      // onChange={(e) => profileImage(e)}
                    ></input>
                  </div>

      </div>
    </div>
  )
}

export default UserProfile