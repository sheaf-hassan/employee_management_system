import { Plus, X } from "lucide-react";
import { useState } from "react"

const GeneratePayslipForm = ({employees, onSuccess}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, isLoading] = useState(false);

    if(!isOpen) return (
        <button onClick={()=>setIsOpen(true)}
        className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4"/> Generate Payslip
        </button>
    )

    const handleSubmit = async (e)=> {
        e.preventDefault();
    }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="card max-w-lg w-full p-6 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Generate Monthly Payslip</h3>
                <button onClick={()=>setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1">
                    <X size={20}/>
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Employee */}
            </form>
        </div>
    </div>
  )
}

export default GeneratePayslipForm