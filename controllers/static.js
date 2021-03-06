const InvestModel = require('../models/investment');
const withdrawal = require('../models/withdrawal');
const properties = require('../models/properties');
const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../errors');

const getStaticInvestments = async (req, res) => {
  const investments = await InvestModel.find()
    .sort({ createdAt: -1 })
    .populate('property')
    .populate('user');
  res.status(StatusCodes.OK).json(investments);
};

const getStaticWithdrawal = async (req, res) => {
  const withdrawals = await withdrawal
    .find({})
    .sort({ createdAt: -1 })
    .populate('user');
  res.status(StatusCodes.OK).json(withdrawals);
};
module.exports = { getStaticInvestments, getStaticWithdrawal };
