import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Line } from "react-chartjs-2";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   LineController,
//   PointElement,
//   LineElement,
//   Title,
// } from "chart.js";
import Header2 from "./Header";
// import academic_managementIcon from "../assets/academic_managementIcon.svg";
// // import resource_managementIcon from "../assets/resource_managementIcon.svg";
// // import lifestyleIcon from "../assets/lifestyleIcon.svg";
// import dashboardIcon from "../assets/dashboardIcon.svg";
// // import skillIcon from "../assets/skillIcon.svg";
// // import campusIcon from "../assets/campusIcon.svg";
// import subMenuIcon from "../assets/subMenuIcon.svg";
// // import helpIcon from "../assets/helpIcon.svg";
import "../styles/DashboardTemplate.css";
import Calculator from "./Calculator";
// import Application from "./Application";
// // import { Route } from "react-router-dom";
// // import Apply from "./jobs";
// import Address from "./Address";
// import emblem from "../components/images/img1.jpg"
// import photo from "../components/images/img2.jpg"

export default function DashboardTemplate() {
  return (
    <>
      <Header2 />
      <Sidebar />
      <Dashboard />
    </>
  );
}

function Sidebar() {
  const [isSBVisible, setIsSBVisible] = useState([]);
  // const sidebarClick = (key) => {
  //   // setIsSBVisible((prevISVisible) => {
  //   //   let visibleAarry = [...prevISVisible];
  //   //   visibleAarry[key] = !prevISVisible[key];
  //   //   return visibleAarry;
  //   // });
  //   {sidebarData.map((data)=>{
  //     if (key === data.id) {
  //       return (
  //         <>
  //           {/* <Application /> */}
  //           {/* <Calculator/> */}
  //         </>
  //       )
  //     }
  //   })}
  // };
  const sidebarData = [
    {
      id: 1,
      href: "/dashboard",
      text: "Dashboard",
      // image: dashboardIcon,
      sub_text: [],
    },
    {
      id: 2,
      href: "/calculate",
      text: "Tax Calculator",
      // image: academic_managementIcon,
      sub_text: [],
    },
    {
      id: 3,
      href: "/resource",
      text: "Resources",
      // image: academic_managementIcon,
      sub_text: [],
    },
    // {
    //   id:4,
    //   href:"/diff",
    //   text: "Functional Difficulties faced",
    //   // image: academic_managementIcon,
    //   sub_text: [],
    // },
    // {
    //   id:5,
    //   href:"/jobs",
    //   text: "Jobs",
    //   // image: academic_managementIcon,
    //   sub_text: [],
    // },
    // {
    //   id:6,
    //   href:"#",
    //   text: "Courses",
    //   // image: academic_managementIcon,
    //   sub_text: [],
    // },
  ];
  return (
    <aside>
      {sidebarData.map((data) => {
        return (
          <div className="sidebar-elements" key={data.id}>
            <Link to={data.href}>
              <button className="btn-click">            <span>{data.text}</span>
              </button></Link>
            <img src={data.image} />
            {data.sub_text.map((data_inside, index_inside) => {
              return (
                <div
                  className={isSBVisible[index] ? "open-sub-bar" : "closed"}
                  key={[index, index_inside]}
                >
                  <img src={subMenuIcon} />
                  {data_inside}
                </div>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
}

function Dashboard() {
  return (
    <>
      <div className="middle-dash">
        {/* <img src={emblem} alt="" /> */}


        {/* <DataChart /> */}
      </div>
      <div className="bottom-dash">
        {/* <img src={photo} alt="" /> */}
      </div>
    </>

  );
}

// function DataChart() {
//   Chart.register(
//     CategoryScale,
//     LinearScale,
//     LineController,
//     PointElement,
//     LineElement,
//     Title
//   );
//   const data = {
//     labels: [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//     ],
//     datasets: [
//       {
//         label: "Data",
//         data: [12, 19, 3, 5, 2, 3, 10, 25, 7],
//         fill: true,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.4,
//       },
//       {
//         label: "Data 2",
//         data: [7, 19, 23, 19, 21, 20, 17, 10, 18],
//         fill: true,
//         borderColor: "red",
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     backgroundColor: "white",
//     elements: {
//       line: {
//         borderWidth: 3,
//         fill: false,
//       },
//     },
//     scales: {
//       x: {
//         type: "category",
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: { display: false },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//   };

//   return (
//     <div id="chart-container">
//       <Line data={data} options={options} />
//     </div>
//   );
// }

// function Calender() {
//   return (
//     <div className="actual-calendar">
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Sun</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>1</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>8</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>15</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>22</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>29</div>
//       </div>
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Mon</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>2</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>9</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>16</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>23</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>30</div>
//       </div>
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Tue</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>3</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>10</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>17</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>24</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>31</div>
//       </div>
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Wed</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>4</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>11</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>18</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>25</div>
//         <div
//           style={{
//             color: "rgba(0, 0, 0, 0.3)",
//             fontSize: "18px",
//             fontWeight: "600",
//           }}
//         >
//           1
//         </div>
//       </div>
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Thu</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>5</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }} className="today">
//           12
//         </div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>19</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>26</div>
//         <div
//           style={{
//             color: "rgba(0, 0, 0, 0.3)",
//             fontSize: "18px",
//             fontWeight: "600",
//           }}
//         >
//           2
//         </div>
//       </div>
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Fri</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>6</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>13</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>20</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>27</div>
//         <div
//           style={{
//             color: "rgba(0, 0, 0, 0.3)",
//             fontSize: "18px",
//             fontWeight: "600",
//           }}
//         >
//           3
//         </div>
//       </div>
//       <div>
//         <div style={{ fontSize: "19px", fontWeight: "500" }}>Sat</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>7</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>14</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>21</div>
//         <div style={{ fontSize: "18px", fontWeight: "500" }}>28</div>
//         <div
//           style={{
//             color: "rgba(0, 0, 0, 0.3)",
//             fontSize: "18px",
//             fontWeight: "600",
//           }}
//         >
//           4
//         </div>
//       </div>
//     </div>
//   );
// }