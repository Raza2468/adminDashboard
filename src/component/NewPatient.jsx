import React from 'react';
import { Table, Radio, Divider, InputNumber, message } from 'antd';
 import './NewPatient.css';

export default function NewPatient() {


  const success = () => {
    message.success('This is a success message');
  };
     



  return (
    <div className="newUser">
      <h1 className="newUserTitle">Patient Form</h1>

      <form className="newUserForm" >
        <div className="newUserItem">
          <label>Patient Name</label>
          <input type="text" placeholder="Patient Name"  />
        </div>
        <div className="newUserItem">
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </div>
        <div className="newUserItem">
          <label>Contact Number</label>
          <input type="number" placeholder="030000000000"  />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="number" placeholder="Age"   />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Address"  />
        </div>
        <div className="newUserItem">
          <label>PC</label>
          <input type="text" placeholder="PC"  />
        </div>


        <div className="newUserItem">
          <label>Treatment</label>
          <input type="text" placeholder="Treatment"  />
        </div>
        <div className="newUserItem">
          <label>Next Visit</label>
          <input type="date" placeholder="Next Visit"  />
        </div>


        <div className="newUserItem">
          <label>Total Amount</label>
          <input type="number" placeholder="Total Amount"  />
        </div>
        <div className="newUserItem">
          <label>Paid Amount</label>
          <input type="number" placeholder="Paid Amount"  />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            {/* <input type="radio" name="gender" id="male" value="male" /> */}
            <input type="radio" name="gender" value="Male"  />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="Female"  />
            <label for="female">Female</label>

          </div>
        </div>
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}


        <button  className="newUserButton" type="sumbit">Save




        </button>

      </form>



    </div>
  );
}
