import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Shared/Layout/Layout";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome to Sanjeevni Blood Bank, where every drop counts and every
            donation makes a life-saving difference. At Sanjeevni, we are
            dedicated to ensuring the health and well-being of our community by
            providing a safe and reliable source of blood for those in need.
            With a passionate commitment to saving lives, our state-of-the-art
            facilities and compassionate team work tirelessly to connect donors
            with recipients, embodying the spirit of "Sanjeevni," the
            life-giving elixir. Join us in our mission to transform each
            contribution into a beacon of hope and healing, as we stand together
            to make a meaningful impact on the lives of those who depend on us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
