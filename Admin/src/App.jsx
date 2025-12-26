import AdminDashboard from "./components/AdminDashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./components/Overview";

import ServicesLayout from "./components/ServicesLayout";
import ServiceList from "./components/layout_services/ServiceList";
import AddCategory from "./components/layout_services/AddCategory";
import AddSubcategory from "./components/layout_services/AddSubcategory";
import AddService from "./components/layout_services/AddService";
import Bookings from "./components/Bookings";
import Vendors from "./components/vendors";
import Payouts from "./components/Payouts";
import Payments from "./components/Payments";
import Settings from "./components/Settings";
import Customers from "./components/Customers";
import Disputes from "./components/Disputes";
import Messages from "./components/Messages";
import Support from "./components/Support";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route index element={<Overview />} />
          <Route path="services" element={<ServicesLayout />}>
            <Route index element={<ServiceList />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="add-subcategory" element={<AddSubcategory />} />
            <Route path="add-service" element={<AddService />} />{" "}
            {/* The component from the previous step */}
          </Route>
          <Route path="bookings" element={<Bookings/>} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="customers" element={<Customers />} />
          <Route path="disputes" element={<Disputes />} />
          <Route path="messages" element={<Messages />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
