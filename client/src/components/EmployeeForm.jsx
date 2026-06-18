import { useState } from "react";
import { useNavigate } from "react-router-dom"

const EmployeeForm = ({initialData, onSuccess, onCancel}) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const isEditMode = !!initialData;
    const handleSubmit = async (e)=>{
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl animate-fade-in">
        
    </form>
  )
}

export default EmployeeForm