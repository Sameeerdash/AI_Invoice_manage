import React, { useState } from "react";

export default function Footer({ onRefreshData }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRefreshData = () => {
    if (typeof onRefreshData === "function") {
      onRefreshData();
    }
  };

  const handleEdit = () => {
    // Handle edit functionality here
    if (selectedRow !== null) {
      // Open the popup window with the selected row data
      console.log("Edit button clicked. Selected Row:", selectedRow);
    }
  };

  return (
    <footer style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <button
          onClick={handleRefreshData}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            marginLeft: "10px",
          }}
        >
          Refresh Data
        </button>
        <button
          onClick={handleEdit} // Call the handleEdit function on button click
          disabled={!selectedRow} // Disable the button if no row is selected
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            marginLeft: "10px",
          }}
        >
          Edit
        </button>
        <button
          // Add your Delete button here
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            marginLeft: "10px",
          }}
        >
          Delete
        </button>
        <button
          // Add your Predict button here
          style={{
            padding: "5px 20px",
            backgroundColor: "navy",
            color: "white",
            border: "none",
            marginLeft: "10px",
          }}
        >
          Predict
        </button>
      </div>
      <div style={{ marginTop: "10px", paddingBottom: "50px" }}>
        <a
          href="http://www.highradius.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Privacy Policy | &#169; 2023 Highradius All Rights Reserved
        </a>
      </div>
    </footer>
  );
}












// import React from "react";

// const Footerr = () => {
//   return (
//     <div className="Footer">
//       <h6>
//         <a href="./" className="privacy">
//           Privacy Policy
//         </a>{" "}
//         | @ 2023 HighRadius Corporation. All rights reserved.
//       </h6>
//     </div>
//   );
// };

// export default Footerr;
