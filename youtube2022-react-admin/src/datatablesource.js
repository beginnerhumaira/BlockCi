export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "project",
    headerName: "Project",
    width: 240,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.project}
        </div>
      );
    },
  },
 
  {
    field: "releasedamount",
    headerName: "Current Released",
    width: 200,
  },

  {
    field: "Targetamount",
    headerName: "Target Amount",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 2,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 3,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 4,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 5,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 6,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount:25000,
    Targetamount: 35000,
  },
  {
    id: 7,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 8,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 9,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
  {
    id: 10,
    project: "GAZA FOOD PROJECT",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    releasedamount: 25000,
    Targetamount: 35000,
  },
];
