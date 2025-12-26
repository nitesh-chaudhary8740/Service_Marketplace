import Homepage from "./components/Homepage"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import ServicePage from "./components/ServicePage"
import Layout from "./components/Layout"
import Checkout from "./components/Checkout"

import VendorOverview from "./components/Vendor/VendorOverView"
import VendorLayout from "./components/Vendor/VendorLayout"
import VendorSupport from "./components/Vendor/Menus/VendorSupport"
import { VendorSchedule } from "./components/Vendor/Menus/VendorSchedule"
import { VendorPayouts } from "./components/Vendor/Menus/VendorPayouts"
import { VendorServicePricing } from "./components/Vendor/Menus/VendorServicePricing"
import { VendorReviews } from "./components/Vendor/Menus/VendorReviews"
import { VendorInbox } from "./components/Vendor/Menus/VendorInbox"
import { VendorProfile } from "./components/Vendor/Menus/VendorProfile"



function App() {

return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="service" element={<ServicePage/>}/>
        </Route>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/vendor" element={<VendorLayout/>}>
        <Route index element={<VendorOverview/>}/>
        <Route path="support" element={<VendorSupport/>}/>
        <Route path="schedule" element={<VendorSchedule/>}/>
        <Route path="payouts" element={<VendorPayouts/>}/>
        <Route path="pricing" element={<VendorServicePricing/>}/>
        <Route path="reviews" element={<VendorReviews/>}/>
        <Route path="profile" element={<VendorProfile/>}/>
        <Route path="inbox" element={<VendorInbox/>}/>
        
        </Route>
        
      </Routes>

    </Router>
  )
}

export default App
