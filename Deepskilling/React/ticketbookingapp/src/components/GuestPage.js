import React from "react";

function GuestPage() {
    return(
        <div>
            <h2>Welcome Guest!</h2>
            <h3>Flight Details</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Fare</th>
                    </tr>
                </thead>
                
               <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Mumbai</td>
                        <td>Delhi</td>
                        <td>₹5500</td>
                    </tr>

                    <tr>
                        <td>AI205</td>
                        <td>Pune</td>
                        <td>Bangalore</td>
                        <td>₹4200</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Please Login to book tickets.
            </p>
        </div>
    );
}

export default GuestPage;