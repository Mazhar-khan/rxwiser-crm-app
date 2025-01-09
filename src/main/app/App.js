import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PractiseLocation from "../../modules/settings/clinic/PractiseLocation";
import Practioners from "../../modules/settings/roster/Practioners";
import Calender from "../../modules/calender/Calender";
import Notes from "../../modules/patient-management/patient-profile/patient-record/notes/Notes";
import ProfileClient from "../../modules/patient-management/patient-profile/profile/details/ProfileDetails";
import ClientContact from "../../modules/patient-management/patient-profile/profile/contacts/ClientContact";
import CreateContact from "../../modules/patient-management/patient-profile/profile/contacts/create-contact/CreateContact";
import AppoinmentsClient from "../../modules/patient-management/patient-profile/appoinments-history/AppoinmentsClient";
import PaymentReceived from "../../modules/patient-management/patient-profile/billig-history/PaymentReceived";
import Practitioner from "../../modules/settings/practitioner/Practitioner";
import PatientList from "../../modules/patient-management/patient/patient-list/PatientList";
import PatientFile from "../../modules/patient-management/patient-profile/patient-record/files/PatientFile";
import PatientDiagnose from "../../modules/patient-management/patient-profile/patient-record/diagnose/PatientDiagnose";
import ProfileCommunication from "../../modules/patient-management/patient-profile/communication/ProfileCommunication";
import AdminNotes from "../../modules/patient-management/patient-profile/admin-notes/notes/AdminNotes";
import AdminFiles from "../../modules/patient-management/patient-profile/admin-notes/files/AdminFiles";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main" id="top">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Calender />} />
              {/* Patientmanagement section */}
              <Route path="/patient-management/patient" element={<PatientList />} />
              <Route path="/patient-management/profile-details" element={<ProfileClient />} />
              <Route path="/patient-management/profile-contact" element={<ClientContact />} />
              <Route path="/patient-management/create-profile-contact" element={<CreateContact />} />
              <Route path="/patient-management/profile-appointment" element={<AppoinmentsClient />} />
              <Route path="/patient-management/profile-billings" element={<PaymentReceived />} />
              <Route path="/patient-management/profile-notes" element={<Notes />} />
              <Route path="/patient-management/profile-files" element={<PatientFile />} />
              <Route path="/patient-management/profile-diagnose" element={<PatientDiagnose />} />
              <Route path="/patient-management/profile-communication"  element={<ProfileCommunication />}  />
              <Route path="/patient-management/admin-notes" element={<AdminNotes />} />
              <Route path="/patient-management/admin-files" element={<AdminFiles />} />

             {/* Settings Section */}
              <Route path="/settings/practitioner" element={<Practitioner />} />
              <Route path="/settings/clinics" element={<PractiseLocation />} />
              <Route path="/settings/roster" element={<Practioners />} />
            </Routes>
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
