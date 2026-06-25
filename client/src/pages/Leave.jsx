import { useCallback, useEffect, useState } from "react";
import { dummyLeaveData } from "../assets/assets";
import Loading from "../components/Loading";
import { PalmtreeIcon, ThermometerIcon, UmbrellaIcon } from "lucide-react";

const Leave = () => {

  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const isAdmin = false;

  const fetchLeaves = useCallback(()=>{
    setLeaves(dummyLeaveData);
    setTimeout(()=> {
      setLoading(false);
    }, 1000);
  },[]);

  useEffect(()=> {
    fetchLeaves()
  },[fetchLeaves])

  if(loading) return <Loading />

  const approvedLeaves = leaves.filter((l)=>l.status === "APPROVED");
  const sickCount = approvedLeaves.filter((l)=> l.type === "SICK").length;
  const casualCount = approvedLeaves.filter((l)=> l.type === "CASUAL").length;
  const annualCount = approvedLeaves.filter((l)=> l.type === "ANNUAL").length;

  const leaveStats = [
    {label: "Sick Leave", value: sickCount, icon: ThermometerIcon},
    {label: "Casual Leave", value: casualCount, icon: UmbrellaIcon},
    {label: "Annual Leave", value: annualCount, icon: PalmtreeIcon},
  ]

  return (
    <div>Leave</div>
  )
}

export default Leave