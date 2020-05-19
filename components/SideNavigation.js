import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import "../styles/SideNavigation.css";
import { useRouter } from "next/router";
const SideNavigation = ({ shipments }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push("/[id]", `/${id}`);
  };

  return (
    <div className={"sidebar"}>
      {shipments?.map((company) => {
        return (
          <a
            key={company.id}
            className={router.query.id === company.id ? "active" : null}
            onClick={() => handleClick(company.id)}
          >
            {/* <Link href={`/[id]`} as={`/${company.id}`}>
              {company.name}
            </Link> */}
            {company.name}
          </a>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ shipments }) => {
  return {
    shipments,
  };
};

export default connect(mapStateToProps)(SideNavigation);
