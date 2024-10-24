// ResizableSidebar.js
import React, { useState } from "react";
import Sidebar from "./sidebar";

const ResizableSidebar = () => {
  const [width, setWidth] = useState(250); // Initial width in pixels
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: any) => {
    if (isResizing) {
        // Calculate the new width based on mouse position
        const newWidth = e.clientX; // Update width based on mouse position
  
        // Set the width within the min and max constraints
        if (newWidth >= 250 && newWidth <= 450) { // Minimum width of 150px and maximum of 400px
          setWidth(newWidth);
        } else if (newWidth < 250) {
          setWidth(250); // Set to minimum width if below 150px
        } else if (newWidth > 450) {
          setWidth(450); // Set to maximum width if above 400px
        }
      }
    };
  // Attach mouse events to the window
  React.useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isResizing]);

  return (
    <div
    className="rounded-2xl"
      style={{
        width: `${width}px`,
        transition: 'width 0.2s',
        background: '#121212', // Background color of the sidebar
        position: 'relative', // Set to relative to position the handle
        minWidth: '150px' // Minimum width
      }}
    >
    
      {/* Sidebar content here */}
      <div style={{ padding: "10px", color: "white" }}>
        <Sidebar />
      </div>
      
      {/* Resize Handle */}
      <div
      className={`hover:border-r-2 mt-2 ml--2 hover:border-white active:cursor-grabbing active:brightness-100 hover:filter hover:brightness-50 w-1 cursor-grab  bg-black ${isResizing ? "border-r-2 border-white hover:brightness-100": ""}`}
        style={{
           // Wider width for easier dragging
           // Color of the resize handle
          height: '97%',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 10, // Ensure it's above other elements
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default ResizableSidebar;
