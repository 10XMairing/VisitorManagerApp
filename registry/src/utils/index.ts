import Host from "../models/Host";

export function getCheckedInTemplate(user: {
  name: string;
  email: string;
  phone: string;
  checkin: string;
  address: string;
  host: {
    name: string;
    email: string;
  };
}): string {
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

export function getVisitEmail(user: {
  name: string;
  email: string;
  phone: string;
  checkin: string;
  address: string;
  host: {
    name: string;
    email: string;
  };
}): string {
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

export function getCheckOutTemplate(user: {
  name: string;
  email: string;
  phone: string;
  address: string;
  checkin: string;
  checkout: string;
}): string {
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

export function getCheckInSMs(user: {
  name: string;
  email: string;
  phone: string;
  address: string;
  checkin: string;
}): string {
  return `Hello ${user.name}, You just checked in at our office\nDetails : \n 
name : ${user.name}\n
email : ${user.email}\n
phone : ${user.phone}\n
address : ${user.address}\n
checked in <<: ${user.checkin}\n `;
}

export function getCheckOutSms(user: {
  name: string;
  email: string;
  phone: string;
  checkin: string;
  address: string;
  checkout: string;
}): string {
  return `Hello ${user.name} , Thank you for visiting us, \nYou just checked out\nDetails : \n 
name : ${user.name}\n
email : ${user.email}\n
phone : ${user.phone}\n
address : ${user.address}\n
checked in <<: ${user.checkin}\n
checked out >>: ${user.checkout}\n `;
}
