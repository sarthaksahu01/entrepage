import { LineChart } from "./LineChart";
import { useEffect, useState } from "react";
import { PieChart } from "./PieChart";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiOutlineCaretUp } from "react-icons/ai";
// import { csv } from "d3";
export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-heading">DASHBOARD</div>
      <div className="container">
        <div className="container-left">
          <div className="container-signups">
            <h3>Signups</h3>
            <h4>Daily signups</h4>
            <div className="container-signups-figure">
              {" "}
              <AiOutlineCaretUp />
              431
            </div>
            <h1>10,802</h1>
            <div>past 30 days</div>
          </div>
          <div className="container-widget-added">
            <LineChart />
          </div>
        </div>
        <div className="container-center">
          <div className="container-center-MMR">MMR</div>
          <div className="MMR-capital">
            {" "}
            <AiOutlineCaretUp />$ 340.23K
          </div>
          <div>CURRENT MRR</div>
          <div className="container-center-current">10 K vs past 15 days</div>
          <div className="container-center-recent">Recent MRR Changes</div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container-right">
          <div className="container-CS">
            <div>Funds Utilization</div>
            <PieChart />
          </div>
          <div className="container-customer-feedback">
            <div>Recent Feedbacks</div>
            <div className="feedback-data">
              <BsFillCheckSquareFill className="s-10 " />
              <span className="px-1">Helpful</span>
            </div>
            <div className="feedback-data">
              <BsFillCheckSquareFill className="s-10 " />
              <span className="px-1">Helpful</span>
              <hr />
            </div>
            <div className="feedback-data">
              <BsFillCheckSquareFill className="s-10 " />
              <span className="px-1">Helpful</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
