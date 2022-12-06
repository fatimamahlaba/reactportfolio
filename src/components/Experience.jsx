import React from "react";

const Experience = () => {
    return (
<section
      id="experience"
      className="min-h-screen pt-20 items-center" 
    > 
   <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
      </div>

      <div className="tabs">
   <div className="tab-header">
    <div className="active">
      <i className="fa fa-code"></i> Code
    </div>
    <div>
      <i className="fa fa-pencil-square"></i> About
    </div>
    <div>
      <i className="fa fa-bar-chart"></i> Services
    </div>
    <div>
      <i className="fa fa-envelope"></i> Contact
    </div>
  </div>
  <div className="tab-indicator"></div>
  <div className="tab-content">
    
    <div className="active">
      <i className="fa fa-code"></i>
      <h2>This is code section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
    <div>
      <i className="fa fa-pencil-square"></i>
      <h2>This is about section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
    <div>
      <i className="fa fa-bar-chart"></i>
      <h2>This is services section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
    <div>
      <i className="fa fa-envelope"></i>
      <h2>This is contact section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
  </div>
</div>
</section>
    );
};   
        
export default Experience;     