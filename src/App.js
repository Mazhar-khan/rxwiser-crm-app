import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessInfo from "./pages/BusinessInfo";
import PractiseLocation from "./pages/PractiseLocation";
import UserManagement from "./pages/UserManagement";
import Practioners from "./pages/Practioners";
 import Calender from "./pages/calender/Calender";
// import AddContact from "./pages/add/AddContact";
import Client from "./pages/client/Client";
import Shared from "./pages/shared/Shared";
import Contact from "./pages/contact/Contact";
import Referrer from "./pages/referrer/Referrer";
import Third_party from "./pages/third_party/Third_party";
import Searchoptions from "./pages/Searchoptions";
import AddNewModal from "./pages/AddNewModal";
import Notes from "./pages/notes/Notes";
import Correspondence from "./pages/correspondence/Correspondence";
import Record_files from "./pages/record_files/Record_files";
import Client_diagnoses from "./pages/client_diagnoses/Client_diagnoses";
import Communication_activity from "./pages/communication_activity/Communication_activity";
import New_sms from "./pages/new_sms/New_sms";
import New_email from "./pages/new_email/New_email";
import New_letter from "./pages/new_letter/New_letter";
import Admin_notes from "./pages/admin_notes/Admin_notes";
import Admin_files from "./pages/admin_files/Admin_files";
import Admin_form from "./pages/admin_form/Admin_form";
import Admin_manage from "./pages/admin_manage/Admin_manage";
import ProfileClient from "./pages/profile_client/ProfileClient";
import ClientContact from "./pages/client_contact/ClientContact";
import CreateContact from "./pages/create_contact/CreateContact";
import ReferralReceived from "./pages/referral-received/ReferralReceived";
import AppoinmentsRemindar from "./pages/appoinments_remindar/AppoinmentsRemindar";
import ClientTask from "./pages/client_task/ClientTask";
import AppoinmentsClient from "./pages/appoinments_client/AppoinmentsClient";
import AppointmentStatistics from "./pages/appointment_statistics/AppointmentStatistics";
import BillingSetup from "./pages/billing_setup/BillingSetup";
import Insurance from "./pages/insurance/Insurance";
import Invoices from "./pages/invoices/Invoices";
import CreateInvoice from "./pages/create_invoice/CreateInvoice";
import PaymentReceived from "./pages/payment_received/PaymentReceived";

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
             {/* <Route path="/add" element={<AddContact />} />  */}
             <Route path="/client" element={<Client />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/referrers" element={<Referrer />} />
            <Route path="/third-party" element={<Third_party />} />

              <Route path="/business_info" element={<BusinessInfo />} />
              <Route path="/practise_location" element={<PractiseLocation />} />
              <Route path="/user_management" element={<UserManagement />} />
              <Route path="/select_practitioners" element={<Practioners />} />
              <Route path="/Search_options" element={<Searchoptions />} />
              <Route path="/Add_New_Modal" element={<AddNewModal />} />

              <Route path="/notes" element={<Notes />} />
              <Route path="/profile_client" element={<ProfileClient />} />
              <Route path="/client_contact" element={<ClientContact />} />
              <Route path="/create_contact" element={<CreateContact />} />
              <Route path="/referral-received" element={<ReferralReceived />} />
              <Route path="/appoinments-remindar" element={<AppoinmentsRemindar />} />
              <Route path="/client-task" element={<ClientTask />} />
              <Route path="/appoinments_client" element={<AppoinmentsClient />} />
              <Route path="/appointment_statistics" element={<AppointmentStatistics />} />
              <Route path="/billing_setup" element={<BillingSetup />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/create_invoice" element={<CreateInvoice />} />
              <Route path="/payment_received" element={<PaymentReceived />} />


              <Route path="/correspondence" element={<Correspondence />} />
              <Route path="/record_files" element={<Record_files />} />
              <Route path="/client_diagnoses" element={<Client_diagnoses />} />
              <Route path="/communication_activity" element={<Communication_activity />} />
              <Route path="/create_sms" element={<New_sms />} />
              <Route path="/new_email" element={<New_email />} />
              <Route path="/create_letter" element={<New_letter />} />
              <Route path="/admin_notes" element={<Admin_notes />} />
              <Route path="/admin_files" element={<Admin_files />} />
              <Route path="/admin_form" element={<Admin_form />} />
              <Route path="/admin_manage" element={<Admin_manage />} />

            </Routes>
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

// code deployed from qasim side
