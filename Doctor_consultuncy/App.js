// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/homepage.js';
// import SignInPage from './components/signinpage.js';
// import SignUpPage from './components/signuppage.js';
// import AppointmentPage from './components/appointmentpage.js';
// import DoctorsPage from './components/doctorspage.js';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signin" element={<SignInPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/find-doctors" element={<DoctorsPage />} />
//         <Route path="/appointment" element={<AppointmentPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage.js';
import SignInPage from './components/signinpage.js';
import SignUpPage from './components/signuppage.js';
import AppointmentPage from './components/appointmentpage.js';
import DoctorsPage from './components/doctorspage.js';
import DashboardPage from './components/temp.js'; // Import the DashboardPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/find-doctors" element={<DoctorsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/temp" element={<DashboardPage />} /> {/* Add the route to the DashboardPage */}
      </Routes>
    </Router>
  );
};

export default App;
