"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCheckedInTemplate(user) {
    return `<div style="background: #F6F8FA; margin: 0 24px; padding: 20px;">
      <h3>Visitor Record</h3>
      <p>Hello, ${user.name} , You just checked in at our office!</p>
      <p>Your Details :</p>
      <ul style="padding: 10px;border: 1px dashed grey;"">
        <li style="list-style: none;">
          <span style="font-weight: bold;">Name</span> : ${user.name}
        </li>
        <li style="list-style: none;">
        <span style="font-weight: bold;">Phone</span> : ${user.phone}
      </li>
        <li style="list-style: none;">
         <span style="font-weight: bold;">Email</span> : ${user.email}
      </li>
        <li style="list-style: none;">
         <span style="font-weight: bold;">Address</span> : ${user.address}
      </li>
        <li style="list-style: none;">
         <span style="font-weight: bold;">Host Name</span> : ${user.host.name}
      </li>
        <li style="list-style: none;">
         <span style="font-weight: bold;">Host Email</span> : ${user.host.email}
      </li>
         <li style="list-style: none;">
      <span style="font-weight: bold;">Check In <<</span> : ${user.checkin}
          </li>
      </ul>
    </div>`;
}
exports.getCheckedInTemplate = getCheckedInTemplate;
function getVisitEmail(user) {
    return `<div style="background: #F6F8FA; margin: 0 24px; padding: 20px;">
        <h3>Visitor Record</h3>
        <p>Hello, ${user.host.name} , You have a visitor!</p>
        <p>VIsitor Details :</p>
        <ul style="padding: 10px;border: 1px dashed grey;"">
          <li style="list-style: none;">
            <span style="font-weight: bold;">Name</span> : ${user.name}
          </li>
          <li style="list-style: none;">
          <span style="font-weight: bold;">Phone</span> : ${user.phone}
        </li>
          <li style="list-style: none;">
           <span style="font-weight: bold;">Email</span> : ${user.email}
        </li>
          <li style="list-style: none;">
           <span style="font-weight: bold;">Address</span> : ${user.address}
        </li>
   
           <li style="list-style: none;">
        <span style="font-weight: bold;">Check In <<</span> : ${user.checkin}
            </li>
        </ul>
      </div>`;
}
exports.getVisitEmail = getVisitEmail;
function getCheckOutTemplate(user) {
    return `<div style="background: #F6F8FA; margin: 0 24px; padding: 20px;">
        <h3>Visitor Record</h3>
        <p>Hello, ${user.name} , Thank you for visiting us</p>
        <p>You have just checked out</p>
        <p>Your Details :</p>
        <ul style="border: 1px dashed grey;"">
          <li style="list-style: none;">
            <span style="font-weight: bold;">Name</span> : ${user.name}
          </li>
          <li style="list-style: none;">
          <span style="font-weight: bold;">Phone</span> : ${user.phone}
        </li>
          <li style="list-style: none;">
           <span style="font-weight: bold;">Email</span> : ${user.email}
        </li>
        </li>
          <li style="list-style: none;">
           <span style="font-weight: bold;">Email</span> : ${user.address}
        </li>
           <li style="list-style: none;">
        <span style="font-weight: bold;">Check In << </span> : ${user.checkin}
            </li>
           <li style="list-style: none;">
        <span style="font-weight: bold;">Check Out >> </span> : ${user.checkout}
            </li>
        </ul>
      </div>`;
}
exports.getCheckOutTemplate = getCheckOutTemplate;
function getCheckInSMs(user) {
    return `Hello ${user.name}, You just checked in at our office\nDetails : \n 
name : ${user.name}\n
email : ${user.email}\n
phone : ${user.phone}\n
address : ${user.address}\n
checked in <<: ${user.checkin}\n `;
}
exports.getCheckInSMs = getCheckInSMs;
function getCheckOutSms(user) {
    return `Hello ${user.name} , Thank you for visiting us, \nYou just checked out\nDetails : \n 
name : ${user.name}\n
email : ${user.email}\n
phone : ${user.phone}\n
address : ${user.address}\n
checked in <<: ${user.checkin}\n
checked out >>: ${user.checkout}\n `;
}
exports.getCheckOutSms = getCheckOutSms;
//# sourceMappingURL=index.js.map