import React from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./CompanyList.css"





const CompanyList = ({companies}) => {
  
    return (
        <>
        <div className="companylist">
        {companies.map((c)=> (<CompanyCard alt={c.name} text={c.text} title={c.title} src={c.src}></CompanyCard>))}
        </div>
        </>
    )
}

export default CompanyList