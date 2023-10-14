import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  MdOutlineAdd,
  MdOutlineDateRange,
  MdArrowUpward,
  MdOutlineArrowDownward,
  MdKeyboardArrowDown,
  MdLogout,
} from "react-icons/md";
import { RiFilter3Line, RiSearchLine, RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  LOGO,
  USER1,
  USER2,
  USER3,
  USER4,
  USER5,
  USER6,
} from "../../assets/images";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";
import { NavLink } from "react-router-dom";
import useAuth from "../../store/useAuth";
import { navlinks1, navlinks2 } from "../../utils/links";
import MobileSidebar from "../../components/MobileSidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler
);

const Dashboard = () => {
  const { logout } = useAuth((state) => state);
  const filterOptions: string[] = ["Default", "Saved view", "SDR view"];
  const [activeFilter, setActiveFilters] = useState(filterOptions[0]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const metrics = [
    {
      title: "Today's revenue",
      value: "$1,280",
      status: {
        status: "up",
        value: "10%",
      },
    },
    {
      title: "Today's orders",
      value: "14",
      status: {
        status: "up",
        value: "12%",
      },
    },
    {
      title: "Avg. order value",
      value: "$91.42",
      status: {
        status: "down",
        value: "2%",
      },
    },
  ];
  const activities = [
    {
      img: USER1,
      name: "Demi Wikinson",
      action: "Purchased",
      product: "Webflow 101",
    },
    {
      img: USER2,
      name: "Koray Okumus",
      action: "Purchased",
      product: "SEO Masterclass",
    },
    {
      img: USER3,
      name: "Drew Cano",
      action: "Purchased",
      product: "The Figma Dashboard Bundle",
    },
    {
      img: USER4,
      name: "Aliah Lane",
      action: "Purchased",
      product: "SEO Masterclass",
    },
    {
      img: USER5,
      name: "Zahir Mays",
      action: "Purchased",
      product: "The Figma Dashboard Bundle",
    },
    {
      img: USER1,
      name: "Demi Wikinson",
      action: "Purchased",
      product: "Webflow 101",
    },
    {
      img: USER2,
      name: "Koray Okumus",
      action: "Purchased",
      product: "SEO Masterclass",
    },
    {
      img: USER3,
      name: "Drew Cano",
      action: "Purchased",
      product: "The Figma Dashboard Bundle",
    },
    {
      img: USER4,
      name: "Aliah Lane",
      action: "Purchased",
      product: "SEO Masterclass",
    },
    {
      img: USER5,
      name: "Zahir Mays",
      action: "Purchased",
      product: "The Figma Dashboard Bundle",
    },
  ];
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const salesReportChart = {
    labels: labels,
    datasets: [
      {
        label: "Sales Report",
        data: [
          12000, 14000, 16000, 18000, 22000, 25000, 28000, 26000, 24000, 22000,
          20000, 18000,
        ],
        borderColor: "rgba(182, 146, 246, 1)",
        backgroundColor: (context: { chart: any }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          const gradient = ctx.createLinearGradient(
            chartArea.left,
            chartArea.top,
            chartArea.left,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(183, 146, 246, 0.141)");
          gradient.addColorStop(1, "rgba(183, 146, 246, 0.027)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };
  const storeTrafficChart = {
    labels: labels,
    datasets: [
      {
        label: "Store Traffic",
        data: [
          15000, 16000, 18000, 20000, 24000, 26000, 28000, 30000, 32000, 34000,
          36000, 38000,
        ],
        backgroundColor: ["rgba(158, 119, 237, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: "rgba(31, 36, 47, 1)",
        },
      },
      y: {
        grid: {
          color: "rgba(31, 36, 47, 1)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleActiveFilter = (option: string) => {
    setActiveFilters(option);
  };

  return (
    <div className="dashboard max-w-screen h-screen bg-bg_pry flex">
      <nav className="hidden navbar w-full fixed top-0 left-0 bg-bg_pry z-10">
        <div className="flex items-center justify-between max-w-[1500px] w-full px-[1.5rem] h-[8vh]">
          <div className="logo flex items-center gap-[8px]">
            <img src={LOGO} alt="" className="w-[32px] block cursor-pointer" />
            <p className="font-[600] text-[25px] leading-[24px] text-white cursor-pointer">
              Lyzerr
            </p>
          </div>

          <RiMenu2Fill
            className="text-[25px] text-text_sec cursor-pointer"
            onClick={() => setOpenSidebar(true)}
          />
        </div>
      </nav>

      <div className="sidebar w-[312px] h-full flex flex-col justify-between gap-[5rem] py-[32px] px-[20px] overflow-auto hide-scroll">
        <div className="flex flex-col gap-[24px]">
          <div className="header flex items-center gap-[8px]">
            <img src={LOGO} alt="" className="w-[32px] block cursor-pointer" />
            <p className="font-[600] text-[25px] leading-[24px] text-white cursor-pointer">
              Lyzerr
            </p>
          </div>
          <div className="search rounded-[8px] flex items-center gap-[8px] border border-border_pry overflow-clip px-[14px]">
            <RiSearchLine className="text-text_placeholder text-[20px] cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[44px] border-none text-text_sec placeholder:text-text_placeholder font-[400] text-[16px] leading-[24px] bg-transparent"
            />
          </div>
          <nav className="navigation flex flex-col gap-[4px]">
            {navlinks1.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className="flex items-center justify-between py-[8px] rounded-[8px]"
              >
                <div className="flex items-center gap-[12px]">
                  {link.icon}
                  <span className="font-[600] text-[16px] leading-[24px] text-text_sec">
                    {link.text}
                  </span>
                </div>
                <MdKeyboardArrowDown className="text-[25px] text-text_quarterary_500" />
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-[24px]">
          <nav className="flex flex-col gap-[4px]">
            {navlinks2.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className="flex items-center justify-between py-[8px] rounded-[8px]"
              >
                <div className="flex items-center gap-[12px]">
                  {link.icon}
                  <span className="font-[600] text-[16px] leading-[24px] text-text_sec">
                    {link.text}
                  </span>
                </div>
              </NavLink>
            ))}
            <button
              className="logout-btn flex items-center gap-[12px] py-[8px] rounded-[8px] active:bg-border_secondary relative font-[600] text-[16px] leading-[24px] text-text_sec"
              onClick={logout}
            >
              <MdLogout className="text-[25px] text-text_quarterary_500" />
              <span>Logout</span>
            </button>
          </nav>

          <div className="account flex items-center gap-[12px]">
            <img
              src={USER6}
              alt=""
              className="w-[40px] h-[40px] block rounded-full object-cover cursor-pointer"
            />
            <div className="flex flex-col cursor-pointer">
              <p className="font-[600] text-[14px] leading-[20px] text-text_sec">
                user name
              </p>
              <p className="font-[400] text-[14px] leading-[20px] text-text_tertiary">
                example@email.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-wrap flex-1 h-full pt-[12px]">
        <div className="main w-full h-full bg-bg_secondary_subtle border border-border_secondary rounded-tl-[40px] px-[1.5rem] pt-[32px]">
          <div className="max-w-[1500px] w-full h-full m-auto flex flex-col gap-[32px] overflow-auto hide-scroll pb-[40px]">
            <div className="header-section w-full flex flex-col gap-[24px]">
              <div className="page-header flex justify-between">
                <div className="flex flex-col gap-[16px]">
                  <h1 className="font-[600] text-[30px] leading-[28px] text-text_primary">
                    Sales overview
                  </h1>
                  <p className="font-[400] text-[16px] leading-[24px] text-text_tertiary">
                    Your current sales summary and reviews
                  </p>
                </div>
                <div className="flex gap-[12px] h-fit">
                  <button className="flex items-center justify-center gap-[4px] bg-transparent border border-border_secondary rounded-[8px] py-[10px] px-[14px] text-text_sec shadow-md text-[14px] font-[600] leading-[20px]">
                    <AiOutlineCloudDownload className="text-[20px]" />
                    Export report
                  </button>
                  <button className="flex items-center justify-center gap-[4px] bg-pry rounded-[8px] border-none py-[10px] px-[14px] text-white shadow-md text-[14px] font-[600] leading-[20px]">
                    <MdOutlineAdd className="text-[20px]" />
                    Invite
                  </button>
                </div>
              </div>
              <div className="tabs-x-filters flex justify-between">
                <div className="w-fit flex rounded-[12px] overflow-clip border border-border_secondary">
                  {filterOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`flex items-center justify-center gap-[8px] bg-bg_pry border-r border-border_secondary  py-[8px] px-[14px] text-text_sec shadow-md text-[14px] font-[600] leading-[20px] last:border-no ${
                        activeFilter === option && "bg-border_pry"
                      }`}
                      onClick={() => handleActiveFilter(option)}
                    >
                      {activeFilter === option && (
                        <div className="w-[8px] h-[8px] rounded-full bg-success_secondary"></div>
                      )}
                      {option}
                    </button>
                  ))}
                </div>
                <div className="flex rounded-[12px] gap-[12px]">
                  <button className="flex items-center justify-center gap-[4px] rounded-[8px] bg-transparent border border-border_secondary py-[8px] px-[14px] text-text_sec text-[14px] font-[600] leading-[20px] shadow-md">
                    <MdOutlineDateRange className="text-[20px]" />
                    Jan 6, 2024 – Jan 13, 2024
                  </button>
                  <button className="filter flex items-center justify-center gap-[4px] rounded-[8px] bg-transparent border border-border_secondary py-[8px] px-[14px] text-text_sec text-[14px] font-[600] leading-[20px] shadow-md">
                    <RiFilter3Line className="text-[20px]" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="section flex gap-[40px]">
              <div className="flex-1 flex flex-col gap-[24px] h-full">
                <div className="metrics grid grid-cols-3 gap-[24px]">
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-bg_pry border border-border_secondary p-[24px] rounded-[8px] flex flex-col gap-[8px] relative"
                    >
                      <BsThreeDotsVertical className="absolute top-[18px] right-[18px] text-[20px] text-text_tertiary" />
                      <p className="text-text_tertiary font-[500] text-[14px] leading-[20px]">
                        {metric.title}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-text_primary font-[600] text-[30px] leading-[38px]">
                          {metric.value}
                        </span>
                        <span
                          className={`flex items-center gap-[4px] rounded-full py-[2px] px-[10px] font-[500] text-[14px] leading-[20px] border ${
                            metric.status.status === "up"
                              ? "bg-utility_success_50 text-utility_success_700 border-utility_success_200"
                              : "bg-utility_error_50 text-utility_error_700 border-utility_error_200"
                          }`}
                        >
                          {metric.status.status === "up" ? (
                            <MdArrowUpward className="text-[12px] text-utility_success_500" />
                          ) : (
                            <MdOutlineArrowDownward className="text-[12px] text-utility_error_500" />
                          )}
                          {metric.status.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="reports overflow-auto flex flex-col gap-[24px] hide-scroll">
                  <div className="report rounded-[8px] p-[24px] flex flex-col gap-[20px] bg-bg_pry">
                    <div className="flex flex-col gap-[20px]">
                      <div className="flex justify-between items-center">
                        <h3 className="font-[600] text-[18px] leading-[28px] text-text_primary">
                          Sales Report
                        </h3>
                        <button className="py-[10px] px-[14px] border border-border_secondary bg-bg_secondary_subtle rounded-[8px] font-[600] text-[14px] leading-[20px] text-text_sec">
                          View report
                        </button>
                      </div>
                      <div className="flex gap-[4px] items-center w-full overflow-auto scroll pb-[8px]">
                        <button className="min-w-fit bg-border_secondary py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px] text-text_sec">
                          12 months
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          3 months
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          30 days
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          7 days
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          24 hours
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Line data={salesReportChart} options={chartOptions} />
                    </div>
                  </div>

                  <div className="report rounded-[8px] p-[24px] flex flex-col gap-[20px] bg-bg_pry">
                    <div className="flex flex-col gap-[20px]">
                      <div className="flex justify-between items-center">
                        <h3 className="font-[600] text-[18px] leading-[28px] text-text_primary">
                          Sales Report
                        </h3>
                        <button className="py-[10px] px-[14px] border border-border_secondary bg-bg_secondary_subtle rounded-[8px] font-[600] text-[14px] leading-[20px] text-text_sec">
                          View report
                        </button>
                      </div>
                      <div className="flex gap-[4px] items-center min-w-full overflow-auto scroll pb-[8px]">
                        <button className="min-w-fit bg-border_secondary py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px] text-text_sec">
                          12 months
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          3 months
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          30 days
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          7 days
                        </button>
                        <button className="min-w-fit text-text_quarterary_500 py-[8px] px-[12px] rounded-[8px] font-[600] text-[14px] leading-[20px]">
                          24 hours
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Bar data={storeTrafficChart} options={chartOptions} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="activity w-[240px] h-[90vh] overflow-auto flex flex-col gap-[24px] hide-scroll">
                <div className="flex justify-between">
                  <h2 className="font-[600] text-[18px] leading-[28px] text-text_primary">
                    Activity
                  </h2>
                  <button className="font-[600] text-[14px] leading-[20px] text-text_tertiary">
                    View all
                  </button>
                </div>
                <div className="flex flex-col gap-[20px]">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex gap-[12px]">
                      <img
                        src={activity.img}
                        alt=""
                        className="w-[32px] h-[32px] block object-cover rounded-full"
                      />
                      <div className="flex flex-col gap-[4px] font-[500] text-[14px] leading-[20px] text-text_sec">
                        <p>{activity.name}</p>
                        <p>
                          <span className="font-[400] text-text_tertiary">
                            {activity.action}
                          </span>{" "}
                          {activity.product}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileSidebar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
    </div>
  );
};

export default Dashboard;
