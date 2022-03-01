import ChartBar from "./chart";
import "./barchart.css";

const Barchart = (props) => {
  const chartPoints = [
    { label: "Jan", value: 50 },
    { label: "Feb", value: 40 },
    { label: "Mar", value: 20 },
    { label: "Apr", value: 30 },
    { label: "May", value: 66 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 100 },
    { label: "Aug", value: 10 },
    { label: "Sep", value: 80 },
    { label: "Oct", value: 70 },
    { label: "Nov", value: 90 },
    { label: "Dec", value: 45 },
  ];

  return (
    <div className="chart">
      {chartPoints.map((data) => (
        <ChartBar key={data.label} label={data.label} value={data.value} />
      ))}
    </div>
  );
};

export default Barchart;
