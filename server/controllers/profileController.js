import Employee from "../models/Employee.js";
import User from "../models/User.js";

// Get profile
// GET /api/profile
export const getProfile = async (req, res) =>{
    try {
        const session = req.session;
        const user = await User.findById(session.userId);
        const employee = await Employee.findOne({userId: session.userId});

        if(!employee){
            // Authenticated user is not an employee - return admin profile
            return res.json({
                firstName: "Admin",
                lastName: "",
                email: user.email,
                bio: user.bio,
                role: user.role
            })
        }

        return res.json(employee)

    } catch (error) {
        return res.status(500).json({error: "Failed to fetch profile"});
    }
}

// Update profile
// PUT /api/profile
export const updateProfile = async (req, res) =>{
    try {
        const { bio } = req.body;
        const session = req.session;
        await User.findByIdAndUpdate(session.userId, { bio });
        const employee = await Employee.findOne({userId: session.userId});

        if (employee) {
            if (employee.isDeleted) {
                return res.status(403).json({
                    error: "Your account is deactivated. You can not update your profile."
                });
            }

            employee.bio = bio;
            await employee.save();

            return res.json({ success: true });
        }

        // Admin
        await User.findByIdAndUpdate(session.userId, {
            bio: req.body.bio,
        });

        return res.json({ success: true });
        
    } catch (error) {
        return res.status(500).json({error: "Failed to update profile"});
    }
}