const { admin } = require("../models");

/**
 * Create admin
 * @param {object} reqBody
 * @returns {Promise<admin>}
 */
const createAdmin = async (reqBody) => {
    return admin.create(reqBody);
};

const getAdminList = async (req, res) => {
    return admin.find({ $or: [{ is_active: true }] })
        .populate("order")
        .populate("food")
        .populate("Restaurant")
        .populate("state")
        .populate("country")
        .populate("city")
};

const getAdminById = async (adminId) => {
    return admin.findById(adminId);
};

const updateDetails = async (adminId, updateBody) => {
    return admin.findByIdAndUpdate(adminId, { $set: updateBody });
};

const deleteadmin = async (AdminId) => {
    return admin.findByIdAndDelete(AdminId);
};

module.exports = {
    createAdmin,
    getAdminList,
    getAdminById,
    updateDetails,
    deleteadmin
};